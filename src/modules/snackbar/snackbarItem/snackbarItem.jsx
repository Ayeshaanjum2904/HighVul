import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { SnackbarItemContainer, SnackbarText, snackbarTypes } from './snackbarItem.style';

const SnackbarItem = ({
  id, type, message, delay, onClose,
}) => {
  useEffect(() => {
    let timeout;
    if (delay) {
      timeout = setTimeout(() => onClose(id), delay);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const snackbar = snackbarTypes[type];

  return (
    <SnackbarItemContainer color={snackbar?.color} onClick={() => onClose(id)} role="button" tabIndex="0">
      {snackbar?.icon}
      <SnackbarText>{message}</SnackbarText>
    </SnackbarItemContainer>
  );
};

SnackbarItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['error', 'success', 'info']),
  message: PropTypes.string.isRequired,
  delay: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

SnackbarItem.defaultProps = {
  type: 'error',
  delay: 7000,
};

export default SnackbarItem;
