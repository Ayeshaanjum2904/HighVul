import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputCodigo = ({
  codigoModelo, updateModeloProperty, disabled,
}) => (
  <FormatInput
    type="text"
    label="Código"
    value={codigoModelo}
    setValue={(value) => { updateModeloProperty('codigoModelo', value?.slice(0, 10)); }}
    disabled={disabled}
  />
);

InputCodigo.propTypes = {
  codigoModelo: PropTypes.any,
  updateModeloProperty: PropTypes.func,
  disabled: PropTypes.bool,
};

InputCodigo.defaultProps = {
  updateModeloProperty: () => {},
  codigoModelo: null,
  disabled: false,
};

export default InputCodigo;
