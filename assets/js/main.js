/**
 * ALA Building — Main JavaScript
 * Premium Architecture Website
 */

'use strict';

/* ══════════════════════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════════════════════ */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
const off = (el, ev, fn) => el && el.removeEventListener(ev, fn);

function debounce(fn, ms = 150) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/* ══════════════════════════════════════════════════════
   1. SCROLL PROGRESS BAR
   ══════════════════════════════════════════════════════ */
function initProgressBar() {
  const bar = $('#progress-bar');
  if (!bar) return;
  on(window, 'scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    bar.style.width = (scrollTop / (scrollHeight - clientHeight) * 100) + '%';
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════
   2. THEME MANAGER
   ══════════════════════════════════════════════════════ */
function initTheme() {
  const btn  = $('.theme-toggle');
  const html = document.documentElement;
  const KEY  = 'ala-theme';

  const stored = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  applyTheme(theme);

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    if (btn) {
      btn.querySelector('i').className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      btn.setAttribute('aria-label', t === 'dark' ? 'Mode clair' : 'Mode sombre');
    }
  }

  if (btn) {
    on(btn, 'click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(KEY, next);
      applyTheme(next);
    });
  }
}

/* ══════════════════════════════════════════════════════
   3. NAVBAR
   ══════════════════════════════════════════════════════ */
