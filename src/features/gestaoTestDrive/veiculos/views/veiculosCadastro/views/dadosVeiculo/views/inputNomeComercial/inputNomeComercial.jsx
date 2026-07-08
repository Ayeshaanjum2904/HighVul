import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputNomeComercial = ({
  nomeComercial, updateVeiculoProperty,
}) => (
  <FormatInput
    type="text"
    label="Nome Comercial"
    value={nomeComercial}
    setValue={(value) => { updateVeiculoProperty('nomeComercial', value); }}
  />
);

InputNomeComercial.propTypes = {
  nomeComercial: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
};

InputNomeComercial.defaultProps = {
  updateVeiculoProperty: () => {},
  nomeComercial: null,
};

export default InputNomeComercial;
