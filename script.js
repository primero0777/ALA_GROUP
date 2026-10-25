/* =====================================================
   ARCHIRAM BUILDING — script commun à toutes les pages
   -----------------------------------------------------
   Traduction : le français est écrit directement dans le HTML.
   Chaque élément traduisible porte data-i18n="clé" ; la version
   anglaise vient de SHARED_EN (ci-dessous) ou de window.PAGE_LANG.en
   défini dans la page. Les attributs (placeholder, content,
   aria-label…) se traduisent avec data-i18n-attr="attr:clé;attr:clé".
   ===================================================== */

/* ── 1. TEXTES COMMUNS (anglais) ── */
const SHARED_EN = {
  skip: 'Skip to content',
  nav_home: 'Home', nav_services: 'Services', nav_projects: 'Projects',
  nav_about: 'About', nav_contact: 'Contact', nav_cta: 'Free quote',
  nav_label: 'Main navigation', lang_label: 'Changer de langue / Switch language',
  theme_label: 'Light or dark mode', menu_label: 'Menu', home_label: 'ARCHIRAM BUILDING, home',
  crumb_home: 'Home', crumb_label: 'Breadcrumb',
  footer_nav: 'Navigation', footer_srv: 'Services', footer_contact: 'Contact',
  footer_rights: 'All rights reserved.', ft_tag: 'Designing, building and fitting out across West Africa.',
  ft_privacy: 'Privacy policy',
  srv1_title: 'Architecture', srv2_title: 'Eco-construction', srv3_title: 'Interior architecture',
  srv4_title: 'Civil engineering', srv5_title: 'Finishes and decoration', srv6_title: 'Eco art and upcycling',
  srv7_title: 'Equipment rental', srv8_title: 'Public-building finishes', srv9_title: 'Building services',
  srv10_title: 'Lift installation', srv11_title: 'IT', srv12_title: 'Low-voltage systems',
  wa_tip: 'Chat with us on WhatsApp', wa_label: 'WhatsApp', back_top: 'Back to top',
  cta_title: 'Ready to start your project?',
  cta_sub: 'Describe it in a few lines: we reply within 24 hours, on WhatsApp or by email.',
  cta_btn1: 'Get a free quote', cta_btn2: 'Message us on WhatsApp',
  /* Formulaire de contact (accueil et page Contact) */
  form_title: 'Send us a message', form_sub: 'Reply within 24 h',
  f_name: 'Full name *', f_phone: 'Phone *', f_email: 'Email', f_type: 'Project type *',
  f_type_ph: 'Choose a project type', f_msg: 'Message *', f_msg_ph: 'Plot, floor area, timeline, budget…',
  f_submit: 'Send via WhatsApp',
  f_note: 'The button opens WhatsApp with your message filled in; nothing is sent until you confirm it there.',
  f_t1: 'Architecture', f_t2: 'Eco-construction', f_t3: 'Interior architecture', f_t4: 'Civil engineering',
  f_t5: 'Finishes and decoration', f_t6: 'Eco art and upcycling', f_t7: 'Equipment rental',
  f_t8: 'Public-building finishes', f_t9: 'Building services', f_t10: 'Lift installation',
  f_t11: 'IT', f_t12: 'Low-voltage systems', f_t13: 'Other',
  cd_addr: 'Address', cd_hours: 'Hours', cd_email: 'Email',
  hours_short: 'Mon–Thu 8 am–6 pm · Fri 8 am–5 pm · Sat 9 am–2 pm',
  map_open: 'Open in Google Maps'
};

/* Messages générés par le script (dans les deux langues) */
const MSG = {
  fr: {
    open: 'Ouvert en ce moment',
    closed: 'Fermé — réponse dès la réouverture',
    required: 'Ce champ est obligatoire.',
    email: "Cette adresse email n'est pas valide.",
    choose: 'Choisissez une option pour continuer.',
    sending: 'Ouverture de WhatsApp…',
    theme_dark: 'Passer en mode sombre', theme_light: 'Passer en mode clair',
    lang_switch: 'Switch to English'
  },
  en: {
    open: 'Open now',
    closed: "Closed — we'll reply when we reopen",
    required: 'This field is required.',
    email: 'This email address is not valid.',
    choose: 'Choose an option to continue.',
    sending: 'Opening WhatsApp…',
    theme_dark: 'Switch to dark mode', theme_light: 'Switch to light mode',
    lang_switch: 'Passer en français'
  }
};

