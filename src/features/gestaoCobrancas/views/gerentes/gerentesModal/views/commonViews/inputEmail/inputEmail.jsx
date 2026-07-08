import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputEmail = ({ email, errors, updateGerenteProperty }) => (
  <FormInput
    type="text"
    label="Email"
    value={email}
    setValue={(value) => {
      updateGerenteProperty('email', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'Email')}
    errorMessage={errors.find((e) => e.propertyName === 'Email')?.message}
  />
);

InputEmail.propTypes = {
  updateGerenteProperty: PropTypes.func,
  email: PropTypes.string,
  errors: PropTypes.array,
};

InputEmail.defaultProps = {
  updateGerenteProperty: () => {},
  email: null,
  errors: [],
};

export default InputEmail;
