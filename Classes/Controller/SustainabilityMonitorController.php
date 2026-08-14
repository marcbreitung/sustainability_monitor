<?php

declare(strict_types=1);

namespace Marcbreitung\SustainabilityMonitor\Controller;

use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use TYPO3\CMS\Core\Page\AssetCollector;
use Psr\Http\Message\ResponseInterface;

class SustainabilityMonitorController extends ActionController
{
    public function __construct(
        private readonly AssetCollector $assetCollector,
    ) {
    }

    public function indexAction(): ResponseInterface
    {
        if ($this->settings['enableLargestContentfulPaint'] ?? false) {
            $this->assetCollector->addJavaScript(
                'sustainability-monitor-largest-contentful-paint',
                'EXT:sustainability_monitor/Resources/Public/JavaScript/sm-largest-contentful-paint.js',
                ['type' => 'module']
            );
        }
        return $this->htmlResponse();
    }
}