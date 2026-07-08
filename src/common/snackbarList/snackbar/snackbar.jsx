import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '../../../assets/icons/error-outline';
import CheckCircleFilledIcon from '../../../assets/icons/check-circle-filled';

import './snackbar.scss';

const Snackbar = (
  {
    onClose, message, id, time, type,
  },
) => {
  useEffect(() => {
    let timeout;
    if (time && time > 0) {
      timeout = setTimeout(() => onClose(id), time);
    }
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="snackbar-items__container">
      {
    type === 'success'
      ? (
        <div className="snackbar-succes__item-container" onClick={() => onClose(id)} role="button" tabIndex="0">
          <div className="snackbar__content-block">
            <CheckCircleFilledIcon className="snackbar-succes__image" />
            <span className="snackbar__text">{message}</span>
          </div>
        </div>
      ) : (
        <div className="snackbar-error__item-container" onClick={() => onClose(id)} role="button" tabIndex="0">
          <div className="snackbar__content-block">
            <ErrorOutlineIcon className="snackbar-error__image" />
            <span className="snackbar__text">{message}</span>
          </div>
        </div>
      )
  }

    </div>
  );
};

Snackbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  time: PropTypes.number,
};

Snackbar.defaultProps = {
  time: null,
  type: 'error',
};

export default Snackbar;
