# Sustainability Monitor

TYPO3 extension for displaying web sustainability metrics in the frontend.

## Components

There is a plugin, which is a wrapper for the WebComponents. It is also possible to use the WebComponents as stand alone.

### Largest Contentful Paint (LCP)

Shows the Largest Contentful Paint (LCP) metric in the frontend. The LCP is a Core Web Vitals metric that measures the time it takes for the largest content element to become visible in the viewport.

to use the WebComponent include the javascript file `packages/sustainability_monitor/Resources/Public/JavaScript/sm-largest-contentful-paint.js`

````html
  <sm-largest-contentful-paint 
    label="Largest Contentful Paint" 
    highlight-label="?" 
    aria-label="Show Largest Contentful Paint Element" 
    highlight
  >
  </sm-largest-contentful-paint>
````

#### Properties

| Property         | Attribute         | Description                 | Type      | Default                                                                                                                               |
| ---------------- | ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`      | `aria-label`      | Highlight button aria-label | `string`  | `'Show Largest Contentful Paint Element'`                                                                                             |
| `highlight`      | `highlight`       | Highlight LCP element       | `boolean` | `false`                                                                                                                               |
| `highlightClass` | `highlight-class` | Highlight element class     | `string`  | `'highlighted'`                                                                                                                       |
| `highlightLabel` | `highlight-label` | Highlight element label     | `string`  | `'?'`                                                                                                                                 |
| `info`           | `info`            | Title                       | `string`  | `'The Largest Contentful Paint is calculated based on the startTime property of the last entry in the PerformanceObserverEntryList.'` |
| `label`          | `label`           | Label                       | `string`  | `'Largest Contentful Paint'`                                                                                                          |
| `popoverText`    | `popover-text`    | Popover text                | `string`  | `'Click to highlight the largest contentful paint element'`                                                                           |


#### Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"button"`    |             |
| `"container"` |             |
| `"label"`     |             |
| `"popover"`   |             |
| `"value"`     |             |



### Number of requests

Shows the number of requests made by the page. This metric can be used to assess the performance and sustainability of a website, as a higher number of requests can lead to slower load times and increased energy consumption.

to use the WebComponent include the javascript file `packages/sustainability_monitor/Resources/Public/JavaScript/sm-number-of-requests.js`

````html
  <sm-number-of-requests 
    label="Number of Requests"
  ></sm-number-of-requests>
````

#### Properties

| Property | Attribute | Description | Type     | Default                                                                                                                                          |
| -------- | --------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `info`   | `info`    | Title       | `string` | `'The number of requests is calculated based on the number of entries in the PerformanceObserverEntryList for resource and navigation entries.'` |
| `label`  | `label`   | Label       | `string` | `'Number of Requests'`                                                                                                                           |

#### Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"container"` |             |
| `"label"`     |             |
| `"value"`     |             |