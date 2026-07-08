import React from 'react';
import PropTypes from 'prop-types';

import colors from 'assets/styles/colors';
import { Tooltip } from '@mui/material';
import { CustomInfoIcon } from './infoIconTooltip.style';

export const InfoIconTooltip = ({
  title, margin, maxWidth, color, fontSize, fontWeight, backgroundColor, placement,
}) => (
  <Tooltip
    title={title}
    arrow
    placement={placement}
    componentsProps={{
      tooltip: {
        sx: {
          maxWidth,
          backgroundColor,
          fontSize,
          fontWeight,
          padding: '8px',
          textAlign: 'center',
          fontStyle: 'normal',
          lineHeight: '16.5px',
        },
      },
      arrow: { sx: { color: backgroundColor } },
    }}
  >
    <CustomInfoIcon $margin={margin} $iconColor={color} />
  </Tooltip>
);

InfoIconTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  placement: PropTypes.string,
};

InfoIconTooltip.defaultProps = {
  margin: '0px 3px',
  maxWidth: '220px',
  color: colors.icon_color,
  backgroundColor: colors.tooltip,
  fontSize: '14px',
  fontWeight: 700,
  placement: 'bottom',
};
