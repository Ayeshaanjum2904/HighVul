import { React } from 'react';
import PropTypes from 'prop-types';

import { Box, MenuItem, Select } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Controller } from 'react-hook-form';
import { Styles } from './selecionarPerfil.style';

const SelecionarPerfil = ({
  items, control, error, disabled,
}) => {
  const {
    select, menu, menuItem, itemText,
  } = Styles(error);
  return (
    <Box width={130}>
      <Controller
        name="perfil"
        rules={{ required: true }}
        control={control}
        render={({ field, formState }) => (
          <Select
            {...field}
            disabled={disabled || formState?.isSubmitting || items?.length < 2}
            displayEmpty
            IconComponent={(props) => (<ExpandMoreRoundedIcon viewBox="2.5 2.5 19 19" {...props} />)}
            sx={select}
            renderValue={(value) => (!value
              ? 'Selecionar perfil'
              : `Perfil: ${items.find((item) => item?.value === value)?.text}`)}
            MenuProps={{
              sx: menu,
              MenuListProps: {
                disablePadding: true,
              },
            }}
          >
            {items?.map((item, index) => (
              <MenuItem
                key={index}
                value={item?.value}
                sx={menuItem}
              >
                <Box component="span" width="100%" height="40px" sx={itemText}>{item?.text}</Box>
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </Box>
  );
};

SelecionarPerfil.propTypes = {
  items: PropTypes.array,
  control: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

SelecionarPerfil.defaultProps = {
  items: [],
  error: false,
  disabled: false,
};

export default SelecionarPerfil;
