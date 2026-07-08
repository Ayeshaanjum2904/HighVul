import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import CloseIcon from 'assets/icons/x';

import './closeModalButton.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cursor: {
    cursor: (props) => (props.disabled ? 'default' : 'pointer'),
  },
});

const CloseModalButton = ({
  isLoading, disabled, onClick, color,
}) => {
  const classes = useStyles({ disabled });
  return (
    <button
      className={`common__close-modal__button ${classes.cursor}`}
      type="button"
      disabled={disabled || isLoading}
      onClick={onClick}
      data-cy="ModalCloseButton"
    >
      {isLoading ? (
        <div className="common__close-modal__button-loading">
          <CircularProgress className="common__close-modal__button-loading" color="inherit" size="18px" />
        </div>
      ) : (
        <div
          className="common__close-modal__button-content"
          data-cy="common__close-modal__button"
        >
          <CloseIcon className="common__close-modal__close-icon" color={color || null} />
        </div>
      )}
    </button>
  );
};

CloseModalButton.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

CloseModalButton.defaultProps = {
  isLoading: false,
  disabled: false,
  onClick: () => {},
  color: null,
};

export default CloseModalButton;
