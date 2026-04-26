<?php
require_once __DIR__ . '/loader.php';
$current_lang  = get_current_lang();
$target_lang   = $current_lang === 'fr' ? 'en' : 'fr';
$target_label  = strtoupper($target_lang);

// Build lang-switch URL preserving current page
$current_url = strtok($_SERVER['REQUEST_URI'], '?');
$lang_url    = $current_url . '?lang=' . $target_lang;

// Active page
$current_page = basename($_SERVER['PHP_SELF']);
function is_active($page) {
    global $current_page;
    return $current_page === $page ? ' active' : '';
}
?>
<!DOCTYPE html>
<html lang="<?= $current_lang ?>" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ALA Building — Cabinet d'architecture et de construction basé à Lomé, Togo. Excellence africaine, standards internationaux.">
    <meta name="keywords" content="architecture, construction, Lomé, Togo, Afrique, BTP, intérieur, rénovation">
    <meta property="og:title" content="ALA Building | Architecture & Construction">
    <meta property="og:description" content="Cabinet d'architecture basé à Lomé, Togo. Excellence africaine, standards internationaux.">
    <meta property="og:type" content="website">

    <title>ALA Building | Architecture & Construction — Lomé, Togo</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous">

    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="assets/css/main.css">

    <!-- Scroll Progress Bar -->
    <div id="progress-bar" style="width:0"></div>
</head>
<body>

<!-- ═══════════════════════════════════════
     NAVBAR
     ═══════════════════════════════════════ -->
<header class="navbar" role="banner">
    <div class="container">
        <div class="navbar__inner">

            <!-- Logo -->
            <a href="index.php" class="logo" aria-label="ALA Building — Accueil">
                <div class="logo__mark" aria-hidden="true">ALA</div>
                <div class="logo__text">
                    <span class="logo__name">ALA Building</span>
                    <span class="logo__tagline">Archiram Link Africa</span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <nav class="nav-links" aria-label="Navigation principale">
                <a href="index.php"    class="nav-link<?= is_active('index.php') ?>"   ><?= __('home') ?></a>
                <a href="about.php"    class="nav-link<?= is_active('about.php') ?>"   ><?= __('about') ?></a>
                <a href="services.php" class="nav-link<?= is_active('services.php') ?>"><?= __('services') ?></a>
                <a href="projects.php" class="nav-link<?= is_active('projects.php') ?>"><?= __('projects') ?></a>
                <a href="contact.php"  class="nav-link<?= is_active('contact.php') ?>" ><?= __('contact') ?></a>
            </nav>

            <!-- Controls -->
            <div class="nav-controls">
                <!-- Theme -->
                <button class="theme-toggle" aria-label="Changer de thème">
                    <i class="fas fa-moon" aria-hidden="true"></i>
                </button>

                <!-- Language -->
                <a href="<?= htmlspecialchars($lang_url) ?>" class="lang-switcher" aria-label="Changer de langue">
                    <i class="fas fa-globe fa-xs" aria-hidden="true"></i>
                    <?= $target_label ?>
                </a>

                <!-- CTA -->
                <a href="contact.php" class="btn btn--primary" style="padding:0.625rem 1.25rem;">
                    <?= __('nav_cta') ?>
                </a>

                <!-- Mobile hamburger -->
                <button class="mobile-btn" aria-label="Menu" aria-expanded="false" aria-controls="mobile-drawer">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </div>
</header>

<!-- Mobile Drawer -->
<div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-label="Menu mobile">
    <nav>
        <a href="index.php"    class="nav-link"><?= __('home') ?></a>
        <a href="about.php"    class="nav-link"><?= __('about') ?></a>
        <a href="services.php" class="nav-link"><?= __('services') ?></a>
        <a href="projects.php" class="nav-link"><?= __('projects') ?></a>
        <a href="contact.php"  class="nav-link"><?= __('contact') ?></a>
    </nav>
    <div style="margin-top:3rem;display:flex;flex-direction:column;gap:1rem;">
        <a href="contact.php" class="btn btn--primary"><?= __('nav_cta') ?></a>
        <a href="https://wa.me/22898067744?text=<?= urlencode(__('whatsapp_greeting')) ?>"
           class="btn btn--wa" target="_blank" rel="noopener">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
    </div>
</div>
