import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MuiCheckbox } from '@mui/material';
import CheckBoxOutlineIcon from 'assets/icons/check-box-outline';
import CheckBoxIcon from 'assets/icons/check-box';

const Checkbox = ({
  onClick, checked, scale, ...rest
}) => (
  <MuiCheckbox
    icon={<CheckBoxOutlineIcon />}
    checkedIcon={<CheckBoxIcon />}
    onClick={onClick}
    checked={checked}
    style={{
      transform: `scale(${scale})`,
    }}
    {...rest}
  />
);

Checkbox.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  scale: PropTypes.number,
};

Checkbox.defaultProps = {
  onClick: () => {},
  checked: false,
  scale: 1,
};

export default Checkbox;
