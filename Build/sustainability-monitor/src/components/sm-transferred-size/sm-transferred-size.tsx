import { Component, Host, Prop, State, h } from '@stencil/core';
import { calculateSizeOfData, formatSize } from '../../utils/sm-utils';

@Component({
  tag: 'sm-transferred-size',
  styleUrl: 'sm-transferred-size.css',
  shadow: true,
})
export class TransferredSize {
  /**
   * Label
   */
  @Prop() label: string = 'Transferred Size';

  /**
   * Locale
   */
  @Prop() locale: string = 'de-DE'

  /**
   * Title
   */
  @Prop() info: string = 'The Transferred Size.';

  /**
   * Number of requests
   */
  @State() transferredSize: string = "";

  /**
   * Whether to calculate number of requests or not
   */
  @State() isReady: boolean = false;

  componentWillLoad() {
    this.transferredSize = formatSize(0, this.locale);
  }

  componentDidLoad() {
    calculateSizeOfData()
      .then(data => Promise.resolve(formatSize(data.transfered, this.locale)))
      .then(data => {
        this.isReady = true;
        this.transferredSize = data;
      });
  }

  render() {
    return (
      <Host>
        <div class={{ 'container': true, 'loading': !this.isReady, 'ready': this.isReady }} part="container">
          <div class="value" part="value">{this.transferredSize}</div>
          {this.label && <div class="label" part="label">
            {this.info ? <span class="info" title={this.info}>{this.label}</span> : <span>{this.label}</span>}
          </div>}
        </div>
      </Host >
    );
  }
}