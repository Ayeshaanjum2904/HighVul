import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

import { formatNomeConcessionaria } from 'utils/format';

const InputNome = ({
  nome,
}) => (
  <FormInput
    type="text"
    label="Nome da concessionária"
    value={formatNomeConcessionaria(nome)}
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
