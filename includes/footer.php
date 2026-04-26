<!-- ═══════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════ -->
<footer class="footer" role="contentinfo">
    <div class="container">
        <div class="footer-grid">

            <!-- Brand -->
            <div class="footer-brand">
                <a href="index.php" class="logo" style="margin-bottom:1rem;">
                    <div class="logo__mark">ALA</div>
                    <div class="logo__text">
                        <span class="logo__name">ALA Building</span>
                        <span class="logo__tagline">Archiram Link Africa</span>
                    </div>
                </a>
                <p class="footer-desc"><?= __('footer_desc') ?></p>
                <div class="footer-socials" style="margin-top:1.5rem;">
                    <a href="#" class="footer-social" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="footer-social" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="footer-social" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://wa.me/22898067744" class="footer-social" aria-label="WhatsApp" target="_blank" rel="noopener">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>

            <!-- Navigation -->
            <div class="footer-col">
                <p class="footer-col__title"><?= __('footer_links') ?></p>
                <a href="index.php"><?= __('home') ?></a>
                <a href="about.php"><?= __('about') ?></a>
                <a href="services.php"><?= __('services') ?></a>
                <a href="projects.php"><?= __('projects') ?></a>
                <a href="contact.php"><?= __('contact') ?></a>
            </div>

            <!-- Services -->
            <div class="footer-col">
                <p class="footer-col__title"><?= __('footer_services') ?></p>
                <a href="services.php"><?= __('service_architecture') ?></a>
                <a href="services.php"><?= __('service_construction') ?></a>
                <a href="services.php"><?= __('service_decoration') ?></a>
                <a href="services.php"><?= __('service_engineering') ?></a>
                <a href="services.php"><?= __('service_finishing') ?></a>
            </div>

            <!-- Contact -->
            <div class="footer-col">
                <p class="footer-col__title"><?= __('contact_info') ?></p>
                <a href="mailto:binaeltoudeka@gmail.com" style="display:flex;align-items:center;gap:0.5rem;">
                    <i class="fas fa-envelope fa-xs" style="color:rgba(255,255,255,0.35);width:16px;"></i>
                    binaeltoudeka@gmail.com
                </a>
                <a href="tel:+22898067744" style="display:flex;align-items:center;gap:0.5rem;">
                    <i class="fas fa-phone fa-xs" style="color:rgba(255,255,255,0.35);width:16px;"></i>
                    +228 98 06 77 44
                </a>
                <span style="display:flex;align-items:center;gap:0.5rem;color:rgba(255,255,255,0.6);font-size:0.875rem;">
                    <i class="fas fa-map-marker-alt fa-xs" style="color:rgba(255,255,255,0.35);width:16px;"></i>
                    Lomé, Togo
                </span>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="footer-copy">&copy; <?= date('Y') ?> ALA Building. <?= __('rights') ?></p>
            <p class="footer-copy"><?= __('footer_made') ?></p>
        </div>
    </div>
</footer>

<?php require_once __DIR__ . '/whatsapp.php'; ?>

<script src="assets/js/main.js" defer></script>
</body>
</html>
