/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import SelectBase from '../../../select';
import { CustomInputBase, CustomInputLabel } from './selectInputBase';

const useStyles = makeStyles(({
  root: {
    marginTop: '-29px',
    marginLeft: '8px',
  },
}));

const Select = ({
  value, setValue, disabled, className, ...other
}) => {
  const classes = useStyles();
  return (
    <SelectBase
      {...other}
      value={value}
      CustomInput={CustomInputBase}
      InputLabel={CustomInputLabel}
      onSelect={setValue}
      disabled={disabled}
      className={`${classes.root} ${className}`}
    />
  );
};

Select.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Select.defaultProps = {
  value: null,
  setValue: () => {},
  disabled: false,
  className: '',
};

export default Select;
