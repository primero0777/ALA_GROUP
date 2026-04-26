<?php require_once 'includes/header.php'; ?>

<!-- ═══════════════════════════════════════════════════
     HERO
     ═══════════════════════════════════════════════════ -->
<section class="hero" id="hero" aria-label="Hero">
    <div class="hero__bg">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=90&w=1920"
             alt="Modern architecture building" fetchpriority="high">
    </div>
    <div class="hero__overlay" aria-hidden="true"></div>

    <div class="container hero__content">
        <div class="hero__eyebrow">
            <span class="hero__eyebrow-dot" aria-hidden="true"></span>
            Lomé, Togo &bull; Archiram Link Africa
        </div>

        <?php
        $lines = [__('hero_line1'), __('hero_line2'), __('hero_line3')];
        ?>
        <h1 class="hero__title t-hero"
            data-lines='<?= htmlspecialchars(json_encode($lines), ENT_QUOTES, 'UTF-8') ?>'>
            <?= htmlspecialchars($lines[0]) ?><span class="hero__cursor" aria-hidden="true"></span>
        </h1>

        <p class="hero__sub"><?= __('hero_sub') ?></p>

        <div class="hero__cta">
            <a href="https://wa.me/22898067744?text=<?= urlencode(__('whatsapp_greeting')) ?>"
               target="_blank" rel="noopener" class="btn btn--wa">
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
                <?= __('hero_whatsapp') ?>
            </a>
            <a href="contact.php" class="btn btn--white">
                <?= __('quote_cta') ?>
                <i class="fas fa-arrow-right fa-xs" aria-hidden="true"></i>
            </a>
        </div>
    </div>

    <div class="hero__scroll" onclick="window.scrollBy({top:window.innerHeight,behavior:'smooth'})" aria-hidden="true">
        <span class="t-label" style="font-size:0.6rem;">Scroll</span>
        <div class="hero__scroll-line"></div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     PARTNERS MARQUEE
     ═══════════════════════════════════════════════════ -->
<div class="marquee-section" aria-hidden="true">
    <div class="container" style="margin-bottom:0.75rem;">
        <p class="t-label text-muted" style="font-size:0.65rem;margin-bottom:0"><?= __('section_partners') ?></p>
    </div>
    <div class="marquee-track">
        <?php
        $partners = ['CCT Togo', 'WATT Africa', 'Africa Peinture', 'HIGEN TG', 'Petit Ouezou', 'BAD Group', 'Union Européenne', 'AFD Togo'];
        $duped = array_merge($partners, $partners); // duplicate for seamless loop
        foreach ($duped as $p) : ?>
            <span class="marquee-item">
                <?= htmlspecialchars($p) ?>
                <span class="marquee-dot" aria-hidden="true"></span>
            </span>
        <?php endforeach; ?>
    </div>
</div>

<!-- ═══════════════════════════════════════════════════
     STATS
     ═══════════════════════════════════════════════════ -->
<section aria-label="Chiffres clés" style="padding-block:0;border-bottom:1px solid var(--border);">
    <div class="container" style="padding:0;">
        <div class="stats-grid">
            <div class="stat-item reveal">
                <span class="stat-number" data-target="150" data-suffix="+">0</span>
                <span class="stat-label"><?= __('stats_projects') ?></span>
            </div>
            <div class="stat-item reveal delay-1">
                <span class="stat-number" data-target="300" data-suffix="+">0</span>
                <span class="stat-label"><?= __('stats_clients') ?></span>
            </div>
            <div class="stat-item reveal delay-2">
                <span class="stat-number" data-target="10" data-suffix="+">0</span>
                <span class="stat-label"><?= __('stats_experience') ?></span>
            </div>
            <div class="stat-item reveal delay-3">
                <span class="stat-number" data-target="5">0</span>
                <span class="stat-label"><?= __('stats_countries') ?></span>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     ABOUT
     ═══════════════════════════════════════════════════ -->
