import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputEmailSupervisor = ({
  emailSupervisor, updateGrupoProperty, errors, isEditing,
}) => (
  <FormInput
    type="text"
    label="E-mail do Gerente Regional"
    value={emailSupervisor}
    setValue={(value) => {
      updateGrupoProperty('emailSupervisor', value);
    }}
    error={errors.some((e) => e.propertyName === 'EmailSupervisor')}
    errorMessage={errors.find((e) => e.propertyName === 'EmailSupervisor')?.message}
    disabled={!isEditing}
  />
);

InputEmailSupervisor.propTypes = {
  updateGrupoProperty: PropTypes.func,
  emailSupervisor: PropTypes.string,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

InputEmailSupervisor.defaultProps = {
  updateGrupoProperty: () => {},
  emailSupervisor: null,
  errors: [],
  isEditing: false,
};

export default InputEmailSupervisor;
