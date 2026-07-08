import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from '@mui/icons-material/Error';
import './duplicateWarningMessage.scss';

const DuplicateWarningMessage = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="duplicate-warning-message">
      <div className="duplicate-warning-message__content">
        <ErrorIcon className="duplicate-warning-message__icon" />
        <span className="duplicate-warning-message__text">
          {message}
        </span>
      </div>
    </div>
  );
};

DuplicateWarningMessage.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
};

DuplicateWarningMessage.defaultProps = {
  show: false,
  message: 'Edite qualquer dado para duplicar essa condição.',
};

export default DuplicateWarningMessage;
