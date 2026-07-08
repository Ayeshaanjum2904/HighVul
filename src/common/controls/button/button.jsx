import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Mixpanel } from 'modules';

import './button.scss';

const selectColorClass = (color) => {
  switch (color) {
    case 'gray':
      return 'common__btn__gray';
    case 'new-gray':
      return 'common__btn__new-grey';
    case 'dark_gray_border':
      return 'common__btn__dark_gray_border';
    case 'dark_green':
      return 'common__btn__dark_green';
    case 'dark_blue_border':
      return 'common__btn__dark_blue_border';
    default:
      return 'common__btn__new-blue';
  }
};

const Button = ({
  className, onClick, fullWidth, disabled, dataCy,
  children, isLoading, color, mixpanelTarget, mixpanelPage,
}) => (
  <button
    className={
      `common__btn
      ${selectColorClass(color)}
      ${fullWidth ? 'common__btn--full-width' : ''}
      ${className}`
    }
    type="button"
    disabled={disabled || isLoading}
    onClick={() => {
      Mixpanel.trackButtonClick(mixpanelTarget, mixpanelPage);
      onClick();
    }}
    data-cy={dataCy}
  >
    <div className={
        `common__btn__content
        ${isLoading ? 'common__btn__content--loading' : ''}`
      }
    >
      {children}
    </div>

    {isLoading ? (
      <div className="common__btn__loading">
        <div>
          <CircularProgress className="common__btn__loading" color="inherit" size="18px" />
        </div>
      </div>
    ) : null}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  mixpanelTarget: PropTypes.string,
  mixpanelPage: PropTypes.string,
  dataCy: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick: null,
  children: null,
  disabled: false,
  color: '',
  isLoading: false,
  fullWidth: false,
  mixpanelTarget: null,
  mixpanelPage: null,
  dataCy: '',
};

export default Button;
