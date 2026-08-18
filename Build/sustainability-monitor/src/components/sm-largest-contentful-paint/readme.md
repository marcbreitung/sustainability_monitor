# sm-largest-contentful-paint

This component displays the Largest Contentful Paint (LCP) value and provides a button to highlight the LCP element on the page. It uses the PerformanceObserver API to monitor LCP entries and updates the displayed value accordingly.

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                 | Type      | Default                                                                                                                               |
| ---------------- | ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`      | `aria-label`      | Highlight button aria-label | `string`  | `'Show Largest Contentful Paint Element'`                                                                                             |
| `highlight`      | `highlight`       | Highlight LCP element       | `boolean` | `false`                                                                                                                               |
| `highlightClass` | `highlight-class` | Highlight element class     | `string`  | `'highlighted'`                                                                                                                       |
| `highlightLabel` | `highlight-label` | Highlight element label     | `string`  | `'?'`                                                                                                                                 |
| `info`           | `info`            | Title                       | `string`  | `'The Largest Contentful Paint is calculated based on the startTime property of the last entry in the PerformanceObserverEntryList.'` |
| `label`          | `label`           | Label                       | `string`  | `'Largest Contentful Paint'`                                                                                                          |
| `locale`         | `locale`          | Locale                      | `string`  | `'de-DE'`                                                                                                                             |
| `popoverText`    | `popover-text`    | Popover text                | `string`  | `'Click to highlight the largest contentful paint element'`                                                                           |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"button"`    |             |
| `"container"` |             |
| `"label"`     |             |
| `"popover"`   |             |
| `"value"`     |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
