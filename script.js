/* =====================================================
   ALA BUILDING — Main Script
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
    hstat1:'Ans d\'expertise', hstat2:'Projets', hstat3:'Pays', hstat4:'Satisfaction',
    srv_tag:'Nos Expertises',
    srv_title:'Des services conçus\npour l\'excellence',
    srv_intro:'De la conception architecturale aux finitions, nous couvrons chaque étape de votre projet avec passion et expertise.',
    srv1_title:'Architecture', srv1_desc:"Conception architecturale sur mesure, des plans aux permis de construire, avec une vision esthétique unique et durable.",
    srv2_title:'Construction Écologique', srv2_desc:"Maîtrise d'œuvre éco-responsable utilisant des matériaux durables, des techniques à faible impact environnemental et des solutions bioclimatiques.",
    srv3_title:'Architecture Intérieure', srv3_desc:"Conception et aménagement d'espaces intérieurs alliant fonctionnalité, esthétique raffinée et identité personnelle forte.",
    srv4_title:'Ingénierie BTP', srv4_desc:"Études techniques, calculs de structures et solutions d'ingénierie du bâtiment et des travaux publics pour des ouvrages durables et sécurisés.",
    srv5_title:'Finitions & Décoration Intérieure', srv5_desc:"Travaux de finition soignés et décoration intérieure haut de gamme : peintures, revêtements, menuiseries et accessoires pour sublimer chaque espace.",
    srv6_title:'Art Écologique & Upcycling', srv6_desc:"Création d'œuvres décoratives à partir de matériaux recyclés : tableaux, sculptures et installations upcycling éco-responsables qui embellissent en préservant la planète.",
    srv7_title:'Location de Matériaux de Chantier', srv7_desc:"Mise à disposition d'échafaudages, coffrages, outillages et équipements de chantier pour particuliers et professionnels, avec livraison et assistance.",
    srv8_title:'Finitions ERP', srv8_desc:"Travaux de finition et mise en conformité pour Établissements Recevant du Public : sécurité incendie, accessibilité PMR, signalétique et aménagements réglementaires.",
    srv9_title:'Travaux & Systèmes Techniques', srv9_desc:"Installation et maintenance des systèmes techniques : électricité, plomberie, climatisation, domotique et équipements énergétiques pour un confort optimal.",
    srv10_title:"Montage d'Ascenseurs", srv10_desc:"Installation, mise en service et maintenance d'ascenseurs pour immeubles résidentiels, commerciaux et industriels, conformes aux normes de sécurité.",
    srv11_title:'Informatique', srv11_desc:"Déploiement de réseaux, postes de travail, serveurs et solutions cloud adaptés aux besoins des entreprises et des particuliers.",
    srv12_title:'Courant Faible', srv12_desc:"Vidéosurveillance, contrôle d'accès, alarme intrusion & incendie, câblage structuré et fibre optique pour locaux professionnels et résidentiels.",
    srv_more:'En savoir plus',
    srv_all_btn:'Tous nos services',
    proc_tag:'Notre Méthode', proc_title:'Comment nous\ntravaillons',
    proc1_title:'Consultation', proc1_desc:'Échange approfondi pour cerner votre vision, vos besoins et votre budget. Chaque projet est unique.',
    proc2_title:'Conception', proc2_desc:'Plans architecturaux, rendus 3D et sélection des matériaux pour donner vie à votre vision avec précision.',
    proc3_title:'Réalisation', proc3_desc:'Exécution rigoureuse par nos équipes qualifiées, avec un suivi de chantier transparent et régulier.',
    proc4_title:'Livraison', proc4_desc:'Remise des clés avec garantie complète. Votre satisfaction est notre engagement le plus précieux.',
    proj_tag:'Portfolio', proj_title:'Nos Réalisations',
    proj_intro:'Chaque projet raconte une histoire unique. Découvrez nos réalisations les plus marquantes.',
    flt_all:'Tous', flt_res:'Résidentiel', flt_com:'Commercial', flt_int:'Intérieur',
    proj_cta:'Voir tous nos projets',
    ba_tag:'Transformation', ba_title:'Avant / Après',
    ba_intro:'Glissez le curseur pour découvrir la transformation complète de nos espaces.',
    ba_before:'Avant', ba_after:'Après', ba_hint:'← Glissez pour comparer →',
    stat1:"Ans d'expertise", stat2:'Projets réalisés', stat3:"Pays d'intervention", stat4:'Clients satisfaits',
    testi_tag:'Témoignages', testi_title:'Ce que disent\nnos clients',
    t1_quote:'"ARCHIRAM BUILDING a transformé notre vision en réalité. Un professionnalisme remarquable et une attention aux détails exceptionnelle. Notre villa dépasse toutes nos attentes."',
    t1_role:'Entrepreneur, Accra',
    t2_quote:'"De la conception aux finitions, l\'équipe ALA a su comprendre et sublimer notre projet d\'entreprise. Je recommande à 100% pour tout projet d\'envergure."',
    t2_role:'Directrice, Lomé',
    t3_quote:'"Notre siège social est devenu une carte de visite architecturale. ALA maîtrise parfaitement la fusion entre fonctionnalité et esthétique contemporaine."',
    t3_role:'PDG, Lomé',
    partners_label:'Ils nous font confiance',
    vid_tag:'En Images', vid_title:'Notre savoir-faire\nen vidéo',
    vid_label:'Présentation ARCHIRAM BUILDING',
    contact_tag:'Contact', contact_title:'Parlons de\nvotre projet',
    contact_sub:"Chaque grand projet commence par une conversation. Dites-nous ce que vous envisagez, nous ferons le reste.",
    cd_addr:'Adresse',
    cd_hours:'Horaires', cd_hours_val:'Lun–Sam : 8h – 18h',
    form_title:'Envoyez-nous un message',
    form_sub:'Réponse garantie sous 24h',
    f_name:'Nom complet *', f_phone:'Téléphone *', f_email:'Email',
    f_type:'Type de projet *', f_type_ph:'Sélectionnez un type',
    f_t1:'Architecture', f_t2:'Construction Écologique', f_t3:'Architecture Intérieure',
    f_t4:'Ingénierie BTP', f_t5:'Finitions & Décoration', f_t6:'Art Éco & Upcycling',
    f_t7:'Location Matériaux', f_t8:'Finitions ERP', f_t9:'Travaux & Systèmes', f_t10:'Autre',
    f_msg:'Message *', f_submit:'Envoyer via WhatsApp',
    cta_tag:'Prêt à démarrer ?',
    cta_title:'Votre projet mérite\nle meilleur',
    cta_sub:'Obtenez un devis personnalisé et gratuit en quelques minutes. Notre équipe est à votre écoute.',
    cta_btn1:'Devis gratuit', cta_btn2:'Nous contacter',
    footer_tag:'Architecture. Construction. Excellence.',
    footer_nav:'Navigation', footer_srv:'Services', footer_rights:'Tous droits réservés.',
    nav_testimonials:'Témoignages',
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
    hstat1:'Years of expertise', hstat2:'Projects', hstat3:'Countries', hstat4:'Satisfaction',
    srv_tag:'Our Expertise',
    srv_title:'Services crafted\nfor excellence',
    srv_intro:'From architectural design to finishing, we cover every step of your project with passion and expertise.',
    srv1_title:'Architecture', srv1_desc:"Bespoke architectural design from concept to planning approval, with a unique and enduring aesthetic vision.",
    srv2_title:'Ecological Construction', srv2_desc:"Eco-responsible construction using sustainable materials, low-impact techniques and bioclimatic solutions for healthy, high-performance buildings.",
    srv3_title:'Interior Architecture', srv3_desc:"Design and fit-out of interior spaces blending functionality, refined aesthetics and strong personal identity.",
    srv4_title:'Civil Engineering (BTP)', srv4_desc:"Technical studies, structural calculations and civil engineering solutions for durable, safe and code-compliant structures.",
    srv5_title:'Finishing & Interior Decoration', srv5_desc:"Meticulous finishing works and high-end interior decoration: paint, finishes, joinery and accessories to elevate every space.",
    srv6_title:'Ecological Art & Upcycling', srv6_desc:"Creation of decorative artwork from recycled materials: paintings, sculptures and eco-responsible upcycling installations.",
    srv7_title:'Construction Equipment Rental', srv7_desc:"Scaffolding, formwork, tools and site equipment for individuals and professionals, with on-site delivery and support.",
    srv8_title:'ERP Finishing Works', srv8_desc:"Finishing and compliance works for public establishments: fire safety, accessibility, signage and regulatory fit-outs.",
    srv9_title:'Works & Technical Systems', srv9_desc:"Installation and maintenance of building systems: electrical, plumbing, HVAC, home automation and energy equipment.",
    srv10_title:'Elevator Installation', srv10_desc:"Installation, commissioning and maintenance of elevators for residential, commercial and industrial buildings, compliant with safety standards.",
    srv11_title:'IT & Computing', srv11_desc:"Network deployment, workstations, servers and cloud solutions tailored to the needs of businesses and individuals.",
    srv12_title:'Low-Voltage Systems', srv12_desc:"CCTV, access control, intrusion & fire alarms, structured cabling and fibre optic for professional and residential premises.",
    srv_more:'Learn more',
    srv_all_btn:'All our services',
    proc_tag:'Our Method', proc_title:'How we\nwork',
    proc1_title:'Consultation', proc1_desc:'In-depth discussion to understand your vision, needs and budget. Every project is unique.',
    proc2_title:'Design', proc2_desc:'Architectural plans, 3D renders and material selection to bring your vision to life with precision.',
    proc3_title:'Execution', proc3_desc:'Rigorous execution by our qualified teams, with transparent and regular site monitoring.',
    proc4_title:'Delivery', proc4_desc:'Key handover with full warranty. Your satisfaction is our most precious commitment.',
    proj_tag:'Portfolio', proj_title:'Our Projects',
    proj_intro:'Every project tells a unique story. Discover our most notable achievements.',
    flt_all:'All', flt_res:'Residential', flt_com:'Commercial', flt_int:'Interior',
    proj_cta:'View all our projects',
    ba_tag:'Transformation', ba_title:'Before / After',
    ba_intro:'Drag the slider to discover the complete transformation of our spaces.',
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
    vid_label:'ARCHIRAM BUILDING Presentation',
    contact_tag:'Contact', contact_title:'Let\'s talk about\nyour project',
    contact_sub:"Every great project begins with a conversation. Tell us what you have in mind and we'll take care of the rest.",
    cd_addr:'Address',
    cd_hours:'Hours', cd_hours_val:'Mon–Sat: 8am – 6pm',
    form_title:'Send us a message',
    form_sub:'Response guaranteed within 24h',
    f_name:'Full name *', f_phone:'Phone *', f_email:'Email',
    f_type:'Project type *', f_type_ph:'Select a type',
    f_t1:'Architecture', f_t2:'Ecological Construction', f_t3:'Interior Architecture',
    f_t4:'Civil Engineering', f_t5:'Finishing & Decoration', f_t6:'Eco Art & Upcycling',
    f_t7:'Equipment Rental', f_t8:'ERP Finishing', f_t9:'Works & Systems', f_t10:'Other',
    f_msg:'Message *', f_submit:'Send via WhatsApp',
    cta_tag:'Ready to start?',
    cta_title:'Your project deserves\nthe best',
    cta_sub:'Get a personalised, free quote in just a few minutes. Our team is here for you.',
    cta_btn1:'Free Quote', cta_btn2:'Contact us',
    footer_tag:'Architecture. Construction. Excellence.',
    footer_nav:'Navigation', footer_srv:'Services', footer_rights:'All rights reserved.',
    nav_testimonials:'Testimonials',
    wa_tip:'Chat with us on WhatsApp'
  }
};

/* Merge page-specific translations */
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

  const rotateEl = document.getElementById('heroRotate');
  if (rotateEl) rotateEl.textContent = dict.hero_words[heroWordIndex];
  heroWords = dict.hero_words;

  document.getElementById('langLabel').textContent = lang === 'fr' ? 'EN' : 'FR';
}

