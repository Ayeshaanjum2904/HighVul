import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputCodVersao = ({
  codigoVersao, updateVeiculoProperty, disabled,
}) => (
  <FormatInput
    type="text"
    label="Cód. Versão"
    value={codigoVersao}
    setValue={(value) => { updateVeiculoProperty('codigoVersao', value?.slice(0, 24)); }}
    disabled={disabled}
  />
);

InputCodVersao.propTypes = {
  codigoVersao: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
  disabled: PropTypes.bool,
};

InputCodVersao.defaultProps = {
  updateVeiculoProperty: () => {},
  codigoVersao: null,
  disabled: false,
};

export default InputCodVersao;