const WA_NUMBER = '22898067744';
const PAGE = window.PAGE_LANG || {};
const EN = Object.assign({}, SHARED_EN, PAGE.en || {});
const FR = PAGE.fr || {};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }
};

let currentLang  = store.get('ala-lang') === 'en' ? 'en' : 'fr';
let currentTheme = store.get('ala-theme') === 'dark' ? 'dark' : 'light';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const t = (key) => MSG[currentLang][key];

/* Icône SVG du sprite assets/icons.svg */
function icon(name) {
  return `<svg class="ic" aria-hidden="true"><use href="assets/icons.svg#i-${name}"></use></svg>`;
}

/* ── 2. TRADUCTION ── */
function isField(el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'; }

function cacheOriginals() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el._fr !== undefined) return;
    el._fr = isField(el) ? el.placeholder : (el.tagName === 'TITLE' ? el.textContent : el.innerHTML);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    if (el._frAttr) return;
    el._frAttr = {};
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr] = pair.split(':');
      el._frAttr[attr.trim()] = el.getAttribute(attr.trim());
    });
  });
}

function applyLang(lang) {
  cacheOriginals();
  const dict = lang === 'en' ? EN : FR;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    let val = dict[key];
    if (val === undefined || Array.isArray(val)) val = lang === 'fr' ? el._fr : undefined;
    if (val === undefined) return;
    if (isField(el)) el.placeholder = val;
    else if (el.tagName === 'TITLE') el.textContent = val;
    else el.innerHTML = String(val).replace(/\n/g, '<br>');
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      const val = lang === 'en' ? EN[key] : (FR[key] !== undefined ? FR[key] : el._frAttr[attr]);
      if (val !== undefined && val !== null) el.setAttribute(attr, val);
    });
  });

  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'fr' ? 'EN' : 'FR';
  const btn = document.getElementById('langToggle');
  if (btn) btn.setAttribute('title', t('lang_switch'));

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initLang() {
  applyLang(currentLang);
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    store.set('ala-lang', currentLang);
    applyLang(currentLang);
  });
}

/* ── 3. THÈME ── */
function syncThemeButton() {
  const use = document.querySelector('#themeToggle use');
  if (use) use.setAttribute('href', `assets/icons.svg#i-${currentTheme === 'light' ? 'moon' : 'sun'}`);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.setAttribute('title', t(currentTheme === 'light' ? 'theme_dark' : 'theme_light'));
}
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  syncThemeButton();
  document.addEventListener('langchange', syncThemeButton);
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    store.set('ala-theme', currentTheme);
    syncThemeButton();
  });
}

/* ── 4. NAVIGATION ── */
function initNav() {
  const nav   = document.getElementById('navbar');
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!nav) return;

  const syncTop = () => document.documentElement.style.setProperty('--menu-top', nav.offsetHeight + 'px');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24), { passive: true });
  window.addEventListener('resize', syncTop);
  syncTop();
  if (!ham || !links) return;

  const open = () => {
    syncTop();
    ham.classList.add('open'); links.classList.add('open');
    ham.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    if (!links.classList.contains('open')) return;
    ham.setAttribute('aria-expanded', 'false');
    ham.classList.remove('open');
    document.body.style.overflow = '';
    if (reduceMotion) { links.classList.remove('open'); return; }
    links.classList.add('closing');
    links.addEventListener('animationend', () => links.classList.remove('open', 'closing'), { once: true });
  };

  ham.addEventListener('click', () => (links.classList.contains('open') ? close() : open()));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', e => { if (e.matches) close(); });
}

/* ── 5. TITRE ROTATIF DU HERO ── */
function initHeroRotate() {
  const el = document.getElementById('heroRotate');
  if (!el) return;
  const words = () => (currentLang === 'en' ? EN.hero_words : FR.hero_words) || [el.textContent];
  let i = 0;
  document.addEventListener('langchange', () => { el.textContent = words()[i % words().length]; });
  if (reduceMotion) return;
  setInterval(() => {
    i = (i + 1) % words().length;
    el.classList.add('exit');
    setTimeout(() => {
      el.textContent = words()[i];
      el.classList.remove('exit');
      el.classList.add('enter');
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('enter')));
    }, 450);
  }, 3200);
}

