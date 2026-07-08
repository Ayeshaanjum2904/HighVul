import React from 'react';
import PropTypes from 'prop-types';
import { useRadioGroup, Radio, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from 'assets/styles/colors';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ checked }) => ({
    '& .MuiFormControlLabel-label': {
      color: checked ? colors.secundary_color_700 : colors.secundary_color_600,
      fontSize: '12px',
      fontWeight: '450',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '4px',
    },
    '& .MuiButtonBase-root': {
      width: '20px',
      height: '20px',
    },
  }),
);

const RadioControlButton = ({
  disabled, label, value,
}) => {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return (
    <StyledFormControlLabel
      value={value}
      control={(
        <Radio
          size="small"
          sx={{
            '&.Mui-checked': {
              color: colors.primary_color_600,
            },
          }}
        />
          )}
      checked={checked}
      label={label}
      style={{
        margin: 0,
      }}
      disabled={disabled}
    />
  );
};

RadioControlButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
};

RadioControlButton.defaultProps = {
  disabled: false,
  label: '',
  value: '',
};
export default RadioControlButton;
