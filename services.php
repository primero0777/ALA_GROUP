<?php require_once 'includes/header.php'; ?>

<!-- Page Hero -->
<section class="page-hero" aria-labelledby="svc-page-heading">
    <div class="container">
        <div style="padding-top:2rem;">
            <div class="page-hero__eyebrow">
                <i class="fas fa-cogs fa-xs" aria-hidden="true"></i>
                <?= __('services') ?>
            </div>
            <h1 class="t-h1" id="svc-page-heading" style="max-width:680px;margin-bottom:1.25rem;">
                <?= __('section_services') ?>
            </h1>
            <p class="t-body-lg text-muted" style="max-width:520px;">
                <?= __('services_sub') ?>
            </p>
        </div>
    </div>
</section>

<!-- Services Detail -->
<?php
$services_full = [
    [
        'icon'  => 'fas fa-drafting-compass',
        'key'   => 'service_architecture',
        'desc'  => 'De la première esquisse à la modélisation 3D avancée, notre équipe d\'architectes donne vie à votre vision. Nous créons des espaces qui allient esthétisme, fonctionnalité et intégration parfaite dans leur environnement. Plans, permis de construire, suivi architectural complet.',
        'img'   => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=85&w=900',
        'feats' => ['Conception 2D/3D', 'Plans d\'exécution', 'Permis de construire', 'Suivi architectural'],
    ],
    [
        'icon'  => 'fas fa-hard-hat',
        'key'   => 'service_construction',
        'desc'  => 'Gros œuvre et second œuvre. Nous gérons intégralement votre chantier en veillant au respect des normes de sécurité, à la qualité des matériaux et aux délais de livraison. Du fondations à la toiture, ALA Building prend en charge chaque étape.',
        'img'   => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=85&w=900',
        'feats' => ['Gros œuvre', 'Second œuvre', 'Coordination de chantier', 'Contrôle qualité'],
    ],
    [
        'icon'  => 'fas fa-couch',
        'key'   => 'service_decoration',
        'desc'  => 'La finition intérieure donne son âme à votre espace. Notre équipe de designers intérieurs sélectionne avec soin les matériaux, couleurs, éclairages et mobilier pour créer une atmosphère unique qui reflète votre personnalité et vos aspirations.',
        'img'   => 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=900',
        'feats' => ['Design sur mesure', 'Sélection matériaux', 'Éclairage d\'ambiance', 'Mobilier'],
    ],
    [
        'icon'  => 'fas fa-cogs',
        'key'   => 'service_engineering',
        'desc'  => 'Études techniques approfondies, calculs de structures, coordination entre corps d\'état et supervision multidisciplinaire. Nous garantissons la solidité, la durabilité et la conformité de chaque ouvrage aux normes locales et internationales.',
        'img'   => 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=85&w=900',
        'feats' => ['Calculs structure', 'Études béton armé', 'Coordination MEP', 'Conformité normes'],
    ],
    [
        'icon'  => 'fas fa-hammer',
        'key'   => 'service_finishing',
        'desc'  => 'Nous donnons une nouvelle vie aux espaces existants. Réhabilitation complète ou partielle, rénovation contemporaine, mise aux normes — notre équipe transforme l\'ancien en moderne sans jamais sacrifier le charme et l\'histoire des lieux.',
        'img'   => 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=85&w=900',
        'feats' => ['Réhabilitation', 'Mise aux normes', 'Extension bâtiment', 'Rénovation complète'],
    ],
    [
        'icon'  => 'fas fa-building',
        'key'   => 'service_realestate',
        'desc'  => 'Développement, promotion et commercialisation de projets immobiliers résidentiels et commerciaux. De la recherche foncière à la vente, en passant par la construction, nous accompagnons les investisseurs dans leurs projets les plus ambitieux.',
        'img'   => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=900',
        'feats' => ['Promotion immobilière', 'Développement foncier', 'Commercialisation', 'Investissement'],
    ],
];
foreach ($services_full as $i => $s) :
    $reverse = $i % 2 !== 0;
?>
<section style="padding-block:5rem;<?= $i % 2 !== 0 ? 'background:var(--bg-2);' : '' ?>"
         aria-labelledby="svc-<?= $i ?>-heading">
    <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;">

            <!-- Image -->
            <div class="<?= $reverse ? 'reveal-r' : 'reveal-l' ?>"
                 style="order:<?= $reverse ? '2' : '1' ?>;">
                <div style="border-radius:var(--r-xl);overflow:hidden;aspect-ratio:4/3;background:var(--surface-3);">
                    <img src="<?= $s['img'] ?>" alt="<?= __($s['key']) ?>" loading="lazy"
                         style="width:100%;height:100%;object-fit:cover;transition:transform 0.7s var(--ease);"
                         onmouseover="this.style.transform='scale(1.04)'"
                         onmouseout="this.style.transform='scale(1)'">
                </div>
            </div>

            <!-- Text -->
            <div class="<?= $reverse ? 'reveal-l' : 'reveal-r' ?>"
                 style="order:<?= $reverse ? '1' : '2' ?>;">
                <div style="width:56px;height:56px;border-radius:var(--r-md);background:var(--blue-light);display:flex;align-items:center;justify-content:center;color:var(--accent);font-size:1.4rem;margin-bottom:1.5rem;">
                    <i class="<?= $s['icon'] ?>" aria-hidden="true"></i>
                </div>
                <span class="t-label text-muted" style="display:block;margin-bottom:0.5rem;">
                    <?= sprintf('%02d', $i + 1) ?> / <?= sprintf('%02d', count($services_full)) ?>
                </span>
                <h2 class="t-h3" id="svc-<?= $i ?>-heading" style="margin-bottom:1.25rem;">
                    <?= __($s['key']) ?>
                </h2>
                <p class="t-body text-muted" style="margin-bottom:2rem;line-height:1.8;">
                    <?= htmlspecialchars($s['desc']) ?>
                </p>

                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:2rem;">
                    <?php foreach ($s['feats'] as $f) : ?>
                    <span style="padding:0.35rem 0.875rem;border-radius:var(--r-full);border:1px solid var(--border-2);font-size:var(--text-xs);font-weight:600;color:var(--text-2);">
                        <i class="fas fa-check fa-xs" style="color:var(--accent);margin-right:0.25rem;"></i>
                        <?= htmlspecialchars($f) ?>
                    </span>
                    <?php endforeach; ?>
                </div>

                <a href="contact.php" class="btn btn--primary">
                    <?= __('quote_cta') ?> <i class="fas fa-arrow-right fa-xs"></i>
                </a>
            </div>

        </div>
    </div>
</section>
<?php endforeach; ?>

<!-- CTA -->
<section class="cta-banner" aria-labelledby="svc-cta-heading">
    <div class="container">
        <div class="cta-banner__inner reveal">
            <h2 class="cta-banner__title" id="svc-cta-heading">
                Votre projet nécessite<br><em>une expertise sur mesure ?</em>
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
