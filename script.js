/* =====================================================
   ALA BUILDING — Main Script
   All features: i18n, theme, nav, hero rotate,
   counters, BA slider, carousel, partners, video,
   WhatsApp form, scroll reveal
   ===================================================== */

/* ── 1. TRANSLATIONS ── */
const LANG = {
  fr: {
    nav_home:'Accueil', nav_services:'Services', nav_projects:'Projets',
    nav_about:'À Propos', nav_contact:'Contact', nav_cta:'Devis gratuit',
    hero_eyebrow:'Architecture & Construction — Lomé, Togo',
    hero_static:'Nous bâtissons',
    hero_words:["l'Excellence","l'Avenir","vos Rêves","l'Afrique"],
    hero_sub:"Cabinet d'architecture premium spécialisé dans la conception, la construction et l'aménagement intérieur d'exception en Afrique de l'Ouest.",
    hero_cta1:'Voir nos projets', hero_cta2:'Nous contacter',
    hstat1:'Années', hstat2:'Projets', hstat3:'Pays', hstat4:'Satisfaction',
    srv_tag:'Nos Expertises', srv_title:'Des services conçus\npour l\'excellence',
    srv1_title:'Architecture', srv1_desc:"Conception architecturale sur mesure, des plans aux permis de construire, avec une vision esthétique unique et durable.",
    srv2_title:'Construction', srv2_desc:"Maîtrise d'œuvre complète avec des matériaux premium, dans le respect total des délais et du budget convenu.",
    srv3_title:'Design Intérieur', srv3_desc:"Aménagement d'espaces luxueux alliant fonctionnalité, esthétique raffinée et identité personnelle forte.",
    srv4_title:'Ingénierie', srv4_desc:"Études techniques, calculs de structures et solutions d'ingénierie pour des bâtiments durables et sécurisés.",
    srv5_title:'Finition & Rénovation', srv5_desc:"Travaux de finition haut de gamme et rénovation complète pour transformer et sublimer vos espaces existants.",
    srv6_title:'Promotion Immobilière', srv6_desc:"Développement de projets résidentiels et commerciaux, de la conception à la livraison clé en main.",
    srv_more:'En savoir plus',
    proj_tag:'Portfolio', proj_title:'Nos Réalisations',
    flt_all:'Tous', flt_res:'Résidentiel', flt_com:'Commercial', flt_int:'Intérieur',
    proj_cta:'Discuter de votre projet',
    ba_tag:'Transformation', ba_title:'Avant / Après',
    ba_before:'Avant', ba_after:'Après', ba_hint:'← Glissez pour comparer / Drag to compare →',
    stat1:"Années d'expérience", stat2:'Projets réalisés', stat3:"Pays d'intervention", stat4:'Clients satisfaits',
    testi_tag:'Témoignages', testi_title:'Ce que disent\nnos clients',
    t1_quote:'"ALA Building a transformé notre vision en réalité. Un professionnalisme remarquable et une attention aux détails exceptionnelle. Notre villa dépasse toutes nos attentes."',
    t1_role:'Entrepreneur, Accra',
    t2_quote:'"De la conception aux finitions, l\'équipe ALA a su comprendre et sublimer notre projet d\'entreprise. Je recommande à 100% pour tout projet d\'envergure."',
    t2_role:'Directrice, Lomé',
    t3_quote:'"Notre siège social est devenu une carte de visite architecturale. ALA maîtrise parfaitement la fusion entre fonctionnalité et esthétique contemporaine."',
    t3_role:'PDG, Lomé',
    partners_label:'Ils nous font confiance',
    vid_tag:'En Images', vid_title:'Notre savoir-faire\nen vidéo',
    contact_tag:'Contact', contact_title:'Parlons de\nvotre projet',
    contact_sub:"Chaque grand projet commence par une conversation. Dites-nous ce que vous envisagez, nous ferons le reste.",
    cd_addr:'Adresse',
    f_name:'Nom complet *', f_phone:'Téléphone *', f_email:'Email',
    f_type:'Type de projet *', f_type_ph:'Sélectionnez un type',
    f_t1:'Architecture', f_t2:'Construction', f_t3:'Design intérieur',
    f_t4:'Rénovation', f_t5:'Ingénierie', f_t6:'Autre',
    f_msg:'Message *', f_submit:'Envoyer via WhatsApp',
    footer_tag:'Architecture. Construction. Excellence.',
    footer_nav:'Navigation', footer_srv:'Services', footer_rights:'Tous droits réservés.',
    wa_tip:'Discutons sur WhatsApp'
  },
  en: {
    nav_home:'Home', nav_services:'Services', nav_projects:'Projects',
    nav_about:'About', nav_contact:'Contact', nav_cta:'Free Quote',
    hero_eyebrow:'Architecture & Construction — Lomé, Togo',
    hero_static:'We build',
    hero_words:['Excellence','the Future','your Dreams','Africa'],
    hero_sub:'Premium architecture studio specializing in design, construction and luxury interior fit-out across West Africa.',
    hero_cta1:'View our projects', hero_cta2:'Contact us',
    hstat1:'Years', hstat2:'Projects', hstat3:'Countries', hstat4:'Satisfaction',
    srv_tag:'Our Expertise', srv_title:'Services crafted\nfor excellence',
    srv1_title:'Architecture', srv1_desc:"Bespoke architectural design from concept to planning approval, with a unique and enduring aesthetic vision.",
    srv2_title:'Construction', srv2_desc:"Full project management with premium materials, delivered on time and on budget every time.",
    srv3_title:'Interior Design', srv3_desc:"Luxurious spaces blending functionality, refined aesthetics and strong personal identity.",
    srv4_title:'Engineering', srv4_desc:"Technical studies, structural calculations and engineering solutions for safe and durable buildings.",
    srv5_title:'Finishing & Renovation', srv5_desc:"High-end finishing works and full renovation to transform and elevate your existing spaces.",
    srv6_title:'Real Estate', srv6_desc:"Development of residential and commercial projects from design through turnkey delivery.",
    srv_more:'Learn more',
    proj_tag:'Portfolio', proj_title:'Our Projects',
    flt_all:'All', flt_res:'Residential', flt_com:'Commercial', flt_int:'Interior',
    proj_cta:'Discuss your project',
    ba_tag:'Transformation', ba_title:'Before / After',
    ba_before:'Before', ba_after:'After', ba_hint:'← Drag to compare →',
    stat1:'Years of experience', stat2:'Projects completed', stat3:'Countries', stat4:'Client satisfaction',
    testi_tag:'Testimonials', testi_title:'What our clients\nare saying',
    t1_quote:'"ALA Building turned our vision into reality. Remarkable professionalism and exceptional attention to detail. Our villa exceeds every expectation."',
    t1_role:'Entrepreneur, Accra',
    t2_quote:'"From concept to finish, the ALA team understood and elevated our project. I recommend them 100% for any major project."',
    t2_role:'Director, Lomé',
    t3_quote:'"Our headquarters has become an architectural calling card. ALA perfectly masters the fusion of functionality and contemporary aesthetics."',
    t3_role:'CEO, Lomé',
    partners_label:'They trust us',
    vid_tag:'In Pictures', vid_title:'Our expertise\non video',
    contact_tag:'Contact', contact_title:'Let\'s talk about\nyour project',
    contact_sub:"Every great project begins with a conversation. Tell us what you have in mind and we'll take care of the rest.",
    cd_addr:'Address',
    f_name:'Full name *', f_phone:'Phone *', f_email:'Email',
    f_type:'Project type *', f_type_ph:'Select a type',
    f_t1:'Architecture', f_t2:'Construction', f_t3:'Interior design',
    f_t4:'Renovation', f_t5:'Engineering', f_t6:'Other',
    f_msg:'Message *', f_submit:'Send via WhatsApp',
    footer_tag:'Architecture. Construction. Excellence.',
    footer_nav:'Navigation', footer_srv:'Services', footer_rights:'All rights reserved.',
    wa_tip:'Chat with us on WhatsApp'
  }
};

