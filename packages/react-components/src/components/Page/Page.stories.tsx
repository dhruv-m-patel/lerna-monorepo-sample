import React from 'react';
import { createTheme, Typography } from '@material-ui/core';
import Page from './Page';
import { StyleVariables } from '../../styles/variables';

export default {
  title: 'Components/Page',
  component: Page,
};

export const withDefaultTheme = () => (
  <Page>
    <Typography variant="h1" color="primary">
      Page Component
    </Typography>
    <br />
    <br />
    <Typography component="p" variant="subtitle2" color="secondary">
      This story shows you example of the page component rendered with default
      Basic theme
    </Typography>
  </Page>
);

export const withCustomTheme = () => (
  <Page
    theme={createTheme({
      palette: {
        type: 'light',
        primary: {
          main: '#000',
          contrastText: '#ddd',
        },
        secondary: {
          main: '#333',
          contrastText: '#494949',
        },
      },
      typography: {
        h1: {
          fontFamily: StyleVariables.fonts.family.primary,
          fontSize: '52px',
        },
        h2: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        h3: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        h4: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        h5: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        h6: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        overline: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        body1: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        body2: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        subtitle1: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
        subtitle2: {
          fontFamily: StyleVariables.fonts.family.primary,
        },
      },
    })}
  >
    <Typography variant="h1" color="secondary">
      Page Component
    </Typography>
    <br />
    <br />
    <Typography variant="subtitle2" color="primary">
      This story shows you example of the page component rendered with a custom
      theme
    </Typography>
  </Page>
);
