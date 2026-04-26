<?php
$wa_number  = '22898067744';
$wa_message = urlencode(__('whatsapp_greeting'));
$wa_link    = "https://wa.me/{$wa_number}?text={$wa_message}";
$wa_label   = get_current_lang() === 'fr'
    ? 'Discutons de votre projet'
    : 'Let\'s talk about your project';
?>
<div class="wa-float" role="complementary" aria-label="WhatsApp">
    <span class="wa-float__tooltip"><?= htmlspecialchars($wa_label) ?></span>
    <a href="<?= $wa_link ?>" target="_blank" rel="noopener noreferrer"
       class="wa-float__btn" aria-label="Contacter via WhatsApp">
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
</div>
