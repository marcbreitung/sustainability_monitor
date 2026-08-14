import { Component, Host, Prop, State, h } from '@stencil/core';

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
   * Highlight element label
   */
  @Prop() highlightElementLabel: string = '?';

  /**
   * Highlight element class
   */
  @Prop() highlightElementClass: string = 'highlighted';

  /**
   * Aria label for the highlight button
   */
  @Prop() ariaLabel: string = 'Show Largest Contentful Paint Element';

  /**
   * Highlight LCP element
   */
  @Prop() highlight: boolean = false;

  /**
   * Popover text
   */
  @Prop() popoverText: string = 'Click to highlight the largest contentful paint element';

  /**
   * Largest Contentful Paint value
   */
  @State() lcp: number | null = null;

  /**
   * Highlighted element
   */
  @State() highlightElement?: Element | null = null;

  /**
   * Popover element
   */
  popover!: HTMLDivElement;

  componentDidRender() {
    console.log('componentDidRender');
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element | null };
      if (!lastEntry) {
        return;
      }
      this.lcp = lastEntry.startTime;
      if (this.highlight && lastEntry.startTime) {
        this.highlightElement = lastEntry.element;
      }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  }

  highlightElementHandler(_event: Event) {
    if (this.highlightElement) {
      this.highlightElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.highlightElement.classList.add(this.highlightElementClass);
      setTimeout(() => {
        this.highlightElement?.classList.remove(this.highlightElementClass);
      }, 2000);
    }
  }

  render() {
    return (
      <Host>
        <div class="lcp-container">
          {this.lcp !== null && <div class="value">{this.lcp.toFixed(2)} ms</div>}
          {this.label && <div class="label">{this.label}</div>}
          {this.highlightElement && <button
            popoverTarget="auto"
            class="highlight-button"
            aria-label={this.ariaLabel}
            onMouseEnter={() => this.popover.showPopover()}
            onMouseLeave={() => this.popover.hidePopover()}
            onClick={event => this.highlightElementHandler(event)}>{this.highlightElementLabel}
          </button>}
          <div popover="auto" class="popover" ref={el => this.popover = el as HTMLDivElement}>
            {this.popoverText}
          </div>
        </div>
      </Host>
    );
  }
}