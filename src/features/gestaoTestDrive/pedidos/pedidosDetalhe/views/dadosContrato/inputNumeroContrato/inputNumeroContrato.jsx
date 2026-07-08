import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputNumeroContrato = ({
  numeroContrato, updateDetalheProperty, camposEditaveis,
}) => (
  <FormatInput
    type="number"
    label="Nº Contrato"
    value={numeroContrato}
    setValue={(value) => { updateDetalheProperty('numeroContrato', value); }}
    disabled={!camposEditaveis.includes('NumeroContrato')}
  />
);

InputNumeroContrato.propTypes = {
  numeroContrato: PropTypes.any,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputNumeroContrato.defaultProps = {
  updateDetalheProperty: () => {},
  numeroContrato: null,
  camposEditaveis: null,
};

export default InputNumeroContrato;
