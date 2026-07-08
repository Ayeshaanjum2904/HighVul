import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '../../../assets/icons/expand-more';

import { InputLabelStaff, SelectStaff, Input } from './selectStaff';

const useStyles = makeStyles(() => ({
  margin: {
    width: '100%',
    marginTop: '-8px',
    borderRadius: '4px',
  },
  error: {
    border: (error) => (error ? 'solid 1px red' : 'none'),
  },
  errorContainer: {
    display: (error) => (error ? 'block' : 'none'),
    color: 'red',
    fontSize: '11px',
    marginTop: '1px',
  },
}));

const Select = ({
  className, onSelect, value, items, label,
  placeholder, disabled, CustomInput, InputLabel, error, errorMessage,
}) => {
  const classes = useStyles(error);
  return (
    <div className={className}>
      <FormControl className={classes.margin}>
        <InputLabel>{label}</InputLabel>
        <SelectStaff
          value={value === null || value === undefined ? '_default' : value}
          onChange={(event) => onSelect(event.target.value)}
          IconComponent={ExpandMoreIcon}
          input={CustomInput !== null ? <CustomInput /> : <Input />}
          disabled={disabled}
          classes={{ root: classes.error }}
        >
          {placeholder ? (
            <MenuItem disabled value="_default">
              {placeholder}
            </MenuItem>
          ) : null}
          {
          (items.map((item, index) => (
            <MenuItem
              key={index}
              value={item.value}
            >
              {item.text}
            </MenuItem>
          )))
        }
        </SelectStaff>
        <span className={classes.errorContainer}>
          {errorMessage}
        </span>
      </FormControl>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.any,
  items: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  CustomInput: PropTypes.object,
  InputLabel: PropTypes.any,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  onSelect: null,
  value: '',
  label: '',
  items: [],
  placeholder: null,
  disabled: false,
  CustomInput: null,
  InputLabel: InputLabelStaff,
  error: false,
  errorMessage: '',
};

export default Select;
