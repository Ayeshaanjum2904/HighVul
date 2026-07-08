import { React } from 'react';
import PropTypes from 'prop-types';

import {
  Box, Checkbox, FormControlLabel,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import colors from 'assets/styles/colors';

const EnviarParaDealer = ({ control, warningDealer, setWarningDealer }) => (
  <Box width="130px" height="38px" alignSelf="flex-end" alignContent="center">
    <FormControlLabel
      sx={{
        '& .MuiFormControlLabel-label': {
          fontSize: '12px',
          lineHeight: '20px',
          fontWeight: 450,
          color: warningDealer ? colors.alert_color_200 : colors.secundary_color_700,
        },
        margin: 0,
        gap: '4px',
      }}
      control={(
        <Controller
          name="enviarParaDealer"
          control={control}
          render={({ field, formState }) => (
            <Checkbox
              {...field}
              onChange={(e) => { if (warningDealer) setWarningDealer(false); field?.onChange(e); }}
              size="small"
              color={warningDealer ? 'alert200' : 'primary500'}
              sx={{ padding: 0 }}
              disabled={formState.isSubmitting}
            />
          )}
        />
      )}
      label="Enviar para dealer"
    />
  </Box>
);

EnviarParaDealer.propTypes = {
  control: PropTypes.object.isRequired,
  warningDealer: PropTypes.bool,
  setWarningDealer: PropTypes.func,
};

EnviarParaDealer.defaultProps = {
  warningDealer: false,
  setWarningDealer: () => {},
};

export default EnviarParaDealer;
