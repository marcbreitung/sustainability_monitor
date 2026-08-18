import { Component, Host, Prop, State, h } from '@stencil/core';
// import { co2 } from '@tgwf/co2';
import { calculateEmission, calculateSizeOfData, formatGram } from '../../utils/sm-utils';

@Component({
  tag: 'sm-co2-emission',
  styleUrl: 'sm-co2-emission.css',
  shadow: true,
})
export class SmCo2Emission {
  /**
   * Label
   */
  @Prop() label: string = 'Co2 Emission';

  /**
   * Number of requests
   */
  @State() co2emission: string = "";

  /**
   * Locale
   */
  @Prop() locale: string = 'de-DE'

  /**
   * Whether to calculate number of requests or not
   */
  @State() isReady: boolean = false;

  /**
   * Title
   */
  @Prop() info: string = 'The Co2 emission is calculated based on the transfered size.';

  componentWillLoad() {
    this.co2emission = formatGram(0, this.locale);
  }

  componentDidLoad() {
    calculateSizeOfData()
      .then(data => Promise.resolve(calculateEmission(data.transfered)))
      .then(data => Promise.resolve(formatGram(data, this.locale)))
      .then(data => {
        this.isReady = true;
        this.co2emission = data;
      });
  }

  render() {
    return (
      <Host>
        <div class={{ 'container': true, 'loading': !this.isReady, 'ready': this.isReady }} part="container">
          <div class="value" part="value">{this.co2emission}</div>
          {this.label && <div class="label" part="label">
            {this.info ? <span class="info" title={this.info}>{this.label}</span> : <span>{this.label}</span>}
          </div>}
        </div>
      </Host >
    );
  }
}