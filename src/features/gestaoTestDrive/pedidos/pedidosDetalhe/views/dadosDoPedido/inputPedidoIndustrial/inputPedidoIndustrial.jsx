import React from 'react';
import PropTypes from 'prop-types';
import FormatNumber from 'common/controls/input/formInput';

const InputPedidoIndustrial = ({
  pedidoIndustrial, updateDetalheProperty, camposEditaveis,
}) => (
  <FormatNumber
    type="text"
    label="Nº Pedido Industrial"
    value={pedidoIndustrial}
    setValue={(value) => {
      updateDetalheProperty('pedidoIndustrial', value);
    }}
    disabled={!camposEditaveis.includes('PedidoIndustrial')}
  />
);

InputPedidoIndustrial.propTypes = {
  pedidoIndustrial: PropTypes.string,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  updateDetalheProperty: PropTypes.func,
};

InputPedidoIndustrial.defaultProps = {
  pedidoIndustrial: '',
  updateDetalheProperty: () => {},
  camposEditaveis: [],
};

export default InputPedidoIndustrial;
