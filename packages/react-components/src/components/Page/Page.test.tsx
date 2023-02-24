import React from 'react';
import { render, screen } from '@testing-library/react';
import { createTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Page from './Page';
import { StyleVariables } from '../../styles/variables';

describe('Page', () => {
  test('it renders with default theme', () => {
    render(
      <Page>
        <Typography variant="h1">Hello World</Typography>
      </Page>
    );

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });

  test('it renders with given theme', () => {
    const customTheme = createTheme({
      palette: {
        type: 'dark',
        primary: {
          main: StyleVariables.colors.blue,
          contrastText: StyleVariables.colors.darkGrey,
        },
      },
    });

    render(
      <Page theme={customTheme}>
        <Typography variant="h1">Hello World</Typography>
      </Page>
    );

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
