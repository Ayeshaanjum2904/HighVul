import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const LoadingContainer = ({ children }) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }}
  >
    {children}
  </Box>
);

export default LoadingContainer;

LoadingContainer.propTypes = {
  children: PropTypes.node,
};

LoadingContainer.defaultProps = {
  children: null,
};
