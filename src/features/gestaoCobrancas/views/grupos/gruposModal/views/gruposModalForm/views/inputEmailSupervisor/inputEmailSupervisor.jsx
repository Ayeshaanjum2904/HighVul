import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputEmailSupervisor = ({
  emailSupervisor, updateGrupoProperty, errors,
}) => (
  <FormInput
    type="text"
    label="E-mail supervisor"
    value={emailSupervisor}
    setValue={(value) => {
      updateGrupoProperty('emailSupervisor', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'EmailSupervisor')}
    errorMessage={errors.find((e) => e.propertyName === 'EmailSupervisor')?.message}
  />
);

InputEmailSupervisor.propTypes = {
  updateGrupoProperty: PropTypes.func,
  emailSupervisor: PropTypes.string,
  errors: PropTypes.array,
};

InputEmailSupervisor.defaultProps = {
  updateGrupoProperty: () => {},
  emailSupervisor: null,
  errors: [],
};

export default InputEmailSupervisor;
