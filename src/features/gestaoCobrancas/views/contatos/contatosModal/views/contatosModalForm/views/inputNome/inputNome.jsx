import React from 'react';
import PropTypes from 'prop-types';

import InputEdit from 'common/controls/inputEdit';
import FormInput from 'common/controls/input/formInput';

const InputNome = ({
  id, nome, updateContatoProperty, errors,
}) => {
  const error = errors.find((e) => e.propertyName === 'Nome');

  return (id ? (
    <InputEdit
      label="Nome"
      value={nome}
      setValue={(value) => {
        updateContatoProperty('nome', value);
      }}
      error={error?.message}
      deleteButton={false}
      disabled={false}
    />
  ) : (
    <FormInput
      type="text"
      label="Nome"
      value={nome}
      setValue={(value) => {
        updateContatoProperty('nome', value);
      }}
      disabled={false}
      error={error}
      errorMessage={error?.message}
    />
  ));
};

InputNome.propTypes = {
  id: PropTypes.number,
  nome: PropTypes.string,
  updateContatoProperty: PropTypes.func,
  errors: PropTypes.array,
};

InputNome.defaultProps = {
  id: null,
  nome: null,
  updateContatoProperty: () => {},
  errors: [],
};

export default InputNome;
