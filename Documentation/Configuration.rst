:navigation-title: Configuration
..  _configuration:

=============
Configuration
=============

..  _site-set:

Include the site set
====================

This extension comes with a site set called `marcbreitung/sustainability-monitor`. To use it include
this set in your site configuration via

..  code-block:: diff
    :caption: config/sites/my-site/config.yaml (diff)

     base: 'https://example.com/'
     rootPageId: 1
    +dependencies:
    +  - marcbreitung/sustainability-monitor

See also: `TYPO3 Explained, Using a site set as dependency in a site <https://docs.typo3.org/permalink/t3coreapi:site-sets-usage>`_.

..  _configuration-plugin:

Plugin configuration
====================

Create a content element of type **Sustainability Monitor** on the page where
the metrics should be shown. The plugin provides one FlexForm tab per metric:

* **Largest Contentful Paint**: enable the metric, and optionally enable the
  element highlight action.
* **Number of Requests**: count resource and navigation requests.
* **Co2 Emission**: estimate emissions from the transferred resource size.
* **Transferred Size**: display the transferred resource size.

Only enabled metrics are rendered and only their JavaScript modules are added
to the page. This keeps pages that use a subset of the monitor from loading the
other metric modules.

Largest Contentful Paint options
--------------------------------

When **Highlight element** is enabled, the LCP component offers a button. A
visitor can use it to scroll to the measured element and temporarily add the
configured CSS class. The default class is ``highlighted``. Add a rule to your
site CSS, for example:

..  code-block:: css

    .highlighted {
        outline: 3px solid #f59e0b;
        outline-offset: 4px;
    }

The class is configurable through the FlexForm field **Highlight CSS class**.

CSS file
--------

The site set defines this default TypoScript constant:

..  code-block:: typoscript

    plugin.tx_sustainabilitymonitor.settings.cssFile = EXT:sustainability_monitor/Resources/Public/Css/basic.css

Override it in your site package to use another stylesheet or disable the
extension stylesheet:

..  code-block:: typoscript

    plugin.tx_sustainabilitymonitor.settings.cssFile = EXT:site_package/Resources/Public/Css/sustainability-monitor.css

The configured file is included by the plugin template with the Fluid asset
collector. Leave the value empty if no extension stylesheet should be loaded.


