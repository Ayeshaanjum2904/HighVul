import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputNome = ({
  nome,
}) => (
  <FormInput
    type="text"
    label="Nome da concessionária"
    value={nome}
    disabled
  />
);

InputNome.propTypes = {
  nome: PropTypes.string,
};

InputNome.defaultProps = {
  nome: '',
};

export default InputNome;
