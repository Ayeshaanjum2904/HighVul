import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  InputAdornment, Stack, TextField, Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { IMask } from 'react-imask';
import { TextFieldStyle } from './formTextFieldStyle';

const FormTextField = ({
  fieldName,
  control,
  required,
  width,
  label,
  disabled,
  defaultValue,
  placeholder,
  disableDelete,
  maskOptions,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && maskOptions) {
      const mask = IMask(inputRef.current, maskOptions);
      return () => mask.destroy();
    }
    return undefined;
  }, [maskOptions]);

  return (
    <Stack width={width} rowGap="8px">
      {label && (
        <Typography variant="12_regular" lineHeight="16px">
          {label}
        </Typography>
      )}
      <Controller
        name={fieldName}
        control={control}
        rules={{ required }}
        shouldUnregister
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            disabled={disabled}
            size="small"
            autoFocus
            placeholder={placeholder}
            fullWidth
            autoComplete="off"
            inputRef={inputRef}
            sx={TextFieldStyle(Boolean(field.value), Boolean(error))}
            InputProps={{
              endAdornment:
                !disableDelete && !disabled && Boolean(field.value) && (
                  <InputAdornment
                    position="end"
                    sx={{ height: 'auto', margin: 0 }}
                  >
                    <IconButtonTooltip
                      tooltip="Excluir"
                      onClick={() => field.onChange('')}
                    >
                      <ClearRoundedIcon />
                    </IconButtonTooltip>
                  </InputAdornment>
                ),
            }}
          />
        )}
      />
    </Stack>
  );
};

FormTextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  disableDelete: PropTypes.bool,
  maskOptions: PropTypes.object,
};

FormTextField.defaultProps = {
  width: 400,
  label: '',
  required: false,
  disabled: false,
  defaultValue: '',
  placeholder: 'Digite o valor do campo',
  disableDelete: false,
  maskOptions: undefined,
};

export default FormTextField;
