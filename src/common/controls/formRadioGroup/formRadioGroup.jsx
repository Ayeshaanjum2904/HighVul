import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  FormControlLabel,
  Radio, RadioGroup, Stack, Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { RadioGroupStyle } from './formRadioGroup.style';

const FormRadioGroup = ({
  fieldName, control, required, width, label, disabled, defaultValue, options, row, hideErrorText,
}) => (
  <Controller
    name={fieldName}
    control={control}
    rules={{ required }}
    shouldUnregister
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }) => (
      <Stack width={width} rowGap="8px">
        {label && (<Typography variant="12_regular" lineHeight="16px">{label}</Typography>)}
        <RadioGroup
          {...field}
          row={row}
          sx={RadioGroupStyle(error)}
        >
          {options?.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option?.value}
              control={<Radio size="small" color="primary600" sx={{ padding: '6px', margin: '3px' }} />}
              label={<Typography variant="14_regular">{option?.text}</Typography>}
              disabled={disabled}
            />
          ))}
        </RadioGroup>
        {!hideErrorText && (error
          ? <Typography variant="12_regular" lineHeight="16px" color="error300.light">Selecione um tipo</Typography>
          : <Box height={16} />
        )}
      </Stack>
    )}
  />
);

FormRadioGroup.propTypes = {
  fieldName: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.string,
    }),
  ),
  row: PropTypes.bool,
  hideErrorText: PropTypes.bool,
};

FormRadioGroup.defaultProps = {
  width: 400,
  label: '',
  required: false,
  disabled: false,
  defaultValue: '',
  options: [],
  row: false,
  hideErrorText: false,
};

export default FormRadioGroup;
