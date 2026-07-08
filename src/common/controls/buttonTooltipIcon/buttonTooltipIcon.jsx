import React from 'react';
import PropTypes from 'prop-types';
import TooltipMessage from '../tooltipMessage';

const ButtonTooltipIcon = ({
  children, title, buttonAction, className,
}) => (
  <TooltipMessage title={title}>
    <button type="button" onClick={buttonAction} className={className}>
      {children}
    </button>
  </TooltipMessage>
);

ButtonTooltipIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  buttonAction: PropTypes.func,
};

ButtonTooltipIcon.defaultProps = {
  className: '',
  children: {},
  title: '',
  buttonAction: () => {},
};

export default ButtonTooltipIcon;
