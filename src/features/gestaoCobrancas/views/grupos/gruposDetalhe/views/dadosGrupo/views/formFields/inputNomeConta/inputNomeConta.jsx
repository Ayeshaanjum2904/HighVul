import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputNomeConta = ({
  nomeConta, updateGrupoProperty, errors, isEditing,
}) => (
  <FormInput
    type="text"
    label="Nome da conta"
    value={nomeConta}
    setValue={(value) => {
      updateGrupoProperty('nomeConta', value);
    }}
    error={errors.some((e) => e.propertyName === 'NomeConta')}
    errorMessage={errors.find((e) => e.propertyName === 'NomeConta')?.message}
    disabled={!isEditing}
  />
);

InputNomeConta.propTypes = {
  updateGrupoProperty: PropTypes.func,
  nomeConta: PropTypes.string,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

InputNomeConta.defaultProps = {
  updateGrupoProperty: () => {},
  nomeConta: null,
  errors: [],
  isEditing: false,
};

export default InputNomeConta;
