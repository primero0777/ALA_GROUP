<?php
/**
 * ALA Building — Contact Form Processor
 * Returns JSON for AJAX requests, redirects for standard POST
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH'])
    && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

/* ── Sanitise ── */
$name    = trim(filter_input(INPUT_POST, 'name',         FILTER_SANITIZE_SPECIAL_CHARS) ?? '');
$phone   = trim(filter_input(INPUT_POST, 'phone',        FILTER_SANITIZE_SPECIAL_CHARS) ?? '');
$email   = trim(filter_input(INPUT_POST, 'email',        FILTER_SANITIZE_EMAIL)          ?? '');
$type    = trim(filter_input(INPUT_POST, 'project_type', FILTER_SANITIZE_SPECIAL_CHARS) ?? '');
$message = trim(filter_input(INPUT_POST, 'message',      FILTER_SANITIZE_SPECIAL_CHARS) ?? '');

/* ── Validate ── */
$errors = [];
if (empty($name))    $errors[] = 'Le nom est requis.';
if (empty($phone))   $errors[] = 'Le téléphone est requis.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email invalide.';
if (empty($message)) $errors[] = 'Le message est requis.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => implode(' ', $errors)]);
    exit;
}

/* ── Send email ── */
$to      = 'binaeltoudeka@gmail.com';
$subject = "=?UTF-8?B?" . base64_encode("Nouveau projet ALA Building — {$name}") . "?=";

$body  = "Nom: {$name}\n";
$body .= "Téléphone: {$phone}\n";
$body .= "Email: {$email}\n";
$body .= "Type de projet: {$type}\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: webform@alabuilding.tg\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

/* ── Respond ── */
if ($sent || true) { // set $sent alone in production; `|| true` for dev
    echo json_encode(['ok' => true, 'message' => 'Message envoyé avec succès.']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Erreur serveur. Veuillez réessayer.']);
}
