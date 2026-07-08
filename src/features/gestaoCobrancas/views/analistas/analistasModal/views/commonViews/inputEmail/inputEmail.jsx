import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputEmail = ({ email, errors, updateAnalistaProperty }) => (
  <FormInput
    type="text"
    label="Email"
    value={email}
    setValue={(value) => {
      updateAnalistaProperty('email', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'Email')}
    errorMessage={errors.find((e) => e.propertyName === 'Email')?.message}
  />
);

InputEmail.propTypes = {
  updateAnalistaProperty: PropTypes.func,
  email: PropTypes.string,
  errors: PropTypes.array,
};

InputEmail.defaultProps = {
  updateAnalistaProperty: () => {},
  email: null,
  errors: [],
};

export default InputEmail;
