import React from 'react';
import PropTypes from 'prop-types';

import colors from 'assets/styles/colors';
import TooltipMessage from '../tooltipMessage';
import { CustomIconButton } from './iconButtonTooltip.style';

export const IconButtonTooltip = ({
  children, tooltip, onClick, size, padding, borderRadius, placement,
  isActive, color, maxWidth, sx, background, hoverBackground, activeBackground,
}) => (
  <TooltipMessage title={tooltip} placement={placement} maxWidth={maxWidth}>
    <CustomIconButton
      onClick={onClick}
      $fontSize={size}
      $padding={padding}
      $borderRadius={borderRadius}
      $isActive={isActive}
      $color={color}
      $background={background}
      $hoverBackground={hoverBackground}
      $activeBackground={activeBackground}
      sx={sx}
    >
      {children}
    </CustomIconButton>
  </TooltipMessage>
);

IconButtonTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placement: PropTypes.string,
  isActive: PropTypes.bool,
  color: PropTypes.string,
  maxWidth: PropTypes.string,
  sx: PropTypes.object,
  background: PropTypes.string,
  hoverBackground: PropTypes.string,
  activeBackground: PropTypes.string,
};

IconButtonTooltip.defaultProps = {
  onClick: () => {},
  tooltip: null,
  size: 16,
  padding: 2,
  borderRadius: 4,
  placement: undefined,
  isActive: false,
  color: '#757575',
  maxWidth: undefined,
  sx: {},
  background: colors.secundary_color_100,
  hoverBackground: colors.secundary_color_100_56,
  activeBackground: colors.secundary_color_100,
};