<section id="about" aria-labelledby="about-heading">
    <div class="container">
        <div class="about-grid">

            <div class="about__image-wrap reveal-l">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=85&w=900"
                     alt="Architecture — ALA Building team at work" loading="lazy"
                     style="border-radius:var(--r-xl);height:580px;object-fit:cover;width:100%;">
                <div class="about__badge">
                    <span class="about__badge-num">10+</span>
                    <span class="about__badge-text"><?= __('stats_experience') ?></span>
                </div>
            </div>

            <div class="about__text reveal-r">
                <div class="section-label t-label">
                    <?= __('about_label') ?>
                </div>
                <h2 class="t-h1" id="about-heading" style="margin-bottom:1.75rem;">
                    <?= __('about_title1') ?><br>
                    <em><?= __('about_title2') ?></em>
                </h2>
                <p class="about__body"><?= __('about_p1') ?></p>
                <p class="about__body"><?= __('about_p2') ?></p>

                <div style="display:flex;gap:2rem;margin-top:2.5rem;margin-bottom:2.5rem;flex-wrap:wrap;">
                    <div>
                        <div style="font-family:var(--font-display);font-size:2rem;font-weight:300;color:var(--accent);line-height:1;">100%</div>
                        <div style="font-size:0.8rem;color:var(--text-3);font-weight:500;margin-top:0.25rem;">Satisfaction client</div>
                    </div>
                    <div style="width:1px;background:var(--border);"></div>
                    <div>
                        <div style="font-family:var(--font-display);font-size:2rem;font-weight:300;color:var(--accent);line-height:1;">4</div>
                        <div style="font-size:0.8rem;color:var(--text-3);font-weight:500;margin-top:0.25rem;">Pays couverts</div>
                    </div>
                    <div style="width:1px;background:var(--border);"></div>
                    <div>
                        <div style="font-family:var(--font-display);font-size:2rem;font-weight:300;color:var(--accent);line-height:1;">ISO</div>
                        <div style="font-size:0.8rem;color:var(--text-3);font-weight:500;margin-top:0.25rem;">Certifié</div>
                    </div>
                </div>

                <a href="about.php" class="btn btn--ghost">
                    <?= __('about_cta') ?>
                    <i class="fas fa-arrow-right fa-xs" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     SERVICES
     ═══════════════════════════════════════════════════ -->
<section id="services" style="background:var(--bg-2);" aria-labelledby="services-heading">
    <div class="container">
        <div class="section-header text-center reveal">
            <div class="section-label t-label" style="justify-content:center;">
                <?= __('section_services') ?>
            </div>
            <h2 class="t-h2" id="services-heading" style="margin-bottom:1rem;">
                <?= __('section_services') ?>
            </h2>
            <p class="t-body-lg text-muted" style="max-width:540px;margin-inline:auto;">
                <?= __('services_sub') ?>
            </p>
        </div>

        <div class="services-grid">
            <?php
            $services = [
                ['icon' => 'fas fa-drafting-compass', 'title' => __('service_architecture'), 'desc' => __('svc_arch_desc'),    'num' => '01'],
                ['icon' => 'fas fa-hard-hat',          'title' => __('service_construction'), 'desc' => __('svc_build_desc'),   'num' => '02'],
                ['icon' => 'fas fa-couch',             'title' => __('service_decoration'),   'desc' => __('svc_interior_desc'),'num' => '03'],
                ['icon' => 'fas fa-cogs',              'title' => __('service_engineering'),  'desc' => __('svc_eng_desc'),     'num' => '04'],
                ['icon' => 'fas fa-hammer',            'title' => __('service_finishing'),    'desc' => __('svc_renov_desc'),   'num' => '05'],
                ['icon' => 'fas fa-building',          'title' => __('service_realestate'),   'desc' => __('svc_real_desc'),    'num' => '06'],
            ];
            foreach ($services as $i => $s) :
                $delay = $i < 3 ? " delay-{$i}" : " delay-" . ($i - 3);
            ?>
            <div class="service-card reveal<?= $delay ?>" role="article">
                <div class="service-icon" aria-hidden="true">
                    <i class="<?= $s['icon'] ?>"></i>
                </div>
                <span class="service-card__num" aria-hidden="true"><?= $s['num'] ?></span>
                <h3 class="service-card__title"><?= $s['title'] ?></h3>
                <p class="service-card__desc"><?= $s['desc'] ?></p>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center" style="margin-top:3.5rem;">
            <a href="services.php" class="btn btn--ghost reveal">
                <?= __('services_cta') ?>
                <i class="fas fa-arrow-right fa-xs" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     BEFORE / AFTER SLIDER
     ═══════════════════════════════════════════════════ -->
