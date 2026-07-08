import React from 'react';
import PropTypes from 'prop-types';
import Popper from '@mui/material/Popper';
import { ClickAwayListener } from '@mui/material';

const PopperComponent = ({
  children, anchorEl, placement, x, y, onClickAway,
}) => (
  <ClickAwayListener onClickAway={onClickAway}>
    <Popper
      open={!!anchorEl}
      anchorEl={anchorEl}
      placement={placement}
      sx={{ zIndex: '2000' }}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [x, y],
          },
        },
      ]}
    >
      {children}
    </Popper>
  </ClickAwayListener>
);

PopperComponent.propTypes = {
  children: PropTypes.element,
  anchorEl: PropTypes.object,
  placement: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  onClickAway: PropTypes.func,
};

PopperComponent.defaultProps = {
  children: {},
  anchorEl: null,
  placement: 'top-end',
  x: 0,
  y: 0,
  onClickAway: () => {},
};

export default PopperComponent;
