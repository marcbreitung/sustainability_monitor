# sm-largest-contentful-paint

This component displays the Largest Contentful Paint (LCP) value and provides a button to highlight the LCP element on the page. It uses the PerformanceObserver API to monitor LCP entries and updates the displayed value accordingly.

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                         | Type      | Default                                                     |
| ----------------------- | ------------------------- | ----------------------------------- | --------- | ----------------------------------------------------------- |
| `ariaLabel`             | `aria-label`              | Aria label for the highlight button | `string`  | `'Show Largest Contentful Paint Element'`                   |
| `highlight`             | `highlight`               | Highlight LCP element               | `boolean` | `false`                                                     |
| `highlightElementClass` | `highlight-element-class` | Highlight element class             | `string`  | `'highlighted'`                                             |
| `highlightElementLabel` | `highlight-element-label` | Highlight element label             | `string`  | `'?'`                                                       |
| `label`                 | `label`                   | Label                               | `string`  | `'Largest Contentful Paint'`                                |
| `popoverText`           | `popover-text`            | Popover text                        | `string`  | `'Click to highlight the largest contentful paint element'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