/* ── 4. THEME ── */
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
  document.getElementById('themeIcon').className =
    currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ── 5. LANGUAGE ── */
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
  if (!screen) return;
  const hide = () => screen.classList.add('loaded');
  if (document.readyState === 'complete') {
    setTimeout(hide, 500);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 350));
    setTimeout(hide, 1900);
  }
}

/* ── 6b. IMAGE FALLBACK (images distantes indisponibles) ── */
function initImgFallback() {
  const FALLBACK = 'assets/LOGO Archi.png';
  const attach = (img) => {
    if (img.dataset.fbBound || img.src.indexOf(FALLBACK) !== -1) return;
    img.dataset.fbBound = '1';
    if (img.complete && img.naturalWidth === 0 && img.src) {
      img.src = FALLBACK;
      img.classList.add('img-fallback');
      return;
    }
    img.addEventListener('error', () => {
      img.src = FALLBACK;
      img.classList.add('img-fallback');
    });
  };
  document.querySelectorAll('img').forEach(attach);
  new MutationObserver((muts) => {
    muts.forEach((m) => m.addedNodes.forEach((node) => {
      if (node.nodeType !== 1) return;
      if (node.tagName === 'IMG') attach(node);
      if (node.querySelectorAll) node.querySelectorAll('img').forEach(attach);
    }));
  }).observe(document.body, { childList: true, subtree: true });
}

