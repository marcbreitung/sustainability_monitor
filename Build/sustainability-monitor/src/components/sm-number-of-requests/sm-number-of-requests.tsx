import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sm-number-of-requests',
  styleUrl: 'sm-number-of-requests.css',
  shadow: true,
})
export class SmNumberOfRequests {
  /**
   * Label
   */
  @Prop() label: string = 'Number of Requests';

  /**
   * Number of requests
   */
  @State() numberOfRequests: number = 0;

  /**
   * Whether to calculate number of requests or not
   */
  @State() isReady: boolean = false;

  /**
   * Calculates the number of resource requests
   */
  private requestsObserver?: PerformanceObserver;

  /**
   * Calculates the number of navigation requests
   */
  private navigationObserver?: PerformanceObserver;

  /**
   * Calculates the number of resource requests
   * @param list 
   */
  calculateNumberOfRequests(list: PerformanceObserverEntryList) {
    this.numberOfRequests += list.getEntries().length;
    this.isReady = true;
  }

  /**
   * The actual document is not part of the resource timing API, so we need to use a navigation observer to get the number of requests for the document itself.
   * @param list 
   */
  calculateNavigationRequests(list: PerformanceObserverEntryList) {
    this.numberOfRequests += list.getEntries().length;
    this.isReady = true;
  }

  componentDidLoad() {
    if (typeof PerformanceObserver === 'undefined' || this.requestsObserver) {
      console.error('PerformanceObserver is not supported in this browser.');
      return;
    }
    this.requestsObserver = new PerformanceObserver((list) => this.calculateNumberOfRequests(list));
    this.requestsObserver.observe({ type: 'resource', buffered: true });
    this.navigationObserver = new PerformanceObserver((list) => this.calculateNavigationRequests(list));
    this.navigationObserver.observe({ type: 'navigation', buffered: true });
  }

  render() {
    return (
      <Host>
        <div class={{ 'container': true, 'loading': !this.isReady, 'ready': this.isReady }} part="container">
          <div class="value" part="value">{this.numberOfRequests}</div>
          {this.label && <div class="label" part="label">{this.label}</div>}
        </div>
      </Host >
    );
  }
}