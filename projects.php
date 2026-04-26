<?php require_once 'includes/header.php'; ?>

<!-- Page Hero -->
<section class="page-hero" aria-labelledby="proj-page-heading">
    <div class="container">
        <div style="padding-top:2rem;">
            <div class="page-hero__eyebrow">
                <i class="fas fa-images fa-xs" aria-hidden="true"></i>
                <?= __('section_projects') ?>
            </div>
            <h1 class="t-h1" id="proj-page-heading" style="max-width:640px;margin-bottom:1.25rem;">
                <?= __('section_projects') ?>
            </h1>
            <p class="t-body-lg text-muted" style="max-width:520px;">
                <?= __('projects_sub') ?>
            </p>
        </div>
    </div>
</section>

<!-- Projects Gallery -->
<section aria-labelledby="proj-gallery-heading">
    <div class="container">

        <div class="projects-filter reveal" role="group" aria-label="Filtrer par catégorie">
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
                'desc'  => 'Villa résidentielle haut de gamme de 400m² avec piscine à débordement, terrasse panoramique et jardins paysagers. Réalisée en 14 mois.',
                'year'  => '2023',
                'feat'  => true,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
                'title' => 'Siège Social Tech Togo',
                'cat'   => 'commercial',
                'loc'   => 'Lomé, Togo',
                'desc'  => 'Immeuble de bureaux de 6 étages avec façade double peau en verre et espace coworking. 2400m² de surface utile.',
                'year'  => '2023',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=900',
                'title' => 'Aménagement Bureau Premium',
                'cat'   => 'interior',
                'loc'   => 'Kégué, Lomé',
                'desc'  => 'Design intérieur complet de 1200m² pour une fintech internationale. Zones collaboratives, espaces de concentration et salles de réunion haut de gamme.',
                'year'  => '2022',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=900',
                'title' => 'Résidence Éco-Durable',
                'cat'   => 'residential',
                'loc'   => 'Baguida, Togo',
                'desc'  => 'Maison basse consommation avec panneaux solaires, récupération des eaux de pluie et matériaux biosourcés. Exemplaire en matière de durabilité.',
                'year'  => '2022',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=900',
                'title' => 'Complexe Hôtelier Accra',
                'cat'   => 'commercial',
                'loc'   => 'Accra, Ghana',
                'desc'  => 'Complexe boutique hôtel de 48 chambres en bord de mer avec piscine, spa et restaurant panoramique. Design inspiré de l\'architecture côtière africaine.',
                'year'  => '2021',
                'feat'  => true,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&q=80&w=900',
                'title' => 'Appartement Minimaliste',
                'cat'   => 'interior',
                'loc'   => 'Tokoin, Lomé',
                'desc'  => 'Rénovation complète d\'un appartement de 120m² en penthouse minimaliste. Ouverture de l\'espace, finitions en marbre et bois naturel.',
                'year'  => '2023',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1571955952085-96b7b07f2c98?auto=format&fit=crop&q=80&w=900',
                'title' => 'Centre Commercial Adidogomé',
                'cat'   => 'commercial',
                'loc'   => 'Adidogomé, Togo',
                'desc'  => 'Conception et réalisation d\'un centre commercial de 5000m² sur 3 niveaux. Structure mixte acier-béton, parkings et aménagements extérieurs.',
                'year'  => '2020',
                'feat'  => false,
            ],
            [
                'img'   => 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=900',
                'title' => 'Villa Bord de Mer',
                'cat'   => 'residential',
                'loc'   => 'Avepozo, Togo',
                'desc'  => 'Villa contemporaine de 280m² avec vue mer à 180°. Architecture ouverte sur l\'extérieur, piscine à débordement, terrasses successives.',
                'year'  => '2021',
                'feat'  => false,
            ],
        ];
        ?>

        <div class="projects-grid" id="projects-heading">
            <?php foreach ($projects as $i => $p) :
                $delay = "delay-" . min($i % 3, 5);
                $cat_label = __($p['cat']);
            ?>
            <div class="project-card reveal <?= $delay ?> <?= $p['feat'] ? 'featured' : '' ?>"
                 data-cat="<?= $p['cat'] ?>"
                 data-img="<?= htmlspecialchars($p['img']) ?>"
                 data-title="<?= htmlspecialchars($p['title']) ?>"
                 data-loc="<?= htmlspecialchars($p['loc']) ?>"
                 data-desc="<?= htmlspecialchars($p['desc']) ?>"
                 tabindex="0" role="button"
                 aria-label="Voir le projet <?= htmlspecialchars($p['title']) ?>">
                <img src="<?= $p['img'] ?>" alt="<?= htmlspecialchars($p['title']) ?>" loading="<?= $i < 3 ? 'eager' : 'lazy' ?>">
                <div class="project-card__overlay">
                    <span class="project-card__cat"><?= $cat_label ?> &bull; <?= $p['year'] ?></span>
                    <h3 class="project-card__title"><?= htmlspecialchars($p['title']) ?></h3>
                    <span class="project-card__view">
                        <i class="fas fa-map-marker-alt fa-xs"></i>
                        <?= htmlspecialchars($p['loc']) ?>
                        &nbsp;&nbsp;
                        <?= __('project_view') ?> <i class="fas fa-arrow-right fa-xs"></i>
                    </span>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Project Modal -->
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
            <i class="fas fa-map-marker-alt fa-xs"></i> <span></span>
        </p>
        <p class="t-body text-muted modal__desc" style="margin-bottom:2rem;line-height:1.8;"></p>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="contact.php" class="btn btn--primary"><?= __('quote_cta') ?></a>
            <a href="https://wa.me/22898067744?text=<?= urlencode(__('whatsapp_greeting')) ?>"
               target="_blank" rel="noopener" class="btn btn--wa">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
        </div>
    </div>
</div>

<!-- CTA -->
<section class="cta-banner" aria-labelledby="proj-cta-heading">
    <div class="container">
        <div class="cta-banner__inner reveal">
            <h2 class="cta-banner__title" id="proj-cta-heading">
                Votre projet sera notre<br><em>prochaine réalisation.</em>
            </h2>
            <div class="cta-banner__actions">
                <a href="contact.php" class="btn btn--primary"><?= __('cta_btn') ?> <i class="fas fa-arrow-right fa-xs"></i></a>
                <a href="https://wa.me/22898067744?text=<?= urlencode(__('whatsapp_greeting')) ?>"
                   target="_blank" rel="noopener" class="btn btn--wa">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>
