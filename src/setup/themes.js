import React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme as createThemeV4,
  MuiThemeProvider as MuiThemeProviderV4,
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles';
import { createTheme as createThemeV5, ThemeProvider as MuiThemeProviderV5 } from '@mui/material/styles';

import typography from './typograhy';
import palette from './palette';

const generateClassName = createGenerateClassName({
  // By enabling this option, if you have non-MUI elements (e.g. `<div />`)
  // using MUI classes (e.g. `.MuiButton`) they will lose styles.
  // Make sure to convert them to use `styled()` or `<Box />` first.
  disableGlobal: true,
  // Class names will receive this seed to avoid name collisions.
  // seed: 'mui-4-jss',
});

export const StylesProviderV4 = ({ children }) => (
  <StylesProvider generateClassName={generateClassName}>
    { children }
  </StylesProvider>
);

StylesProviderV4.propTypes = {
  children: PropTypes.node.isRequired,
};

const themeV4 = createThemeV4({
  typography: {
    fontFamily: ['CircularStd'],
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '12px',
      },
    },
  },
});

export const ThemeProviderV4 = ({ children }) => (
  <MuiThemeProviderV4 theme={themeV4}>
    { children }
  </MuiThemeProviderV4>
);

ThemeProviderV4.propTypes = {
  children: PropTypes.node.isRequired,
};

const themeV5 = createThemeV5({
  typography: {
    fontFamily: ['CircularStd'],
    ...typography,
  },
  palette: {
    ...palette,
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '12px',
      },
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '20px',
          padding: '10px 24px',
          '&:active': {
            backgroundColor: ownerState?.variant === 'outlined'
              ? theme.palette[ownerState?.color]?.activeOutlined
              : theme.palette[ownerState?.color]?.active,
          },
        }),
      },
    },
  },
});

export const ThemeProviderV5 = ({ children }) => (
  <MuiThemeProviderV5 theme={themeV5}>
    { children }
  </MuiThemeProviderV5>
);

ThemeProviderV5.propTypes = {
  children: PropTypes.node.isRequired,
};
