import React from 'react';
import PropTypes from 'prop-types';

import SnackbarItem from './snackbarItem/snackbarItem';

import { SnackbarContainer } from './snackbar.style';

const Snackbar = ({ snackbarList, onClose }) => (
  <SnackbarContainer>
    {(snackbarList || []).map((item) => (
      <SnackbarItem
        key={item?.id}
        id={item?.id}
        type={item?.type}
        message={item?.message}
        delay={item?.delay}
        onClose={onClose}
      />
    ))}
  </SnackbarContainer>
);
Snackbar.propTypes = {
  snackbarList: PropTypes.array,
  onClose: PropTypes.func,
};

Snackbar.defaultProps = {
  snackbarList: [],
  onClose: () => {},
};

export default Snackbar;
