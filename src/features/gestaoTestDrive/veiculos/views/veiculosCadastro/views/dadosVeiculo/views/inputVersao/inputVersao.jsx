import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputVersao = ({
  descricaoVersao, updateVeiculoProperty,
}) => (
  <FormatInput
    type="text"
    label="Versão"
    value={descricaoVersao}
    setValue={(value) => { updateVeiculoProperty('descricaoVersao', value); }}
  />
);

InputVersao.propTypes = {
  descricaoVersao: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
};

InputVersao.defaultProps = {
  updateVeiculoProperty: () => {},
  descricaoVersao: null,
};

export default InputVersao;
