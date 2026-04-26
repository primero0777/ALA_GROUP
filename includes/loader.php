<?php
// Initialize session if needed for future use
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Logic for setting the language
$allowed_langs = ['fr', 'en'];
$default_lang = 'fr';

// Check if language is changed via URL parameter
if (isset($_GET['lang']) && in_array($_GET['lang'], $allowed_langs)) {
    $lang = $_GET['lang'];
    // Set cookie for 30 days
    setcookie('lang', $lang, time() + (86400 * 30), "/");
} else {
    // Rely on cookie if available, otherwise default
    $lang = isset($_COOKIE['lang']) && in_array($_COOKIE['lang'], $allowed_langs) ? $_COOKIE['lang'] : $default_lang;
}

// Load the selected language dictionary
$translations = require_once __DIR__ . '/../lang/' . $lang . '.php';

/**
 * Helper function to output translated strings
 */
function __($key) {
    global $translations;
    return isset($translations[$key]) ? $translations[$key] : $key;
}

/**
 * Function to get current language
 */
function get_current_lang() {
    global $lang;
    return $lang;
}
