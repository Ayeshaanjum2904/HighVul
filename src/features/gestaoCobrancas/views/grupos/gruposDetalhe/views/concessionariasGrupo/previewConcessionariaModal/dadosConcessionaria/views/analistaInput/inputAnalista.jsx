import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

import { camelFormat } from 'utils/format';

const InputAnalista = ({
  analistaName,
}) => (
  <FormInput
    type="text"
    label="Analista Financiamento de Rede"
    value={camelFormat(analistaName)}
    disabled
  />
);

InputAnalista.propTypes = {
  analistaName: PropTypes.string,
};

InputAnalista.defaultProps = {
  analistaName: '',
};

export default InputAnalista;