/* ── 6. APPARITION AU DÉFILEMENT ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ── 7. COMPTEURS ── */
function initCounters() {
  const els = document.querySelectorAll('.stat-num[data-target]');
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target, dur = 1400;
      let start = null;
      const tick = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick);
      };
      el.textContent = '0';
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

/* ── 8. FILTRE DES RÉALISATIONS ── */
function initFilter() {
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const grid = document.getElementById(group.dataset.filterGroup);
    if (!grid) return;
    const btns = group.querySelectorAll('.flt');
    btns.forEach(btn => btn.addEventListener('click', () => {
      btns.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn); });
      const f = btn.dataset.filter;
      grid.querySelectorAll('[data-cat]').forEach(card => card.classList.toggle('hidden', f !== 'all' && card.dataset.cat !== f));
    }));
  });
}

/* ── 9. AVANT / APRÈS (curseur accessible au clavier) ── */
function initBASlider() {
  document.querySelectorAll('.ba-wrap').forEach(slider => {
    const range = slider.querySelector('.ba-range');
    if (!range) return;
    const set = v => slider.style.setProperty('--pos', v + '%');
    range.addEventListener('input', () => set(range.value));
    set(range.value);
  });
}

/* ── 10. TÉMOIGNAGES ── */
function initTestimonials() {
  const slides = document.querySelectorAll('.testi-slide');
  const pips   = document.querySelectorAll('.t-pip');
  const prev   = document.getElementById('tPrev');
  const next   = document.getElementById('tNext');
  const area   = document.getElementById('testiTrack');
  if (slides.length < 2 || !prev || !next) return;
  let cur = 0, timer;

  const go = n => {
    slides[cur].classList.remove('active'); slides[cur].setAttribute('aria-hidden', 'true');
    if (pips[cur]) pips[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active'); slides[cur].removeAttribute('aria-hidden');
    if (pips[cur]) pips[cur].classList.add('active');
  };
  const auto = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(cur + 1), 6000); };
  const stop = () => clearInterval(timer);

  slides.forEach((s, i) => { if (i !== 0) s.setAttribute('aria-hidden', 'true'); });
  prev.addEventListener('click', () => { go(cur - 1); auto(); });
  next.addEventListener('click', () => { go(cur + 1); auto(); });
  pips.forEach((p, i) => p.addEventListener('click', () => { go(i); auto(); }));
  if (area) {
    area.addEventListener('mouseenter', stop); area.addEventListener('mouseleave', auto);
    area.addEventListener('focusin', stop);    area.addEventListener('focusout', auto);
    let x0 = 0;
    area.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    area.addEventListener('touchend', e => {
      const d = x0 - e.changedTouches[0].clientX;
      if (Math.abs(d) > 50) { go(d > 0 ? cur + 1 : cur - 1); auto(); }
    }, { passive: true });
  }
  auto();
}

/* ── 11. CONTENUS TIERS CHARGÉS AU CLIC (vidéo YouTube, carte) ── */
function initClickToLoad() {
  document.querySelectorAll('[data-embed]').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.embed-box');
      const frame = document.createElement('iframe');
      frame.src = btn.dataset.embed;
      frame.title = btn.dataset.embedTitle || '';
      frame.loading = 'lazy';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      frame.className = 'embed-frame';
      box.innerHTML = '';
      box.appendChild(frame);
      track(btn.dataset.track || 'embed_load');
    });
  });
}

/* ── 12. FORMULAIRES → WHATSAPP ── */
function fieldError(field, msg) {
  const group = field.closest('.f-group');
  if (!group) return;
  let err = group.querySelector('.f-err');
  if (!err) {
    err = document.createElement('p');
    err.className = 'f-err';
    err.id = (field.id || field.name) + '-err';
    group.appendChild(err);
  }
  group.classList.toggle('error', !!msg);
  err.textContent = msg || '';
  if (msg) { field.setAttribute('aria-invalid', 'true'); field.setAttribute('aria-describedby', err.id); }
  else { field.removeAttribute('aria-invalid'); }
}