<section class="ba-section" id="transformation" aria-labelledby="ba-heading">
    <div class="container">
        <div class="ba-wrapper">

            <div class="ba-text reveal-l">
                <div class="section-label t-label"><?= __('section_before_after') ?></div>
                <h2 class="t-h2" id="ba-heading" style="margin-bottom:1.25rem;">
                    <?= __('section_before_after') ?>
                </h2>
                <p class="t-body-lg text-muted" style="margin-bottom:2rem;">
                    <?= __('ba_sub') ?>
                </p>
                <div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap;">
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                        <div style="width:14px;height:14px;border-radius:50%;background:var(--surface-3);border:1px solid var(--border-2);"></div>
                        <span class="t-sm text-muted"><?= __('ba_before') ?></span>
                    </div>
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                        <div style="width:14px;height:14px;border-radius:50%;background:var(--accent);"></div>
                        <span class="t-sm text-muted"><?= __('ba_after') ?></span>
                    </div>
                </div>
            </div>

            <div class="ba-container reveal-r" role="img" aria-label="Comparaison avant/après d'un projet de rénovation">
                <!-- BEFORE image -->
                <div class="ba-before">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                         alt="Avant rénovation" loading="lazy">
                </div>

                <!-- AFTER image -->
                <div class="ba-after">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                         alt="Après rénovation" loading="lazy">
                </div>

                <!-- Labels -->
                <span class="ba-label ba-label--before" aria-hidden="true"><?= __('ba_before') ?></span>
                <span class="ba-label ba-label--after"  aria-hidden="true"><?= __('ba_after') ?></span>

                <!-- Handle -->
                <div class="ba-handle" aria-hidden="true">
                    <div class="ba-handle__btn">
                        <i class="fas fa-arrows-left-right"></i>
                    </div>
                </div>

                <!-- Drag hint -->
                <div class="ba-drag-hint" aria-hidden="true"><?= __('ba_drag') ?></div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     FEATURED PROJECTS
     ═══════════════════════════════════════════════════ -->