/* ── 7. SCROLL PROGRESS BAR ── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── 8. NAVBAR ── */
function initNav() {
  const nav   = document.getElementById('navbar');
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  if (!links.querySelector('.nav-mobile-cta')) {
    const cta = document.createElement('li');
    cta.className = 'nav-mobile-cta';
    const ctaLabel = currentLang === 'en' ? 'Free Quote' : 'Devis gratuit';
    cta.innerHTML = `<a href="devis.html"><i class="fas fa-arrow-right"></i> ${ctaLabel}</a>`;
    links.appendChild(cta);
  }

  function syncMenuTop() {
    document.documentElement.style.setProperty('--menu-top', nav.offsetHeight + 'px');
  }
  function lockScroll() {
    window.scrollTo(0, 0);
    nav.classList.remove('scrolled');
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
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

  links.querySelectorAll('.nav-item, .nav-link').forEach(a => a.addEventListener('click', closeMenu));
}

/* ── 9. HERO ROTATING TEXT ── */
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
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('enter')));
    }, 600);
  }, 2800);
}

/* ── 10. SCROLL REVEAL ── */
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
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ── 11. ANIMATED COUNTERS ── */
function initCounters() {
  const targets = document.querySelectorAll('.stat-num[data-target]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => { el.textContent = el.dataset.target; });
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const duration = 1800;
      let startTime = null;

      /* Ease-out cubic for smooth deceleration */
      function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

      function tick(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.floor(easeOutCubic(progress) * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  targets.forEach(el => io.observe(el));
}

/* ── 12. PROJECT FILTER ── */
function initFilter() {
  const btns  = document.querySelectorAll('.flt');
  const cards = document.querySelectorAll('.proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        if (match) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          void card.offsetHeight;
          card.style.animation = '';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ── 13. BEFORE / AFTER SLIDER ── */
function initBASlider() {
  const slider    = document.getElementById('baSlider');
  if (!slider) return;
  const before    = document.getElementById('baBefore');
  const beforeImg = document.getElementById('baBeforeImg');
  const handle    = document.getElementById('baHandle');
  let dragging    = false;

  function syncImgWidth() {
    beforeImg.style.width = slider.offsetWidth + 'px';
  }
  function setPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0.02, Math.min(0.98, pct));
    before.style.width  = (pct * 100) + '%';
    handle.style.left   = (pct * 100) + '%';
  }

  syncImgWidth();
  new ResizeObserver(syncImgWidth).observe(slider);

  slider.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  slider.addEventListener('touchstart', e => {
    dragging = true; setPosition(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    if (dragging) setPosition(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
}

/* ── 14. TESTIMONIALS CAROUSEL ── */
function initTestimonials() {
  const cards = document.querySelectorAll('.testi-slide');
  const dots  = document.querySelectorAll('.t-pip');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  const track   = document.getElementById('testiTrack');

  if (!cards.length || !prevBtn) return;

  let current = 0;
  let timer;

  function go(n) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => go(current + 1), 5000);
  }

  prevBtn.addEventListener('click', () => { go(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { go(current + 1); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { go(i); startAuto(); }));

  if (track) {
    track.addEventListener('mouseenter', () => clearInterval(timer));
    track.addEventListener('mouseleave', startAuto);
  }

  /* Touch swipe support on testimonial cards */
  let touchStartX = 0;
  if (track) {
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { go(diff > 0 ? current + 1 : current - 1); startAuto(); }
    }, { passive: true });
  }

  startAuto();
}

/* ── 15. VIDEO LAZY LOAD ── */
function initVideo() {
  const thumb = document.getElementById('videoThumb');
  const frame = document.getElementById('videoFrame');
  const btn   = document.getElementById('videoPlay');
  if (!btn) return;

  btn.addEventListener('click', () => {
    frame.src = frame.dataset.src;
    frame.style.display = 'block';
    thumb.style.display = 'none';
  });
}

/* ── 16. CONTACT FORM → WHATSAPP ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  /* Live validation feedback */
  form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
    field.addEventListener('blur', () => {
      const group = field.closest('.f-group');
      if (!group) return;
      if (!field.value.trim()) {
        group.classList.add('error');
      } else {
        group.classList.remove('error');
      }
    });
    field.addEventListener('input', () => {
      const group = field.closest('.f-group');
      if (group && field.value.trim()) group.classList.remove('error');
    });
  });

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

    const submitBtn = document.getElementById('submitBtn');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Envoi en cours…</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      const waMsg = currentLang === 'fr'
        ? `Bonjour ARCHIRAM BUILDING 👋\n\nNom: ${name}\nTéléphone: ${phone}${email ? '\nEmail: ' + email : ''}\nType de projet: ${type}\n\nMessage:\n${msg}`
        : `Hello ARCHIRAM BUILDING 👋\n\nName: ${name}\nPhone: ${phone}${email ? '\nEmail: ' + email : ''}\nProject type: ${type}\n\nMessage:\n${msg}`;

      window.open(`https://wa.me/22898067744?text=${encodeURIComponent(waMsg)}`, '_blank', 'noopener,noreferrer');
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 600);
  });
}

/* ── 17. BACK TO TOP ── */
function initBackTop() {
  const btn = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 18. SMOOTH SCROLL ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    });
  });
}

/* ── 19. HERO PARALLAX ── */
function initParallax() {
  const heroBg = document.querySelector('.hero-media img');
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(1.08) translateY(${scrollY * 0.12}px)`;
    }
  }, { passive: true });
}

/* ── 20. ACTIVE NAV LINK ON SCROLL ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(e.target.id)) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => io.observe(s));
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initLoading();
  initImgFallback();
  initScrollProgress();
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
  initParallax();
  initActiveNav();
});
