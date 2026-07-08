import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Checkbox, MenuItem, Typography,
} from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import { ItemBox, MenuItemStyle } from './menuItemContent.style';

const MenuItemContent = ({
  item, style, checked, hideCheckbox, handleChange, handleDelete, disableDelete,
}) => {
  const [displayDelete, setDisplayDelete] = useState(false);
  return (
    <MenuItem
      key={item}
      value={item?.value}
      style={style}
      sx={MenuItemStyle}
      onClick={() => handleChange(item, checked)}
      disableRipple
    >
      <Box
        sx={ItemBox(checked)}
        onMouseEnter={() => { if (!disableDelete) setDisplayDelete(true); }}
        onMouseLeave={() => { if (!disableDelete) setDisplayDelete(false); }}
      >
        {!hideCheckbox && (
        <Checkbox
          checked={checked}
          color="primary500"
          sx={{
            transform: 'scale(0.75)',
          }}
        />
        )}
        <Typography
          variant="14_regular"
          lineHeight="24px"
          sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
          title={item?.text}
        >
          {item?.text}
        </Typography>
        {(!disableDelete && displayDelete) && (
          <IconButtonTooltip
            onClick={(e) => handleDelete(e, item?.value)}
            size={20}
            sx={{ marginLeft: 'auto' }}
            tooltip="Excluir"
          >
            <DeleteRoundedIcon />
          </IconButtonTooltip>
        )}
      </Box>
    </MenuItem>
  );
};

MenuItemContent.propTypes = {
  item: PropTypes.object,
  style: PropTypes.any,
  checked: PropTypes.bool,
  hideCheckbox: PropTypes.bool,
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  disableDelete: PropTypes.bool,
};

MenuItemContent.defaultProps = {
  item: null,
  style: null,
  checked: false,
  hideCheckbox: false,
  handleChange: () => {},
  handleDelete: () => {},
  disableDelete: false,
};

export default MenuItemContent;