function checkField(field) {
  const v = (field.value || '').trim();
  if (field.required && !v) return t('required');
  if (field.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return t('email');
  return '';
}

/* Valide une liste de champs ; renvoie true si tout est bon */
function validate(fields) {
  let first = null;
  fields.forEach(f => {
    const msg = checkField(f);
    fieldError(f, msg);
    if (msg && !first) first = f;
  });
  if (first) first.focus();
  return !first;
}

function openWhatsApp(text) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

/* Libellé visible d'un champ, sans l'astérisque */
function labelOf(field) {
  const l = field.id && document.querySelector(`label[for="${field.id}"]`);
  return l ? l.textContent.replace('*', '').replace(/\s*\?\s*$/, '').trim() : field.name;
}
function valueOf(field) {
  if (field.tagName === 'SELECT') return field.options[field.selectedIndex].text.trim();
  return field.value.trim();
}

function initContactForm() {
  document.querySelectorAll('form[data-wa-form]').forEach(form => {
    const fields = [...form.querySelectorAll('input, select, textarea')].filter(f => f.name);
    fields.forEach(f => {
      f.addEventListener('blur', () => { if (f.value.trim()) fieldError(f, checkField(f)); });
      f.addEventListener('input', () => { if (f.closest('.f-group.error')) fieldError(f, checkField(f)); });
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate(fields)) return;
      const head = currentLang === 'fr' ? 'Bonjour ARCHIRAM BUILDING,' : 'Hello ARCHIRAM BUILDING,';
      const lines = fields.filter(f => f.value.trim()).map(f => `${labelOf(f)} : ${valueOf(f)}`);
      openWhatsApp(`${head}\n\n${lines.join('\n')}`);
      track('contact_submit', { page: location.pathname });
    });
  });
}

/* Assistant de devis en 3 étapes (devis.html) */
function initQuote() {
  const form = document.getElementById('quoteForm');
  if (!form) return;
  const steps  = [...form.querySelectorAll('.q-step')];
  const marks  = [...document.querySelectorAll('.q-progress li')];
  let cur = 0;

  const show = n => {
    cur = n;
    steps.forEach((s, i) => { s.hidden = i !== n; });
    marks.forEach((m, i) => {
      m.classList.toggle('active', i === n);
      m.classList.toggle('done', i < n);
      if (i === n) m.setAttribute('aria-current', 'step'); else m.removeAttribute('aria-current');
    });
    const h = steps[n].querySelector('h2');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  const checkStep = n => {
    const step = steps[n];
    const radios = step.querySelector('fieldset[data-required]');
    const errBox = step.querySelector('.q-choice-err');
    if (radios && !radios.querySelector('input:checked')) {
      if (errBox) errBox.textContent = t('choose');
      radios.querySelector('input').focus();
      return false;
    }
    if (errBox) errBox.textContent = '';
    return validate([...step.querySelectorAll('input:not([type=radio]), select, textarea')].filter(f => f.name));
  };

  form.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => { if (checkStep(cur)) show(cur + 1); }));
  form.querySelectorAll('[data-prev]').forEach(b => b.addEventListener('click', () => show(cur - 1)));
  form.querySelectorAll('input[type=radio]').forEach(r => r.addEventListener('change', () => {
    const errBox = r.closest('.q-step').querySelector('.q-choice-err');
    if (errBox) errBox.textContent = '';
  }));

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!checkStep(cur)) return;
    const fr = currentLang === 'fr';
    const lines = [fr ? 'Demande de devis — ARCHIRAM BUILDING' : 'Quote request — ARCHIRAM BUILDING', ''];
    form.querySelectorAll('fieldset[data-summary]').forEach(fs => {
      const c = fs.querySelector('input:checked');
      lines.push(`${fs.querySelector('legend').textContent.replace('*', '').trim()} : ${c ? c.closest('label').querySelector('.q-opt-title').textContent.trim() : '—'}`);
    });
    form.querySelectorAll('input:not([type=radio]), select, textarea').forEach(f => {
      if (f.name && f.value.trim()) lines.push(`${labelOf(f)} : ${valueOf(f)}`);
    });
    openWhatsApp(lines.join('\n'));
    track('quote_submit', { type: (form.querySelector('input[name=type]:checked') || {}).value || '' });
    form.hidden = true;
    document.querySelector('.q-progress').hidden = true;
    const done = document.getElementById('quoteDone');
    done.hidden = false;
    done.querySelector('h2').focus();
  });
}