/* Merge page-specific translations injected before this script */
if (window.PAGE_LANG) {
  ['fr','en'].forEach(l => {
    if (window.PAGE_LANG[l]) Object.assign(LANG[l], window.PAGE_LANG[l]);
  });
}

/* ── 2. STATE ── */
let currentLang  = localStorage.getItem('ala-lang')  || 'fr';
let currentTheme = localStorage.getItem('ala-theme') || 'light';

/* ── 3. APPLY TRANSLATIONS ── */
function applyLang(lang) {
  const dict = LANG[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!dict[key]) return;
    const val = dict[key];
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val.replace(/\n/g, '<br>');
    }
  });

  // Hero rotate words
  const rotateEl = document.getElementById('heroRotate');
  if (rotateEl) rotateEl.textContent = dict.hero_words[heroWordIndex];
  heroWords = dict.hero_words;

  // Lang button label
  document.getElementById('langLabel').textContent = lang === 'fr' ? 'EN' : 'FR';
}

/* ── 4. INIT THEME ── */
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('ala-theme', currentTheme);
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ── 5. INIT LANGUAGE ── */
function initLang() {
  applyLang(currentLang);
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('ala-lang', currentLang);
    applyLang(currentLang);
  });
}

/* ── 6. LOADING SCREEN ── */
function initLoading() {
  const screen = document.getElementById('loading-screen');
  const hide = () => screen.classList.add('loaded');
  if (document.readyState === 'complete') {
    setTimeout(hide, 400);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 300));
    setTimeout(hide, 1800);
  }
}

