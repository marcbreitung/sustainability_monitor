:navigation-title: FAQ

..  _faq:

================================
Frequently Asked Questions (FAQ)
================================

..  accordion::
    :name: faq

    ..  accordion-item:: How can I install this extension?
        :name: installation
        :header-level: 2
        :show:

        See chapter :ref:`installation`.

    ..  accordion-item:: How to can I include the TypoScript?
        :name: configuration
        :header-level: 2

        See chapter :ref:`configuration`.

    ..  accordion-item:: Why does a metric stay in its loading state?
        :name: loading
        :header-level: 2

        The component waits for the browser's PerformanceObserver API. Check
        browser support and make sure the metric's required performance entry
        type is available. Values are collected in the browser after page load.

    ..  accordion-item:: Are the CO2 values exact?
        :name: emissions
        :header-level: 2

        No. CO2 Emission is an estimate based on transferred bytes and the
        Sustainable Web Design model. Use it for comparisons and feedback, not
        as an audited emissions report. See :ref:`metrics`.

    ..  accordion-item:: Can I use only one metric?
        :name: single-metric
        :header-level: 2

        Yes. Enable only the desired metric in the plugin FlexForm. The other
        metric modules are not added to the page.

    ..  accordion-item:: Where to get help?
        :name: help
        :header-level: 2

        See chapter :ref:`help`.