/* ── 13. STATUT D'OUVERTURE (heure de Lomé = UTC+0) ── */
/* Lundi–jeudi 8 h–18 h, vendredi 8 h–17 h, samedi 9 h–14 h, dimanche fermé */
const HOURS = { 1: [8, 18], 2: [8, 18], 3: [8, 18], 4: [8, 18], 5: [8, 17], 6: [9, 14] };
function isOpenNow() {
  const d = new Date(), h = d.getUTCHours() + d.getUTCMinutes() / 60, slot = HOURS[d.getUTCDay()];
  return !!slot && h >= slot[0] && h < slot[1];
}
function initOpenState() {
  const els = document.querySelectorAll('[data-open-state]');
  if (!els.length) return;
  const render = () => {
    const open = isOpenNow();
    els.forEach(el => { el.textContent = t(open ? 'open' : 'closed'); el.classList.toggle('is-open', open); });
  };
  render();
  document.addEventListener('langchange', render);
  setInterval(render, 60000);
}

/* ── 14. FENÊTRE DE PROJET (projects.html) ── */
function initProjectDialog() {
  const dlg = document.getElementById('projDialog');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  const body = dlg.querySelector('.dlg-body');
  const open = (card, push) => {
    const tpl = card.querySelector('template');
    body.innerHTML = '';
    body.appendChild(tpl.content.cloneNode(true));
    applyLang(currentLang);
    dlg.showModal();
    if (push) history.replaceState(null, '', '#' + card.id);
    track('project_open', { project: card.id });
  };
  document.querySelectorAll('.proj-card[id] .proj-open').forEach(btn => {
    btn.addEventListener('click', () => open(btn.closest('.proj-card'), true));
  });
  dlg.querySelector('.dlg-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => history.replaceState(null, '', location.pathname));
  const fromHash = document.getElementById(location.hash.slice(1));
  if (fromHash && fromHash.classList.contains('proj-card')) open(fromHash, false);
}

/* ── 15. MESURE DES CLICS ──
   N'envoie rien tant qu'aucun outil n'est installé. Si vous ajoutez
   Plausible ou Google Analytics, les événements partent automatiquement
   (pensez à mettre à jour l'article 06 de la politique de confidentialité). */
function track(name, props) {
  props = props || {};
  try {
    if (typeof window.plausible === 'function') window.plausible(name, { props });
    if (typeof window.gtag === 'function') window.gtag('event', name, props);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, props));
  } catch (e) { /* la mesure ne doit jamais bloquer le site */ }
}
function initTracking() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href.includes('wa.me/')) track('whatsapp_click', { page: location.pathname, from: a.dataset.from || '' });
    else if (/(^|\/)devis\.html/.test(href)) track('quote_click', { page: location.pathname, from: a.dataset.from || '' });
    else if (href.startsWith('mailto:')) track('email_click', { page: location.pathname });
    else if (href.startsWith('tel:')) track('phone_click', { page: location.pathname });
  });
}

/* ── 16. RETOUR EN HAUT ── */
function initBackTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  const fab = document.querySelector('.wa-fab');
  const sync = () => {
    btn.classList.toggle('visible', window.scrollY > 700);
    if (fab) fab.classList.toggle('visible', window.scrollY > 420);
  };
  window.addEventListener('scroll', sync, { passive: true });
  sync();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
}

/* ── 17. ANNÉE DU PIED DE PAGE ── */
function initYear() {
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
}

/* ── DÉMARRAGE ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initOpenState();
  initLang();
  initNav();
  initHeroRotate();
  initReveal();
  initCounters();
  initFilter();
  initBASlider();
  initTestimonials();
  initClickToLoad();
  initContactForm();
  initQuote();
  initProjectDialog();
  initTracking();
  initBackTop();
  initYear();
});
