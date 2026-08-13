import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sustainability-monitor',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      dir: './../../Resources/Public/JavaScript',
    },
    {
      type: 'docs-readme',
    },
  ],
};
