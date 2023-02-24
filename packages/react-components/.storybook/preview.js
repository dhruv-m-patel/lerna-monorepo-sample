import React from 'react';
import Page from '../src/components/Page';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Page>
      <Story />
    </Page>
  ),
];
