import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputNome = ({ nome, errors, updateGerenteProperty }) => (
  <FormInput
    type="text"
    label="Nome"
    value={nome}
    setValue={(value) => {
      updateGerenteProperty('nome', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'Nome')}
    errorMessage={errors.find((e) => e.propertyName === 'Nome')?.message}
  />
);

InputNome.propTypes = {
  updateGerenteProperty: PropTypes.func,
  nome: PropTypes.string,
  errors: PropTypes.any,
};

InputNome.defaultProps = {
  updateGerenteProperty: () => {},
  nome: null,
  errors: [],
};

export default InputNome;
