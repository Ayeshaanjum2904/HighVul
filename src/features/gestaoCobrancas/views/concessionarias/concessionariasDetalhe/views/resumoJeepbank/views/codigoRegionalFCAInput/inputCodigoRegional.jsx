import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputCodigoRegional = ({
  codigo, isDisabled, onChange, errors,
}) => (
  <FormInput
    type="number"
    label="Código Regional FCA"
    value={codigo}
    disabled={isDisabled}
    setValue={(value) => onChange(value)}
    error={errors.some((e) => e.propertyName === 'CodigoRegional')}
    errorMessage={errors.find((e) => e.propertyName === 'CodigoRegional')?.message}
  />
);

InputCodigoRegional.propTypes = {
  codigo: PropTypes.any,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.array,
};

InputCodigoRegional.defaultProps = {
  codigo: null,
  isDisabled: true,
  onChange: () => {},
  errors: [],
};

export default InputCodigoRegional;