<section id="projects" aria-labelledby="projects-heading">
    <div class="container">
        <div class="section-header reveal" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1.5rem;margin-bottom:2.5rem;">
            <div>
                <div class="section-label t-label"><?= __('section_projects') ?></div>
                <h2 class="t-h2" id="projects-heading"><?= __('section_projects') ?></h2>
            </div>
            <a href="projects.php" class="btn btn--ghost">
                <?= __('projects_cta') ?> <i class="fas fa-arrow-right fa-xs"></i>
            </a>
        </div>

        <div class="projects-filter reveal">
            <button class="filter-btn active" data-filter="all"><?= __('all') ?></button>
            <button class="filter-btn" data-filter="residential"><?= __('residential') ?></button>
            <button class="filter-btn" data-filter="commercial"><?= __('commercial') ?></button>
            <button class="filter-btn" data-filter="interior"><?= __('interior') ?></button>
        </div>

        <?php
        $projects = [
            [
                'img'   => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
                'title' => 'Villa Moderne Avedji',
                'cat'   => 'residential',
                'loc'   => 'Lomé, Togo',
                'desc'  => 'Villa résidentielle haut de gamme de 400m² avec piscine, réalisée en 14 mois.',
                'feat'  => true,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
                'title' => 'Siège Social Tech',
                'cat'   => 'commercial',
                'loc'   => 'Lomé, Togo',
                'desc'  => 'Immeuble de bureaux de 6 étages avec façade vitrée et espace coworking.',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=900',
                'title' => 'Aménagement Bureau Premium',
                'cat'   => 'interior',
                'loc'   => 'Kégué, Lomé',
                'desc'  => 'Design intérieur de 1200m² pour une fintech internationale.',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=900',
                'title' => 'Résidence Éco-Durable',
                'cat'   => 'residential',
                'loc'   => 'Baguida, Togo',
                'desc'  => 'Maison basse consommation avec panneaux solaires et récupération des eaux.',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=900',
                'title' => 'Complexe Hôtelier',
                'cat'   => 'commercial',
                'loc'   => 'Accra, Ghana',
                'desc'  => 'Complexe boutique hôtel de 48 chambres en bord de mer.',
                'feat'  => false,
            ],
        ];
        ?>
        <div class="projects-grid">
            <?php foreach ($projects as $i => $p) :
                $delay = "delay-{$i}";
                $cat_label = __($p['cat']);
            ?>
            <div class="project-card reveal <?= $delay ?> <?= $p['feat'] ? 'featured' : '' ?>"
                 data-cat="<?= $p['cat'] ?>"
                 data-img="<?= htmlspecialchars($p['img']) ?>"
                 data-title="<?= htmlspecialchars($p['title']) ?>"
                 data-cat-label="<?= htmlspecialchars($cat_label) ?>"
                 data-loc="<?= htmlspecialchars($p['loc']) ?>"
                 data-desc="<?= htmlspecialchars($p['desc']) ?>"
                 tabindex="0" role="button"
                 aria-label="Voir le projet: <?= htmlspecialchars($p['title']) ?>">
                <img src="<?= $p['img'] ?>" alt="<?= htmlspecialchars($p['title']) ?>" loading="lazy">
                <div class="project-card__overlay">
                    <span class="project-card__cat"><?= $cat_label ?></span>
                    <h3 class="project-card__title"><?= htmlspecialchars($p['title']) ?></h3>
                    <span class="project-card__view">
                        <?= __('project_view') ?> <i class="fas fa-arrow-right fa-xs"></i>
                    </span>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- PROJECT MODAL -->
<div class="modal-backdrop" id="modal-backdrop" role="presentation" aria-hidden="true"></div>
<div class="modal" id="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="modal__close" id="modal-close" aria-label="Fermer">
        <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <img class="modal__img" src="" alt="">
    <div class="modal__body">
        <span class="modal__cat t-label text-accent" style="display:block;margin-bottom:0.5rem;"></span>
        <h2 class="t-h3 modal__title" id="modal-title" style="margin-bottom:0.5rem;"></h2>
        <p class="t-sm text-muted modal__loc" style="margin-bottom:1.25rem;">
            <i class="fas fa-map-marker-alt fa-xs"></i>
            <span></span>
        </p>
        <p class="t-body text-muted modal__desc" style="margin-bottom:2rem;"></p>
        <a href="contact.php" class="btn btn--primary"><?= __('quote_cta') ?></a>
    </div>
</div>

<!-- ═══════════════════════════════════════════════════
     VIDEO SECTION
     ═══════════════════════════════════════════════════ -->
<section class="video-section" id="video" aria-labelledby="video-heading">
    <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;align-items:center;" class="reveal">
            <div>
                <div class="section-label t-label"><?= __('video_label') ?></div>
                <h2 class="t-h2" id="video-heading" style="margin-bottom:1.25rem;">
                    <?= __('video_title') ?>
                </h2>
                <p class="t-body-lg text-muted"><?= __('video_sub') ?></p>
            </div>
            <div class="video-wrap reveal delay-2">
                <div class="video-placeholder"
                     data-src="https://www.youtube.com/embed/dQw4w9WgXcQ">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
                         alt="Regarder notre vidéo" loading="lazy"
                         style="width:100%;height:100%;object-fit:cover;">
                    <div class="video-play-btn" aria-label="Lire la vidéo">
                        <i class="fas fa-play" style="margin-left:4px;" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     TESTIMONIALS
     ═══════════════════════════════════════════════════ -->