/* ── 7. NAVBAR ── */
function initNav() {
  const nav   = document.getElementById('navbar');
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  /* Inject mobile-only CTA + contact items once */
  if (!links.querySelector('.nav-mobile-cta')) {
    const cta = document.createElement('li');
    cta.className = 'nav-mobile-cta';
    const lang = currentLang;
    const ctaLabel = (lang === 'en') ? 'Free Quote' : 'Devis gratuit';
    cta.innerHTML = `<a href="devis.html"><i class="fas fa-arrow-right"></i>${ctaLabel}</a>`;
    links.appendChild(cta);
  }
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  links.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── 8. HERO ROTATING TEXT ── */
let heroWordIndex = 0;
let heroWords = LANG[currentLang].hero_words;

function initHeroRotate() {
  const el = document.getElementById('heroRotate');
  if (!el) return;
  el.textContent = heroWords[0];

  setInterval(() => {
    heroWordIndex = (heroWordIndex + 1) % heroWords.length;
    el.classList.add('exit');
    setTimeout(() => {
      el.textContent = heroWords[heroWordIndex];
      el.classList.remove('exit');
      el.classList.add('enter');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.remove('enter'));
      });
    }, 600);
  }, 2800);
}

/* ── 9. SCROLL REVEAL ── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── 10. ANIMATED COUNTERS ── */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const duration = 1600;
      const step = 16;
      const increment = target / (duration / step);
      let current = 0;
      const tick = () => {
        current = Math.min(current + increment, target);
        el.textContent = Math.floor(current);
        if (current < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-n[data-target]').forEach(el => io.observe(el));
}

/* ── 11. PROJECT FILTER ── */
function initFilter() {
  const btns  = document.querySelectorAll('.flt-btn');
  const cards = document.querySelectorAll('.proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = '';
        }
      });
    });
  });
}

/* ── 12. BEFORE / AFTER SLIDER ── */
function initBASlider() {
  const slider   = document.getElementById('baSlider');
  if (!slider) return;
  const before   = document.getElementById('baBefore');
  const beforeImg = document.getElementById('baBeforeImg');
  const handle   = document.getElementById('baHandle');
  let dragging   = false;

  function syncImgWidth() {
    beforeImg.style.width = slider.offsetWidth + 'px';
  }

  function setPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0.02, Math.min(0.98, pct));
    before.style.width = (pct * 100) + '%';
    handle.style.left  = (pct * 100) + '%';
  }

  syncImgWidth();
  new ResizeObserver(syncImgWidth).observe(slider);

  // Mouse
  slider.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  // Touch
  slider.addEventListener('touchstart', e => {
    dragging = true;
    setPosition(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    if (dragging) setPosition(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
}

/* ── 13. TESTIMONIALS CAROUSEL ── */
function initTestimonials() {
  const cards  = document.querySelectorAll('.testi-card');
  const dots   = document.querySelectorAll('.t-dot');
  let current  = 0;

  function go(n) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  document.getElementById('tPrev').addEventListener('click', () => go(current - 1));
  document.getElementById('tNext').addEventListener('click', () => go(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));

  // Auto-advance
  let timer = setInterval(() => go(current + 1), 5000);
  document.getElementById('testiTrack').addEventListener('mouseenter', () => clearInterval(timer));
  document.getElementById('testiTrack').addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(() => go(current + 1), 5000);
  });
}

/* ── 14. VIDEO LAZY LOAD ── */
function initVideo() {
  const thumb = document.getElementById('videoThumb');
  const frame = document.getElementById('videoFrame');
  const btn   = document.getElementById('videoPlay');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const src = frame.dataset.src;
    frame.src = src;
    frame.style.display = 'block';
    thumb.style.display  = 'none';
  });
}

/* ── 15. CONTACT FORM → WHATSAPP ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const type  = form.querySelector('[name="type"]').value;
    const msg   = form.querySelector('[name="message"]').value.trim();

    if (!name || !phone || !type || !msg) {
      alert(currentLang === 'fr'
        ? 'Veuillez remplir tous les champs obligatoires (*).'
        : 'Please fill in all required fields (*).');
      return;
    }

    const waMsg = currentLang === 'fr'
      ? `Bonjour ALA Building 👋\n\nNom: ${name}\nTéléphone: ${phone}${email ? '\nEmail: ' + email : ''}\nType de projet: ${type}\n\nMessage:\n${msg}`
      : `Hello ALA Building 👋\n\nName: ${name}\nPhone: ${phone}${email ? '\nEmail: ' + email : ''}\nProject type: ${type}\n\nMessage:\n${msg}`;

    const url = `https://wa.me/22898067744?text=${encodeURIComponent(waMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/* ── 16. BACK TO TOP ── */
function initBackTop() {
  const btn = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 17. SMOOTH SCROLL ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initLoading();
  initNav();
  initHeroRotate();
  initReveal();
  initCounters();
  initFilter();
  initBASlider();
  initTestimonials();
  initVideo();
  initContactForm();
  initBackTop();
  initSmoothScroll();
});
