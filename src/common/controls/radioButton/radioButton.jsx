import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RadioSelectedIcon from 'assets/icons/radio-selected';
import RadioNoSelectedIcon from 'assets/icons/radio-no-selected';
import RadioSelectedDisabledIcon from 'assets/icons/radio-selected-disabled';
// passar pro mui 5
const RadioButton = ({
  disabled, label, value,
}) => {
  const StyledRadioButton = withStyles({
    root: {
      color: '#555770',
      padding: '0 5px',
    },
  })(Radio);

  return (
    <FormControlLabel
      value={value}
      control={(
        <StyledRadioButton
          icon={<RadioNoSelectedIcon />}
          checkedIcon={disabled ? <RadioSelectedDisabledIcon /> : <RadioSelectedIcon />}
        />
          )}
      label={label}
      style={{
        color: '#7A7C9A',
        margin: 0,
      }}
      disabled={disabled}
    />
  );
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
};

RadioButton.defaultProps = {
  disabled: false,
  label: '',
  value: '',
};
export default RadioButton;
