<?php require_once 'includes/header.php'; ?>

<!-- Page Hero -->
<section class="page-hero" aria-labelledby="contact-page-heading">
    <div class="container">
        <div style="padding-top:2rem;">
            <div class="page-hero__eyebrow">
                <i class="fas fa-paper-plane fa-xs" aria-hidden="true"></i>
                <?= __('contact') ?>
            </div>
            <h1 class="t-h1" id="contact-page-heading" style="max-width:640px;margin-bottom:1.25rem;">
                <?= __('contact_title') ?>
            </h1>
            <p class="t-body-lg text-muted" style="max-width:520px;">
                <?= __('contact_sub') ?>
            </p>
        </div>
    </div>
</section>

<!-- Contact Grid -->
<section aria-labelledby="contact-form-heading">
    <div class="container">
        <div class="contact-grid">

            <!-- Left: Info -->
            <div class="reveal-l">
                <h2 class="t-h3" id="contact-form-heading" style="margin-bottom:2rem;">
                    Discutons de<br><em>votre projet.</em>
                </h2>

                <div>
                    <div class="contact-info__item">
                        <div class="contact-info__icon"><i class="fas fa-envelope" aria-hidden="true"></i></div>
                        <div>
                            <p class="contact-info__label">Email</p>
                            <a href="mailto:binaeltoudeka@gmail.com" class="contact-info__value">
                                binaeltoudeka@gmail.com
                            </a>
                        </div>
                    </div>

                    <div class="contact-info__item">
                        <div class="contact-info__icon"><i class="fab fa-whatsapp" aria-hidden="true"></i></div>
                        <div>
                            <p class="contact-info__label">WhatsApp / Téléphone</p>
                            <a href="tel:+22898067744" class="contact-info__value">+228 98 06 77 44</a>
                        </div>
                    </div>

                    <div class="contact-info__item">
                        <div class="contact-info__icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></div>
                        <div>
                            <p class="contact-info__label">Adresse</p>
                            <p class="contact-info__value">Lomé, Togo<br>Avedji Wessomé</p>
                        </div>
                    </div>

                    <div class="contact-info__item">
                        <div class="contact-info__icon"><i class="fas fa-clock" aria-hidden="true"></i></div>
                        <div>
                            <p class="contact-info__label">Horaires</p>
                            <p class="contact-info__value">Lun – Ven : 8h00 – 18h00<br>Sam : 9h00 – 14h00</p>
                        </div>
                    </div>
                </div>

                <!-- Map -->
                <div style="margin-top:2rem;border-radius:var(--r-xl);overflow:hidden;height:280px;border:1px solid var(--border);">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.717646633633!2d1.18967985!3d6.16016625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c6670e3ed5%3A0x8e8334812da158!2sAvedji%2C%20Lom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1690000000000!5m2!1sfr!2sfr"
                        width="100%" height="100%" style="border:0;display:block;" allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        title="Localisation ALA Building à Lomé, Togo"></iframe>
                </div>

                <!-- WhatsApp direct -->
                <a href="https://wa.me/22898067744?text=<?= urlencode(__('whatsapp_greeting')) ?>"
                   target="_blank" rel="noopener"
                   class="btn btn--wa" style="margin-top:1.5rem;width:100%;justify-content:center;">
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    Écrire directement sur WhatsApp
                </a>
            </div>

            <!-- Right: Form -->
            <div class="reveal-r">
                <div class="contact-form">
                    <h3 class="t-h4" style="margin-bottom:2rem;">Envoyez-nous un message</h3>

                    <div class="form-alert success" id="form-success" style="display:none;margin-bottom:1.5rem;">
                        <i class="fas fa-check-circle" aria-hidden="true"></i>
                        <?= __('form_success') ?>
                    </div>
                    <div class="form-alert error" id="form-error" style="display:none;margin-bottom:1.5rem;">
                        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                        <?= __('form_error') ?>
                    </div>

                    <form id="contact-form" action="includes/process_form.php" method="POST"
                          novalidate style="display:flex;flex-direction:column;gap:1.25rem;">

                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label" for="name"><?= __('contact_name') ?> *</label>
                                <input type="text" id="name" name="name"
                                       class="form-input" placeholder="Jean Mensah"
                                       autocomplete="name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="phone"><?= __('contact_phone') ?> *</label>
                                <input type="tel" id="phone" name="phone"
                                       class="form-input" placeholder="+228 90 00 00 00"
                                       autocomplete="tel" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="email"><?= __('contact_email') ?> *</label>
                            <input type="email" id="email" name="email"
                                   class="form-input" placeholder="jean@email.com"
                                   autocomplete="email" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="project_type"><?= __('contact_project_type') ?></label>
                            <select id="project_type" name="project_type" class="form-input form-select">
                                <option value="" disabled selected>-- <?= __('contact_project_type') ?> --</option>
                                <option value="Résidentiel"><?= __('form_type_resid') ?></option>
                                <option value="Commercial"><?= __('form_type_comm') ?></option>
                                <option value="Intérieur"><?= __('form_type_inter') ?></option>
                                <option value="Rénovation"><?= __('form_type_renov') ?></option>
                                <option value="Autre"><?= __('form_type_other') ?></option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="message"><?= __('contact_message') ?> *</label>
                            <textarea id="message" name="message"
                                      class="form-input" rows="5"
                                      placeholder="Décrivez votre projet : type de bâtiment, superficie, localisation, budget estimé…"
                                      required></textarea>
                        </div>

                        <button type="submit" class="btn btn--primary"
                                style="width:100%;justify-content:center;padding:1rem;"
                                data-sending="<?= __('form_sending') ?>">
                            <i class="fas fa-paper-plane fa-sm" aria-hidden="true"></i>
                            <?= __('contact_send') ?>
                        </button>

                        <p class="t-sm text-muted" style="text-align:center;">
                            <i class="fas fa-lock fa-xs" aria-hidden="true"></i>
                            Vos données sont confidentielles et ne seront jamais partagées.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ -->
