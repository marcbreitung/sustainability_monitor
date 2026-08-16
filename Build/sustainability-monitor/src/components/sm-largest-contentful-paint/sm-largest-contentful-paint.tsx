import { Component, Host, Prop, State, h } from '@stencil/core';
import { formatTime } from '../../utils/sm-utils';

@Component({
  tag: 'sm-largest-contentful-paint',
  styleUrl: 'sm-largest-contentful-paint.css',
  shadow: true,
})
export class SmLargestContentfulPaint {
  /**
   * Label
   */
  @Prop() label: string = 'Largest Contentful Paint';

  /**
   * Highlight LCP element
   */
  @Prop() highlight: boolean = false;

  /**
   * Highlight element label
   */
  @Prop() highlightLabel: string = '?';

  /**
   * Highlight element class
   */
  @Prop() highlightClass: string = 'highlighted';

  /**
   * Highlight button aria-label
   */
  @Prop() ariaLabel: string = 'Show Largest Contentful Paint Element';

  /**
   * Popover text
   */
  @Prop() popoverText: string = 'Click to highlight the largest contentful paint element';

  /**
   * Title
   */
  @Prop() info: string = 'The Largest Contentful Paint is calculated based on the startTime property of the last entry in the PerformanceObserverEntryList.';

  /**
   * Largest Contentful Paint value
   */
  @State() lcp: number = 0;

  /**
   * Highlighted element
   */
  @State() highlightElement?: Element | null = null;

  /**
   * Whether to calculate LCP or not
   */
  @State() isReady: boolean = false;

  /**
   * Popover element
   */
  private popoverElement!: HTMLDivElement;

  /**
   * Performance observer for LCP
   */
  private performanceObserver?: PerformanceObserver;

  performanceObserverHandler(list: PerformanceObserverEntryList) {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element | null };
    if (!lastEntry) {
      return;
    }
    this.lcp = lastEntry.startTime ?? 0;
    this.isReady = true;
    this.highlightElement = null;
    if (this.highlight && this.lcp > 0 && lastEntry.element) {
      this.highlightElement = lastEntry.element;
    }
  }

  componentDidLoad() {
    if (typeof PerformanceObserver === 'undefined' || this.performanceObserver) {
      console.error('PerformanceObserver is not supported in this browser.');
      return;
    }

    this.performanceObserver = new PerformanceObserver((list) => this.performanceObserverHandler(list));
    this.performanceObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  }

  disconnectedCallback() {
    this.performanceObserver?.disconnect();
  }

  highlightElementHandler(_event: Event) {
    if (this.highlightElement) {
      this.highlightElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.highlightElement.classList.add(this.highlightClass);
      setTimeout(() => {
        this.highlightElement?.classList.remove(this.highlightClass);
      }, 2000);
    }
  }

  render() {
    return (
      <Host>
        <div class={{ 'container': true, 'loading': !this.isReady, 'ready': this.isReady }} part="container">
          <div class="value" part="value">{formatTime(this.lcp)}</div>
          {this.label && <div class="label" part="label">
            {this.info ? <span class="info" title={this.info}>{this.label}</span> : <span>{this.label}</span>}
            {this.highlight && <div><button
              disabled={!this.highlightElement}
              popoverTarget="auto"
              class="button"
              part="button"
              aria-label={this.ariaLabel}
              onMouseEnter={() => this.popoverElement.showPopover()}
              onMouseLeave={() => this.popoverElement.hidePopover()}
              onFocus={() => this.popoverElement.showPopover()}
              onBlur={() => this.popoverElement.hidePopover()}
              onClick={event => this.highlightElementHandler(event)}>
              {this.highlightLabel}
            </button>
              <div popover="auto" class="popover" part="popover" ref={el => this.popoverElement = el as HTMLDivElement}>
                {this.popoverText}
              </div>
            </div>}
          </div>}
        </div>
      </Host>
    );
  }
}