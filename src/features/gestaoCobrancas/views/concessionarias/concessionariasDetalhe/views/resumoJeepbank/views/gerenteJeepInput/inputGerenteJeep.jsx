import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputGerenteJeep = ({
  gerente, isDisabled, onChange, errors,
}) => (
  <FormInput
    type="text"
    label="Gerente Regional Jeep Bank"
    value={gerente}
    disabled={isDisabled}
    setValue={(value) => onChange(value)}
    error={errors.some((e) => e.propertyName === 'GerenteJeep')}
    errorMessage={errors.find((e) => e.propertyName === 'GerenteJeep')?.message}
  />
);

InputGerenteJeep.propTypes = {
  gerente: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.array,
};

InputGerenteJeep.defaultProps = {
  gerente: '',
  isDisabled: true,
  onChange: () => {},
  errors: [],
};

export default InputGerenteJeep;
