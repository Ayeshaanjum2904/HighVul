import React from 'react';
import PropTypes from 'prop-types';
import FormatInput from 'common/controls/input/formInput';

const InputNumeroNotaFiscal = ({
  numeroNotaFiscal, updateDetalheProperty, camposEditaveis,
}) => (
  <FormatInput
    type="number"
    label="Nº NF"
    value={numeroNotaFiscal}
    setValue={(value) => { updateDetalheProperty('numeroNotaFiscal', value); }}
    disabled={!camposEditaveis.includes('DataFaturamento')}
  />
);

InputNumeroNotaFiscal.propTypes = {
  numeroNotaFiscal: PropTypes.any,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputNumeroNotaFiscal.defaultProps = {
  updateDetalheProperty: () => {},
  numeroNotaFiscal: null,
  camposEditaveis: null,
};

export default InputNumeroNotaFiscal;