<section class="testimonials-section" id="testimonials" aria-labelledby="testi-heading">
    <div class="container">
        <div class="section-header text-center reveal" style="margin-bottom:3rem;">
            <div class="section-label t-label" style="justify-content:center;"><?= __('section_testimonials') ?></div>
            <h2 class="t-h2" id="testi-heading"><?= __('section_testimonials') ?></h2>
            <p class="t-body-lg text-muted" style="max-width:420px;margin-inline:auto;">
                <?= __('testi_sub') ?>
            </p>
        </div>

        <div class="testi-carousel reveal">
            <div class="testi-track">
                <?php
                $testimonials = [
                    [
                        'quote'  => "ALA Building a transformé notre maison en véritable chef-d'œuvre. Leur attention aux détails, leur professionnalisme et leur respect des délais sont incomparables.",
                        'name'   => 'Kofi Mensah',
                        'role'   => 'Entrepreneur, Lomé',
                        'avatar' => 'https://picsum.photos/seed/kof1/80/80',
                        'stars'  => 5,
                    ],
                    [
                        'quote'  => "Nous avons confié notre siège social à ALA Building. Le résultat a dépassé toutes nos espérances. Une équipe d'exception.",
                        'name'   => 'Aminata Diallo',
                        'role'   => 'PDG TechAfrique, Accra',
                        'avatar' => 'https://picsum.photos/seed/ami2/80/80',
                        'stars'  => 5,
                    ],
                    [
                        'quote'  => "Partenaires depuis 5 ans, ALA Building est notre référence pour tous nos projets de construction haut de gamme en Afrique de l'Ouest.",
                        'name'   => 'Jean-Baptiste Agbo',
                        'role'   => 'Directeur BTP Invest',
                        'avatar' => 'https://picsum.photos/seed/jba3/80/80',
                        'stars'  => 5,
                    ],
                ];
                foreach ($testimonials as $t) : ?>
                <div class="testi-slide">
                    <div class="testi-card">
                        <div class="testi-stars" aria-label="<?= $t['stars'] ?> étoiles sur 5">
                            <?= str_repeat('<i class="fas fa-star" aria-hidden="true"></i>', $t['stars']) ?>
                        </div>
                        <p class="testi-quote"><?= htmlspecialchars($t['quote']) ?></p>
                        <img src="<?= $t['avatar'] ?>" alt="Photo de <?= htmlspecialchars($t['name']) ?>"
                             class="testi-avatar" loading="lazy">
                        <p class="testi-name"><?= htmlspecialchars($t['name']) ?></p>
                        <p class="testi-role"><?= htmlspecialchars($t['role']) ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="testi-controls" role="tablist" aria-label="Témoignages navigation">
                <button class="testi-prev btn btn--icon btn--ghost" aria-label="Précédent">
                    <i class="fas fa-arrow-left fa-sm" aria-hidden="true"></i>
                </button>
                <?php foreach ($testimonials as $i => $t) : ?>
                <div class="testi-dot <?= $i === 0 ? 'active' : '' ?>"
                     role="tab" tabindex="0"
                     aria-label="Témoignage <?= $i + 1 ?>"
                     aria-selected="<?= $i === 0 ? 'true' : 'false' ?>"></div>
                <?php endforeach; ?>
                <button class="testi-next btn btn--icon btn--ghost" aria-label="Suivant">
                    <i class="fas fa-arrow-right fa-sm" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════
     CTA BANNER
     ═══════════════════════════════════════════════════ -->
<section class="cta-banner" aria-labelledby="cta-heading">
    <div class="container">
        <div class="cta-banner__inner reveal">
            <h2 class="cta-banner__title" id="cta-heading">
                <?= __('cta_title') ?>
                <br><em style="font-style:italic;font-weight:300;opacity:0.75;"><?= __('cta_sub') ?></em>
            </h2>
            <div class="cta-banner__actions">
                <a href="contact.php" class="btn btn--primary">
                    <?= __('cta_btn') ?> <i class="fas fa-arrow-right fa-xs"></i>
                </a>
                <a href="https://wa.me/22898067744?text=<?= urlencode(__('whatsapp_greeting')) ?>"
                   target="_blank" rel="noopener" class="btn btn--wa">
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    <?= __('cta_wa') ?>
                </a>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>
