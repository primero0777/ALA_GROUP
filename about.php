<?php require_once 'includes/header.php'; ?>

<!-- Page Hero -->
<section class="page-hero" aria-labelledby="about-page-heading">
    <div class="container">
        <div style="padding-top:2rem;">
            <div class="page-hero__eyebrow">
                <i class="fas fa-building fa-xs" aria-hidden="true"></i>
                <?= __('about') ?>
            </div>
            <h1 class="t-h1" id="about-page-heading" style="max-width:640px;margin-bottom:1.25rem;">
                <?= __('about_title1') ?><br><em><?= __('about_title2') ?></em>
            </h1>
            <p class="t-body-lg text-muted" style="max-width:520px;">
                <?= __('footer_desc') ?>
            </p>
        </div>
    </div>
</section>

<!-- Story -->
<section aria-labelledby="story-heading">
    <div class="container">
        <div class="about-grid">
            <div class="about__image-wrap reveal-l">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=85&w=900"
                     alt="Équipe ALA Building au travail" loading="lazy">
                <div class="about__badge">
                    <span class="about__badge-num">2014</span>
                    <span class="about__badge-text">Fondée</span>
                </div>
            </div>

            <div class="about__text reveal-r">
                <div class="section-label t-label">Notre ADN</div>
                <h2 class="t-h2" id="story-heading" style="margin-bottom:1.5rem;">
                    L'excellence africaine,<br><em>sans compromis.</em>
                </h2>
                <p class="about__body">
                    ALA Building (Archiram Link Africa) est née d'une conviction : l'Afrique mérite une architecture à la hauteur de ses ambitions. Basée à Lomé, Togo, notre cabinet réunit des architectes, ingénieurs et designers formés dans les meilleures écoles mondiales.
                </p>
                <p class="about__body">
                    Chaque projet est traité comme une œuvre — du dessin initial au dernier coup de pinceau. Nous intégrons les contraintes locales, le climat, les matériaux disponibles et les aspirations culturelles pour créer des espaces authentiquement africains et internationalement reconnus.
                </p>

                <div style="margin-top:2.5rem;display:flex;flex-direction:column;gap:1rem;">
                    <div style="display:flex;align-items:center;gap:1rem;">
                        <div style="width:40px;height:40px;border-radius:var(--r-md);background:var(--blue-light);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0;">
                            <i class="fas fa-check fa-sm"></i>
                        </div>
                        <span class="t-body" style="color:var(--text-2);">Équipe pluridisciplinaire certifiée</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:1rem;">
                        <div style="width:40px;height:40px;border-radius:var(--r-md);background:var(--blue-light);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0;">
                            <i class="fas fa-check fa-sm"></i>
                        </div>
                        <span class="t-body" style="color:var(--text-2);">Projets livrés dans 5 pays africains</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:1rem;">
                        <div style="width:40px;height:40px;border-radius:var(--r-md);background:var(--blue-light);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0;">
                            <i class="fas fa-check fa-sm"></i>
                        </div>
                        <span class="t-body" style="color:var(--text-2);">Garantie décennale sur chaque ouvrage</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Vision / Mission / Values -->
<section style="background:var(--bg-2);" aria-labelledby="values-heading">
    <div class="container">
        <div class="section-header text-center reveal" style="margin-bottom:4rem;">
            <div class="section-label t-label" style="justify-content:center;">Ce qui nous guide</div>
            <h2 class="t-h2" id="values-heading">Notre fondation</h2>
        </div>

        <div class="grid-3" style="gap:2rem;">

            <div class="card reveal delay-1" style="padding:2.5rem;text-align:center;">
                <div style="width:64px;height:64px;border-radius:50%;background:var(--blue-light);display:flex;align-items:center;justify-content:center;color:var(--accent);font-size:1.5rem;margin:0 auto 1.75rem;">
                    <i class="fas fa-eye" aria-hidden="true"></i>
                </div>
                <h3 class="t-h4" style="margin-bottom:1rem;"><?= __('about_vision_title') ?></h3>
                <p class="t-sm text-muted"><?= __('about_vision_text') ?></p>
            </div>

            <div class="card reveal delay-2" style="padding:2.5rem;text-align:center;border-color:var(--accent);">
                <div style="width:64px;height:64px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;margin:0 auto 1.75rem;">
                    <i class="fas fa-bullseye" aria-hidden="true"></i>
                </div>
                <h3 class="t-h4" style="margin-bottom:1rem;"><?= __('about_mission_title') ?></h3>
                <p class="t-sm text-muted"><?= __('about_mission_text') ?></p>
            </div>

            <div class="card reveal delay-3" style="padding:2.5rem;text-align:center;">
                <div style="width:64px;height:64px;border-radius:50%;background:var(--blue-light);display:flex;align-items:center;justify-content:center;color:var(--accent);font-size:1.5rem;margin:0 auto 1.75rem;">
                    <i class="fas fa-leaf" aria-hidden="true"></i>
                </div>
                <h3 class="t-h4" style="margin-bottom:1rem;"><?= __('about_values_title') ?></h3>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;margin-top:0.5rem;">
                    <?php foreach (['val_excellence','val_innovation','val_integrity','val_sustainability'] as $v) : ?>
                    <span style="padding:0.3rem 0.875rem;border-radius:var(--r-full);border:1px solid var(--border-2);font-size:var(--text-xs);font-weight:600;color:var(--text-2);">
                        <?= __($v) ?>
                    </span>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Stats -->
<section style="padding-block:0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
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

<!-- Team -->
<section aria-labelledby="team-heading">
    <div class="container">
        <div class="section-header reveal" style="margin-bottom:3.5rem;">
            <div class="section-label t-label"><?= __('about_team_title') ?></div>
            <h2 class="t-h2" id="team-heading"><?= __('about_team_title') ?></h2>
        </div>

        <div class="grid-3" style="gap:2rem;">
            <?php
            $team = [
                ['name' => 'Binael Toudeka',    'role' => 'Fondateur & Architecte Principal', 'img' => 'https://picsum.photos/seed/tm1/400/500'],
                ['name' => 'Kofi Mensah',       'role' => 'Directeur des Travaux',            'img' => 'https://picsum.photos/seed/tm2/400/500'],
                ['name' => 'Aminata Lawson',    'role' => 'Designer Intérieur Senior',         'img' => 'https://picsum.photos/seed/tm3/400/500'],
            ];
            foreach ($team as $i => $m) :
            ?>
            <div class="reveal delay-<?= $i + 1 ?>">
                <div style="border-radius:var(--r-xl);overflow:hidden;margin-bottom:1.25rem;aspect-ratio:4/5;background:var(--surface-3);">
                    <img src="<?= $m['img'] ?>" alt="<?= htmlspecialchars($m['name']) ?>"
                         style="width:100%;height:100%;object-fit:cover;transition:transform 0.6s var(--ease);"
                         loading="lazy"
                         onmouseover="this.style.transform='scale(1.05)'"
                         onmouseout="this.style.transform='scale(1)'">
                </div>
                <h3 class="t-h4"><?= htmlspecialchars($m['name']) ?></h3>
                <p class="t-sm text-muted"><?= htmlspecialchars($m['role']) ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="cta-banner" aria-labelledby="about-cta-heading">
    <div class="container">
        <div class="cta-banner__inner reveal">
            <h2 class="cta-banner__title" id="about-cta-heading">
                Prêt à concrétiser votre projet ?
                <br><em style="font-style:italic;font-weight:300;opacity:0.7;">Notre équipe vous attend.</em>
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
