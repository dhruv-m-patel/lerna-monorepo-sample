import { ThemeOptions } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { StyleVariables } from './variables';

export const theme: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: StyleVariables.colors.blue,
      contrastText: StyleVariables.colors.white,
    },
  },
  typography: {
    h1: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.bold,
      fontSize: StyleVariables.fonts.size.h1,
      lineHeight: StyleVariables.fonts.lineHeight.h1,
    },
    h2: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.medium,
      fontSize: StyleVariables.fonts.size.h2,
      lineHeight: StyleVariables.fonts.lineHeight.h2,
    },
    h3: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.regular,
      fontSize: StyleVariables.fonts.size.h3,
      lineHeight: StyleVariables.fonts.lineHeight.h3,
    },
    h4: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.regular,
      fontSize: StyleVariables.fonts.size.h4,
      lineHeight: StyleVariables.fonts.lineHeight.h4,
    },
    h5: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.regular,
      fontSize: StyleVariables.fonts.size.h5,
      lineHeight: StyleVariables.fonts.lineHeight.h5,
    },
    h6: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.regular,
      fontSize: StyleVariables.fonts.size.h6,
      lineHeight: StyleVariables.fonts.lineHeight.h6,
    },
    overline: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontWeight: StyleVariables.fonts.weight.medium,
      fontSize: StyleVariables.fonts.size.regular,
      lineHeight: StyleVariables.fonts.lineHeight.regular,
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontSize: StyleVariables.fonts.size.regular,
      lineHeight: StyleVariables.fonts.lineHeight.regular,
    },
    body2: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontSize: StyleVariables.fonts.size.small,
      lineHeight: StyleVariables.fonts.lineHeight.small,
    },
    subtitle1: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontSize: StyleVariables.fonts.size.smaller,
      lineHeight: StyleVariables.fonts.lineHeight.smaller,
    },
    subtitle2: {
      fontFamily: StyleVariables.fonts.family.primary,
      fontSize: StyleVariables.fonts.size.xs,
      lineHeight: StyleVariables.fonts.lineHeight.xs,
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        fontFamily: StyleVariables.fonts.family.primary,
      },
      sizeSmall: {
        fontSize: StyleVariables.fonts.size.small,
      },
    },
    MuiSelect: {
      select: {
        fontSize: StyleVariables.fonts.size.regular,
        fontFamily: StyleVariables.fonts.family.primary,
      },
      selectMenu: {
        fontSize: StyleVariables.fonts.size.regular,
        fontFamily: StyleVariables.fonts.family.primary,
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: StyleVariables.fonts.size.regular,
        fontFamily: StyleVariables.fonts.family.primary,
      },
    },
    MuiInputBase: {
      input: {
        fontSize: StyleVariables.fonts.size.regular,
        fontFamily: StyleVariables.fonts.family.primary,
      },
      root: {
        fontSize: StyleVariables.fonts.size.regular,
      },
    },
  },
};

const BasicTheme = createTheme(theme);

export { theme as ThemeOptions, BasicTheme };
