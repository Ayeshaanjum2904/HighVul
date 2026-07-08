/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import TextInput from './formatted/text';
import NumberInput from './formatted/number';
import CurrencyInput from './formatted/currency';
import PercentInput from './formatted/percent';
import Select from './formatted/select';

import './formInput.scss';

const useStyles = makeStyles({
  errorContainer: {
    display: (props) => (props.error ? 'block' : 'none'),
    color: 'red !important',
    fontSize: '11px !important',
    marginTop: '1px',
  },
});

const FormInput = ({
  value, setValue, type, disabled, label, errorMessage, className, isTaxa, ...other
}) => {
  const classes = useStyles({ error: (other.error && !disabled) });

  return (
    <div className="common__form-input__container">
      { label ? (
        <div className="common__form-input__container-label">
          {label}
        </div>
      ) : null}
      <div className="common__form-input__container-input">
        {type === 'text' ? (
          <TextInput
            {...other}
            value={value}
            disabled={disabled}
            setValue={setValue}
            className={className}
          />
        ) : null}
        {type === 'number' ? (
          <NumberInput
            {...other}
            disabled={disabled}
            value={value}
            setValue={setValue}
            className={className}
          />
        ) : null}
        {type === 'currency' ? (
          <CurrencyInput
            {...other}
            value={value}
            disabled={disabled}
            setValue={setValue}
            className={className}
          />
        ) : null}
        {type === 'percent' ? (
          <PercentInput
            {...other}
            value={value}
            disabled={disabled}
            setValue={setValue}
            className={className}
            isTaxa={isTaxa}
          />
        ) : null}
        {type === 'select' ? (
          <Select
            {...other}
            value={value}
            disabled={disabled}
            setValue={setValue}
            className={className}
          />
        ) : null}
        <span className={classes.errorContainer}>
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.any,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isTaxa: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};

FormInput.defaultProps = {
  label: '',
  setValue: () => {},
  value: '',
  type: 'text',
  disabled: false,
  isTaxa: false,
  className: '',
  errorMessage: '',
};

export default FormInput;
