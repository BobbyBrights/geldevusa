<?php

define('S_ROOT', $_SERVER['DOCUMENT_ROOT']);

if (class_exists('Swift', false)) {
    return;
}

// Load Swift utility class
require S_ROOT . '/Swift.php';

if (!function_exists('_swiftmailer_init')) {
    function _swiftmailer_init()
    {
        require dirname(__FILE__) . '/swift_init.php';
    }
}

// Start the autoloader and lazy-load the init script to set up dependency injection
Swift::registerAutoload('_swiftmailer_init');
