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
    hero_sub:"Startup spécialisée en ingénierie BTP, construction écologique et architecture intérieure en Afrique de l'Ouest.",
    hero_cta1:'Voir nos projets', hero_cta2:'Nous contacter',
    hstat1:'Années', hstat2:'Projets', hstat3:'Pays', hstat4:'Satisfaction',
    srv_tag:'Nos Expertises', srv_title:'Des services conçus\npour l\'excellence',
    srv1_title:'Architecture', srv1_desc:"Conception architecturale sur mesure, des plans aux permis de construire, avec une vision esthétique unique et durable.",
    srv2_title:'Construction Écologique', srv2_desc:"Maîtrise d'œuvre éco-responsable utilisant des matériaux durables, des techniques à faible impact environnemental et des solutions bioclimatiques pour des bâtiments sains et performants.",
    srv3_title:'Architecture Intérieure', srv3_desc:"Conception et aménagement d'espaces intérieurs alliant fonctionnalité, esthétique raffinée et identité personnelle forte, pour des environnements de vie uniques.",
    srv4_title:'Ingénierie BTP', srv4_desc:"Études techniques, calculs de structures et solutions d'ingénierie du bâtiment et des travaux publics pour des ouvrages durables, sécurisés et conformes aux normes.",
    srv5_title:'Finitions & Décoration Intérieure', srv5_desc:"Travaux de finition soignés et décoration intérieure haut de gamme : peintures, revêtements, menuiseries et accessoires pour sublimer chaque espace au détail près.",
    srv6_title:'Art Écologique & Upcycling', srv6_desc:"Création d'œuvres décoratives à partir de matériaux recyclés et réemployés : tableaux, sculptures et installations upcycling éco-responsables qui embellissent en préservant la planète.",
    srv7_title:'Location de Matériaux de Chantier', srv7_desc:"Mise à disposition d'échafaudages, coffrages, outillages et équipements de chantier pour particuliers et professionnels, avec livraison et assistance technique sur site.",
    srv8_title:'Finitions ERP', srv8_desc:"Travaux de finition et mise en conformité pour Établissements Recevant du Public : sécurité incendie, accessibilité PMR, signalétique et aménagements réglementaires.",
    srv9_title:'Travaux & Systèmes Techniques', srv9_desc:"Installation et maintenance des systèmes techniques du bâtiment : électricité, plomberie, climatisation, domotique et équipements énergétiques pour un confort et une performance optimaux.",
    srv_more:'En savoir plus',
    proj_tag:'Portfolio', proj_title:'Nos Réalisations',
    flt_all:'Tous', flt_res:'Résidentiel', flt_com:'Commercial', flt_int:'Intérieur',
    proj_cta:'Discuter de votre projet',
    ba_tag:'Transformation', ba_title:'Avant / Après',
    ba_before:'Avant', ba_after:'Après', ba_hint:'← Glissez pour comparer / Drag to compare →',
    stat1:"Années d'expérience", stat2:'Projets réalisés', stat3:"Pays d'intervention", stat4:'Clients satisfaits',
    testi_tag:'Témoignages', testi_title:'Ce que disent\nnos clients',
    t1_quote:'"ARCHIRAM BUILDING a transformé notre vision en réalité. Un professionnalisme remarquable et une attention aux détails exceptionnelle. Notre villa dépasse toutes nos attentes."',
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
    f_t1:'Architecture', f_t2:'Construction Écologique', f_t3:'Architecture Intérieure',
    f_t4:'Ingénierie BTP', f_t5:'Finitions & Décoration', f_t6:'Art Éco & Upcycling',
    f_t7:'Location Matériaux', f_t8:'Finitions ERP', f_t9:'Travaux & Systèmes', f_t10:'Autre',
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
    hero_sub:'A startup specialising in civil engineering, ecological construction and interior architecture across West Africa.',
    hero_cta1:'View our projects', hero_cta2:'Contact us',
    hstat1:'Years', hstat2:'Projects', hstat3:'Countries', hstat4:'Satisfaction',
    srv_tag:'Our Expertise', srv_title:'Services crafted\nfor excellence',
    srv1_title:'Architecture', srv1_desc:"Bespoke architectural design from concept to planning approval, with a unique and enduring aesthetic vision.",
    srv2_title:'Ecological Construction', srv2_desc:"Eco-responsible construction using sustainable materials, low-impact techniques and bioclimatic solutions for healthy, high-performance buildings.",
    srv3_title:'Interior Architecture', srv3_desc:"Design and fit-out of interior spaces blending functionality, refined aesthetics and strong personal identity, creating unique living environments.",
    srv4_title:'Civil Engineering (BTP)', srv4_desc:"Technical studies, structural calculations and civil engineering solutions for durable, safe and code-compliant structures.",
    srv5_title:'Finishing & Interior Decoration', srv5_desc:"Meticulous finishing works and high-end interior decoration: paint, finishes, joinery and accessories to elevate every space down to the finest detail.",
    srv6_title:'Ecological Art & Upcycling', srv6_desc:"Creation of decorative artwork from recycled and repurposed materials: paintings, sculptures and eco-responsible upcycling installations that beautify while preserving the planet.",
    srv7_title:'Construction Equipment Rental', srv7_desc:"Provision of scaffolding, formwork, tools and site equipment for individuals and professionals, with on-site delivery and technical support.",
    srv8_title:'ERP Finishing Works', srv8_desc:"Finishing and compliance works for Establishments Receiving the Public: fire safety, accessibility, signage and regulatory fit-outs.",
    srv9_title:'Works & Technical Systems', srv9_desc:"Installation and maintenance of building technical systems: electrical, plumbing, HVAC, home automation and energy equipment for optimal comfort and performance.",
    srv_more:'Learn more',
    proj_tag:'Portfolio', proj_title:'Our Projects',
    flt_all:'All', flt_res:'Residential', flt_com:'Commercial', flt_int:'Interior',
    proj_cta:'Discuss your project',
    ba_tag:'Transformation', ba_title:'Before / After',
    ba_before:'Before', ba_after:'After', ba_hint:'← Drag to compare →',
    stat1:'Years of experience', stat2:'Projects completed', stat3:'Countries', stat4:'Client satisfaction',
    testi_tag:'Testimonials', testi_title:'What our clients\nare saying',
    t1_quote:'"ARCHIRAM BUILDING turned our vision into reality. Remarkable professionalism and exceptional attention to detail. Our villa exceeds every expectation."',
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

  function syncMenuTop() {
    document.documentElement.style.setProperty('--menu-top', nav.offsetHeight + 'px');
  }

  /* Scroll to top + lock body (iOS-safe) */
  function lockScroll() {
    window.scrollTo(0, 0);
    nav.classList.remove('scrolled');
    document.body.style.position = 'fixed';
    document.body.style.top      = '0';
    document.body.style.left     = '0';
    document.body.style.right    = '0';
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top      = '';
    document.body.style.left     = '';
    document.body.style.right    = '';
    document.body.style.overflow = '';
  }

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    syncMenuTop();
  }, { passive: true });

  syncMenuTop();

  function closeMenu() {
    if (!links.classList.contains('open')) return;
    links.classList.add('closing');
    links.addEventListener('animationend', () => {
      links.classList.remove('open', 'closing');
      ham.classList.remove('open');
      unlockScroll();
    }, { once: true });
  }

  ham.addEventListener('click', () => {
    if (links.classList.contains('open') || links.classList.contains('closing')) {
      closeMenu();
    } else {
      lockScroll();
      syncMenuTop();
      ham.classList.add('open');
      links.classList.add('open');
    }
  });

  links.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', closeMenu);
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
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── 10. ANIMATED COUNTERS ── */
function initCounters() {
  const targets = document.querySelectorAll('.stat-n[data-target]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => { el.textContent = el.dataset.target; });
    return;
  }
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

  targets.forEach(el => io.observe(el));
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
      ? `Bonjour ARCHIRAM BUILDING 👋\n\nNom: ${name}\nTéléphone: ${phone}${email ? '\nEmail: ' + email : ''}\nType de projet: ${type}\n\nMessage:\n${msg}`
      : `Hello ARCHIRAM BUILDING 👋\n\nName: ${name}\nPhone: ${phone}${email ? '\nEmail: ' + email : ''}\nProject type: ${type}\n\nMessage:\n${msg}`;

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
