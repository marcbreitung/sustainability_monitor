:navigation-title: Usage

..  _usage:

=====
Usage
=====

..  _usage-plugin:

Use the TYPO3 plugin
====================

1. Open the page module and create a new content element.
2. Select the **Sustainability Monitor** plugin.
3. In the FlexForm, enable one or more metrics.
4. Save and publish the content element.

The monitor is evaluated after the page has loaded in the visitor's browser.
The displayed values therefore describe that browser session and can differ
between visitors, devices, network conditions, and cached or uncached loads.

The plugin uses the labels and explanatory texts from the extension's XLIFF
file. They can be translated or overridden using the normal TYPO3 language
override mechanisms.

Example output
==============

The following is the smallest useful plugin configuration: enable all four
metrics in the FlexForm. No TypoScript beyond the included site set is needed.

For a custom page layout, place the plugin in a dedicated content column and
style the elements from your site package. The Web Components use Shadow DOM;
their documented shadow parts are listed in :ref:`webcomponents-styling`.

Interpretation
==============

Use the values for page-level comparisons and development feedback. They are
not a replacement for controlled lab testing or a complete carbon accounting
methodology. In particular, the CO2 value is an estimate based on transferred
bytes and should be treated as an indicator rather than an audited emission
measurement.