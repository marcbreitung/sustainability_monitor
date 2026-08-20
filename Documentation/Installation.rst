:navigation-title: Installation

..  _installation:

============
Installation
============

..  _installation-composer:

Install with Composer
=====================

Install the extension via Composer:

..  code-block:: bash

    composer req marcbreitung/sustainability-monitor

See also `Installing extensions, TYPO3 Getting started <https://docs.typo3.org/permalink/t3start:installing-extensions>`_.

..  _installation-classic:

Install in Classic Mode
=======================

Or download the extension from `https://github.com/marcbreitung/sustainability_monitor <https://github.com/marcbreitung/sustainability_monitor>`_ and install it in
the Extension Manager.

After installation, include the site set and add the plugin to a page. Both
steps are described in :ref:`configuration` and :ref:`usage-plugin`.

Requirements
============

* TYPO3 14.0 to 14.3
* A browser with support for the `PerformanceObserver API <https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver>`_
    and the relevant performance entry types

The metrics are collected in the visitor's browser. No server-side measurement
service or database table is required.
