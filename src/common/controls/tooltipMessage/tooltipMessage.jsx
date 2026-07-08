import React from 'react';
import PropTypes from 'prop-types';
import TooltipMessageStyle from './tooltipMessage.styles';

const TooltipMessage = ({
  maxWidth, title, children, placement,
}) => (
  <TooltipMessageStyle
    maxWidth={maxWidth}
    title={title}
    placement={placement}
    arrow
    className="arrow"
  >
    {children}
  </TooltipMessageStyle>
);

TooltipMessage.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  placement: PropTypes.string,
  maxWidth: PropTypes.string,
};

TooltipMessage.defaultProps = {
  children: {},
  title: '',
  placement: 'bottom',
  maxWidth: '220px',
};
export default TooltipMessage;
