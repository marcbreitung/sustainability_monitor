:navigation-title: Metrics

..  _metrics:

=======
Metrics
=======

All metrics are calculated client-side with the browser's Performance APIs.
They become available only when the browser supports the required observer and
entry type. A component remains in its loading state until its measurement is
available.

Largest Contentful Paint
========================

Custom element: ``sm-largest-contentful-paint``

LCP reports the ``startTime`` of the last entry observed for the
``largest-contentful-paint`` entry type. It is formatted as seconds with three
fractional digits. When enabled, the optional highlight action identifies the
element that produced the observed entry.

Number of Requests
==================

Custom element: ``sm-number-of-requests``

This metric counts entries from the ``resource`` and ``navigation`` performance
observers. It reflects the requests visible to the current browser session,
including the effects of caching and browser behavior.

Transferred Size
================

Custom element: ``sm-transferred-size``

Transferred size sums the ``transferSize`` values of resource performance
entries. The result is formatted as kilobytes according to the configured
locale.

CO2 Emission
============

Custom element: ``sm-co2-emission``

CO2 emission is an estimate derived from transferred bytes using the
Sustainable Web Design model. It is formatted as grams according to the
configured locale. It is dependent on the same browser-observed resource data
as the transferred-size metric.