<section style="background:var(--bg-2);" aria-labelledby="faq-heading">
    <div class="container">
        <div class="section-header text-center reveal" style="margin-bottom:3rem;">
            <div class="section-label t-label" style="justify-content:center;">FAQ</div>
            <h2 class="t-h2" id="faq-heading">Questions fréquentes</h2>
        </div>

        <div class="container--narrow">
            <?php
            $faqs = [
                ['q' => 'Quel est le délai moyen pour un projet résidentiel ?',
                 'a' => 'Un projet résidentiel standard prend entre 8 et 18 mois, de la conception à la livraison, selon la complexité et la superficie.'],
                ['q' => 'Proposez-vous des services hors du Togo ?',
                 'a' => 'Oui ! Nous intervenons dans toute l\'Afrique de l\'Ouest. Nous avons déjà réalisé des projets au Ghana, au Bénin et en Côte d\'Ivoire.'],
                ['q' => 'Comment se déroule la première consultation ?',
                 'a' => 'La première consultation (gratuite) est dédiée à la compréhension de votre projet, vos besoins, votre budget et votre calendrier. Elle dure environ 1h.'],
                ['q' => 'Proposez-vous des facilités de paiement ?',
                 'a' => 'Nous proposons des paiements échelonnés selon l\'avancement du chantier : acompte, phase conception, gros œuvre, second œuvre, et livraison.'],
            ];
            foreach ($faqs as $i => $faq) :
            ?>
            <div class="reveal delay-<?= $i % 3 ?>"
                 style="padding:1.75rem 0;border-bottom:1px solid var(--border);<?= $i === 0 ? 'border-top:1px solid var(--border);' : '' ?>">
                <h3 class="t-h4" style="margin-bottom:0.75rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
                    <?= htmlspecialchars($faq['q']) ?>
                    <i class="fas fa-plus fa-sm text-muted" style="flex-shrink:0;" aria-hidden="true"></i>
                </h3>
                <p class="t-body text-muted"><?= htmlspecialchars($faq['a']) ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>
