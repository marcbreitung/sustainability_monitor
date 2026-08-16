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
   * Performance observer for LCP
   */
  private performanceObserver?: PerformanceObserver;

  calculateNumberOfRequests(list: PerformanceObserverEntryList) {
    this.numberOfRequests += list.getEntries().length;
    this.isReady = true;
  }

  componentDidLoad() {
    if (typeof PerformanceObserver === 'undefined' || this.performanceObserver) {
      console.error('PerformanceObserver is not supported in this browser.');
      return;
    }

    this.performanceObserver = new PerformanceObserver((list) => this.calculateNumberOfRequests(list));
    this.performanceObserver.observe({ type: 'resource', buffered: true });
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