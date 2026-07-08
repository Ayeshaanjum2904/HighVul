import { React } from 'react';
import PropTypes from 'prop-types';
import {
  Box, MenuItem, Stack, Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
  MenuItemStyle, StackStyle, TextBoxStyle, TypographyStyle,
} from './menuItemCreate.style';

const MenuItemCreate = ({
  width, itemName, onClick, dictionary, itemHeight,
}) => (
  <MenuItem sx={{ width: width - 16, ...MenuItemStyle }} onClick={onClick}>
    <Stack height={itemHeight} direction="row" sx={StackStyle}>
      <AddRoundedIcon />
      <Typography variant="14_regular" sx={TypographyStyle}>
        {`${dictionary?.createText} `}
        <Box sx={TextBoxStyle} title={itemName}>
          {`${itemName}`}
        </Box>
      </Typography>
    </Stack>
  </MenuItem>
);

MenuItemCreate.propTypes = {
  width: PropTypes.number.isRequired,
  itemName: PropTypes.string,
  onClick: PropTypes.func,
  dictionary: PropTypes.object.isRequired,
  itemHeight: PropTypes.number,
};

MenuItemCreate.defaultProps = {
  itemName: '',
  onClick: () => {},
  itemHeight: 40,
};

export default MenuItemCreate;
