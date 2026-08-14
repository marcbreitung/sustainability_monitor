<?php

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;

defined('TYPO3') or die();

ExtensionUtility::registerPlugin(
    'SustainabilityMonitor',
    'Components',
    'sustainability_monitor.db:plugin.sustainabilitymonitor.title',
    'actions-globe',
    'plugins',
    'sustainability_monitor.db:plugin.sustainabilitymonitor.description',
    'FILE:EXT:sustainability_monitor/Configuration/FlexForms/SustainabilityMonitor.xml',
);