import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputNome = ({ nome, errors, updateAnalistaProperty }) => (
  <FormInput
    type="text"
    label="Nome"
    value={nome}
    setValue={(value) => {
      updateAnalistaProperty('nome', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'Nome')}
    errorMessage={errors.find((e) => e.propertyName === 'Nome')?.message}
  />
);

InputNome.propTypes = {
  updateAnalistaProperty: PropTypes.func,
  nome: PropTypes.string,
  errors: PropTypes.any,
};

InputNome.defaultProps = {
  updateAnalistaProperty: () => {},
  nome: null,
  errors: [],
};

export default InputNome;
