import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputNomeConta = ({
  nomeConta, updateGrupoProperty, errors,
}) => (
  <FormInput
    type="text"
    label="Nome da conta"
    value={nomeConta}
    setValue={(value) => {
      updateGrupoProperty('nomeConta', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'NomeConta')}
    errorMessage={errors.find((e) => e.propertyName === 'NomeConta')?.message}
  />
);

InputNomeConta.propTypes = {
  updateGrupoProperty: PropTypes.func,
  nomeConta: PropTypes.string,
  errors: PropTypes.array,
};

InputNomeConta.defaultProps = {
  updateGrupoProperty: () => {},
  nomeConta: null,
  errors: [],
};

export default InputNomeConta;
