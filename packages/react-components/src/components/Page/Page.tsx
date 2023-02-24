import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { makeStyles, Theme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { BasicTheme } from '../../styles/theme';
import { StyleVariables } from '../../styles/variables';

interface PageProps {
  /** An optional className you can provide to override styles */
  className?: string;
  /** A custom theme to apply to your page. By default Basic theme is applied. */
  theme?: Theme;
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    margin: '0 auto',
    padding: '1rem',
    fontFamily: StyleVariables.fonts.family.primary,
    fontSize: StyleVariables.fonts.size.regular,
    lineHeight: StyleVariables.fonts.lineHeight.regular,
    minHeight: '100vh',
    [theme.breakpoints.only('xs')]: {
      padding: '1rem 0',
    },
  },
}));

export default function Page({
  className,
  theme = BasicTheme,
  children,
}: PageProps): JSX.Element {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={clsx(classes.page, className)} maxWidth={false}>
        {children}
      </Container>
    </ThemeProvider>
  );
}
