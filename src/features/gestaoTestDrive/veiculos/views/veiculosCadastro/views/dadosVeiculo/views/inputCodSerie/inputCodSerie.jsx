import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputCodSerie = ({
  codigoSerie, updateVeiculoProperty, disabled,
}) => (
  <FormatInput
    type="text"
    label="Cód. Série"
    value={codigoSerie}
    setValue={(value) => { updateVeiculoProperty('codigoSerie', value); }}
    format="#"
    disabled={disabled}
  />
);

InputCodSerie.propTypes = {
  codigoSerie: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
  disabled: PropTypes.bool,
};

InputCodSerie.defaultProps = {
  updateVeiculoProperty: () => {},
  codigoSerie: null,
  disabled: false,
};

export default InputCodSerie;
