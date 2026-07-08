import React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme,
  MuiThemeProvider,
} from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: ['CircularStd'],
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 450,
        fontSize: '12px',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        padding: '8px 12px',
        maxWidth: '200px',
      },
    },
  },
});

const Themes = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    { children }
  </MuiThemeProvider>
);

Themes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Themes;
