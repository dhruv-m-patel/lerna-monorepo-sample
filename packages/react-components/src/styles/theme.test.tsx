import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import { BasicTheme } from './theme';
import '@testing-library/jest-dom';

describe('theme', () => {
  test('it provides basic theme correctly', () => {
    const { container } = render(
      <ThemeProvider theme={BasicTheme}>
        <Typography variant="h1">Hello World</Typography>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
