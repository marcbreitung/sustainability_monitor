<?php

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use Marcbreitung\SustainabilityMonitor\Controller\SustainabilityMonitorController;

defined('TYPO3') or die();

ExtensionUtility::configurePlugin(
    'SustainabilityMonitor',
    'Components',
    [SustainabilityMonitorController::class => 'index'],
    [],
);