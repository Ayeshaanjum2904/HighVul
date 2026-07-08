import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputDataPagamento = ({
  dataPagamento, updateDetalheProperty, camposEditaveis,
}) => (
  <FormatInput
    type="number"
    label="Data de pagamento"
    value={dataPagamento}
    setValue={(value) => {
      updateDetalheProperty('dataPagamento', value);
    }}
    disabled={!camposEditaveis.includes('DataPagamento')}
    format={dataPagamento?.includes('/') ? null : '##/##/####'}
  />
);

InputDataPagamento.propTypes = {
  dataPagamento: PropTypes.any,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputDataPagamento.defaultProps = {
  updateDetalheProperty: () => {},
  dataPagamento: null,
  camposEditaveis: null,
};

export default InputDataPagamento;
