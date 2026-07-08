import { React } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Checkbox, MenuItem, Typography,
} from '@mui/material';
import { ItemBox, MenuItemStyle } from '../menuItemContent/menuItemContent.style';

const MenuItemSelectAll = ({
  onClick, checked, hideCheckbox, text, itemHeight,
}) => (
  <MenuItem
    key="select-all"
    onClick={onClick}
    sx={{
      height: itemHeight,
      ...MenuItemStyle,
    }}
  >
    <Box sx={ItemBox(checked)}>
      {!hideCheckbox && (
      <Checkbox
        checked={checked}
        color="primary500"
        sx={{
          transform: 'scale(0.75)',
        }}
      />
      )}
      <Typography component="span" variant="14_regular" lineHeight="24px">{text}</Typography>
    </Box>
  </MenuItem>
);

MenuItemSelectAll.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  hideCheckbox: PropTypes.bool,
  text: PropTypes.string.isRequired,
  itemHeight: PropTypes.number,
};

MenuItemSelectAll.defaultProps = {
  onClick: () => {},
  checked: false,
  hideCheckbox: false,
  itemHeight: 40,
};

export default MenuItemSelectAll;
