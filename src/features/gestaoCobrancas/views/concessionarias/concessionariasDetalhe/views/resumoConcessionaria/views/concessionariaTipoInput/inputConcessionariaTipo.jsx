import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

import { camelFormat } from 'utils/format';

const InputConcessionariaTipo = ({
  tipo,
}) => (
  <FormInput
    type="text"
    label="Tipo de Concessionária"
    value={camelFormat(tipo)}
    disabled
  />
);

InputConcessionariaTipo.propTypes = {
  tipo: PropTypes.string,
};

InputConcessionariaTipo.defaultProps = {
  tipo: '',
};

export default InputConcessionariaTipo;
