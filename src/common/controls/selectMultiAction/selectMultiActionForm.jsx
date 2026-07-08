import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import SelectMultiAction from './selectMultiAction';

const SelectMultiActionForm = ({
  fieldName, control, required, ...props
}) => (
  <Controller
    name={fieldName}
    control={control}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => (
      <SelectMultiAction
        {...props}
        {...field}
        error={Boolean(error)}
      />
    )}
  />
);

SelectMultiActionForm.propTypes = {
  fieldName: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  required: PropTypes.bool,
  ...SelectMultiAction.propTypes,
};

SelectMultiActionForm.defaultProps = {
  required: false,
  ...SelectMultiAction.defaultProps,
};

export default SelectMultiActionForm;
