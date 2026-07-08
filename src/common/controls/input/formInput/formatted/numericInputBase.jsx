/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core';
import _ from 'lodash';

import { StyledTextField, textField as styles } from '../../inputStyles';

const useStyles = makeStyles(styles);

export const NumericInput = ({
  value, setValue, disabled, className, isTaxa, ...other
}) => {
  const classes = useStyles();
  const numberClasses = () => {
    if (!disabled) {
      return classes.numberFormat;
    }
    if (disabled && isTaxa) {
      return classes.disableFormat;
    }
    return '';
  };
  return (
    <NumberFormat
      {...other}
      onValueChange={(event) => {
        setValue(_.isEmpty(event) ? null : event.value);
      }}
      customInput={StyledTextField}
      style={{ width: '100%', color: '#555770' }}
      className={`${numberClasses()} ${className}`}
      value={value !== null && value !== undefined ? value : ''}
      isNumericString
      displayType={disabled ? 'text' : 'input'}
      error={!disabled ? other.error : null}
    />
  );
};

NumericInput.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isTaxa: PropTypes.bool,
};

NumericInput.defaultProps = {
  value: null,
  setValue: () => {},
  disabled: false,
  className: '',
  isTaxa: false,
};

export default NumericInput;