function initNavbar() {
  const nav    = $('.navbar');
  const btn    = $('.mobile-btn');
  const drawer = $('.mobile-drawer');
  if (!nav) return;

  // Scroll behavior
  const onScroll = debounce(() => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, 50);
  on(window, 'scroll', onScroll, { passive: true });
  onScroll();

  // Active link highlight
  const links = $$('.nav-link[href]');
  const currentPath = location.pathname.split('/').pop() || 'index.php';
  links.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.php')) {
      a.classList.add('active');
    }
  });

  // Mobile drawer
  if (btn && drawer) {
    on(btn, 'click', () => {
      const open = drawer.classList.toggle('open');
      btn.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    $$('.mobile-drawer .nav-link').forEach(a => {
      on(a, 'click', () => {
        drawer.classList.remove('open');
        btn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ══════════════════════════════════════════════════════
   4. HERO TYPEWRITER
   ══════════════════════════════════════════════════════ */
function initTypewriter() {
  const el = $('.hero__title');
  if (!el) return;

  const rawLines = el.getAttribute('data-lines');
  if (!rawLines) return;

  let lines;
  try { lines = JSON.parse(rawLines); } catch { return; }

  const cursor = el.querySelector('.hero__cursor');
  let li = 0, ci = 0, deleting = false;

  function tick() {
    const line  = lines[li];
    const shown = line.substring(0, ci);

    // Update text node before cursor
    el.childNodes[0].textContent = shown;

    let delay = deleting ? 50 : 100;

    if (!deleting && ci === line.length) { deleting = true; delay = 2200; }
    else if (deleting && ci === 0)       { deleting = false; li = (li + 1) % lines.length; delay = 400; }
    else if (deleting)                   { ci--; }
    else                                 { ci++; }

    setTimeout(tick, delay);
  }

  // Initialise text node
  if (!el.childNodes[0] || el.childNodes[0].nodeType !== 3) {
    el.prepend(document.createTextNode(''));
  }
  setTimeout(tick, 800);
}

/* ══════════════════════════════════════════════════════
   5. SCROLL REVEAL
   ══════════════════════════════════════════════════════ */
function initReveal() {
  const els = $$('.reveal, .reveal-l, .reveal-r');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════════
   6. ANIMATED COUNTERS
   ══════════════════════════════════════════════════════ */
function initCounters() {
  const counters = $$('.stat-number[data-target]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      animateCounter(e.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => {
    el.textContent = '0';
    obs.observe(el);
  });

  function animateCounter(el) {
    const target   = +el.dataset.target;
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const t0       = performance.now();

    function tick(now) {
      const progress = Math.min((now - t0) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const val      = Math.round(eased * target);
      el.textContent = val.toLocaleString() + (progress === 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
}

/* ══════════════════════════════════════════════════════
   7. BEFORE / AFTER SLIDER
   ══════════════════════════════════════════════════════ */
function initBeforeAfter() {
  const container = $('.ba-container');
  if (!container) return;

  const after  = container.querySelector('.ba-after');
  const handle = container.querySelector('.ba-handle');
  const hint   = container.querySelector('.ba-drag-hint');
  let isDragging = false;

  function setPos(clientX) {
    const rect = container.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    after.style.clipPath  = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left     = pct + '%';
    if (hint) hint.style.opacity = '0';
  }

  function onStart(e) {
    isDragging = true;
    e.preventDefault();
    setPos(e.touches ? e.touches[0].clientX : e.clientX);
  }

  function onMove(e) {
    if (!isDragging) return;
    setPos(e.touches ? e.touches[0].clientX : e.clientX);
  }

  function onEnd() { isDragging = false; }

  on(handle, 'mousedown',  onStart);
  on(handle, 'touchstart', onStart, { passive: false });
  on(document, 'mousemove',  onMove, { passive: true });
  on(document, 'touchmove',  onMove, { passive: true });
  on(document, 'mouseup',    onEnd);
  on(document, 'touchend',   onEnd);

  // Click on container to jump
  on(container, 'click', e => {
    if (e.target === handle || handle.contains(e.target)) return;
    setPos(e.clientX);
  });

  // Init at 50%
  setPos(container.getBoundingClientRect().left + container.offsetWidth * 0.5);
}

/* ══════════════════════════════════════════════════════
   8. PROJECT FILTER + MODAL
   ══════════════════════════════════════════════════════ */
function initProjects() {
  // Filter
  const filterBtns = $$('.filter-btn');
  const cards      = $$('.project-card[data-cat]');

  filterBtns.forEach(btn => {
    on(btn, 'click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.cat === filter;
        card.style.display = show ? '' : 'none';
        // re-trigger reveal if coming back
        if (show) card.classList.add('in');
      });
    });
  });

  // Modal
  const backdrop = $('#modal-backdrop');
  const modal    = $('#project-modal');
  const closeBtn = modal ? modal.querySelector('.modal__close') : null;

  if (!backdrop || !modal) return;

  function openModal(card) {
    const img   = card.dataset.img   || '';
    const title = card.dataset.title || '';
    const cat   = card.dataset.cat   || '';
    const desc  = card.dataset.desc  || '';
    const loc   = card.dataset.loc   || '';

    modal.querySelector('.modal__img').src = img;
    modal.querySelector('.modal__img').alt = title;
    modal.querySelector('.modal__title').textContent = title;
    modal.querySelector('.modal__cat').textContent   = cat;
    modal.querySelector('.modal__desc').textContent  = desc;
    modal.querySelector('.modal__loc').textContent   = loc;

    backdrop.classList.add('open');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  cards.forEach(card => on(card, 'click', () => openModal(card)));
  if (closeBtn)  on(closeBtn,  'click', closeModal);
  on(backdrop,   'click', closeModal);
  on(document,   'keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ══════════════════════════════════════════════════════
   9. TESTIMONIALS CAROUSEL
   ══════════════════════════════════════════════════════ */
function initTestimonials() {
  const track  = $('.testi-track');
  const slides = $$('.testi-slide');
  const dots   = $$('.testi-dot');
  if (!track || !slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  dots.forEach((dot, i) => on(dot, 'click', () => { clearInterval(timer); goTo(i); startAuto(); }));

  const prevBtn = $('.testi-prev');
  const nextBtn = $('.testi-next');
  if (prevBtn) on(prevBtn, 'click', () => { clearInterval(timer); goTo(current - 1); startAuto(); });
  if (nextBtn) on(nextBtn, 'click', () => { clearInterval(timer); goTo(current + 1); startAuto(); });

  function startAuto() { timer = setInterval(() => goTo(current + 1), 6000); }
  goTo(0);
  startAuto();

  // Touch swipe
  let startX = 0;
  on(track, 'touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  on(track, 'touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) { clearInterval(timer); goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════
   10. PARTNERS MARQUEE (pause on hover)
   ══════════════════════════════════════════════════════ */
function initMarquee() {
  const track = $('.marquee-track');
  if (!track) return;
  on(track, 'mouseenter', () => track.style.animationPlayState = 'paused');
  on(track, 'mouseleave', () => track.style.animationPlayState = 'running');
}

/* ══════════════════════════════════════════════════════
   11. VIDEO SECTION
   ══════════════════════════════════════════════════════ */
function initVideo() {
  const placeholder = $('.video-placeholder');
  if (!placeholder) return;

  const src = placeholder.dataset.src;
  if (!src) return;

  on(placeholder, 'click', () => {
    const wrap   = placeholder.parentElement;
    const iframe = document.createElement('iframe');
    iframe.src           = src + '?autoplay=1&rel=0';
    iframe.allow         = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.className     = 'w-full h-full';
    wrap.replaceChild(iframe, placeholder);
  });
}

/* ══════════════════════════════════════════════════════
   12. CONTACT FORM (AJAX)
   ══════════════════════════════════════════════════════ */
function initForm() {
  const form = $('#contact-form');
  if (!form) return;

  on(form, 'submit', async e => {
    e.preventDefault();
    const btn     = form.querySelector('[type="submit"]');
    const success = form.querySelector('.form-alert.success');
    const error   = form.querySelector('.form-alert.error');

    const origText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (btn.dataset.sending || 'Envoi…');
    if (success) success.style.display = 'none';
    if (error)   error.style.display   = 'none';

    try {
      const data = new FormData(form);
      const res  = await fetch(form.action || 'includes/process_form.php', {
        method:  'POST',
        body:    data,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });

      if (res.ok) {
        const json = await res.json().catch(() => ({ ok: true }));
        if (json.ok !== false) {
          form.reset();
          if (success) { success.style.display = 'block'; success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        } else {
          throw new Error(json.message || 'Error');
        }
      } else {
        throw new Error('Network error');
      }
    } catch {
      if (error) { error.style.display = 'block'; }
    } finally {
      btn.disabled  = false;
      btn.innerHTML = origText;
    }
  });
}

/* ══════════════════════════════════════════════════════
   13. SMOOTH SCROLL for anchor links
   ══════════════════════════════════════════════════════ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = $('.navbar')?.offsetHeight || 80;
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    });
  });
}

/* ══════════════════════════════════════════════════════
   14. PARALLAX (subtle, hero only)
   ══════════════════════════════════════════════════════ */
function initParallax() {
  const heroBg = $('.hero__bg img');
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  on(window, 'scroll', () => {
    if (window.scrollY > window.innerHeight) return;
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════
   15. INIT
   ══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initTheme();
  initNavbar();
  initTypewriter();
  initReveal();
  initCounters();
  initBeforeAfter();
  initProjects();
  initTestimonials();
  initMarquee();
  initVideo();
  initForm();
  initSmoothScroll();
  initParallax();
});
