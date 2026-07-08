import React from 'react';
import PropTypes from 'prop-types';
import FormatNumber from 'common/controls/input/formInput';

const InputPedidoComercial = ({
  pedidoComercial, updateDetalheProperty, camposEditaveis,
}) => (
  <FormatNumber
    type="text"
    label="Nº Pedido Comercial"
    value={pedidoComercial}
    setValue={(value) => {
      updateDetalheProperty('pedidoComercial', value);
    }}
    disabled={!camposEditaveis.includes('PedidoComercial')}
  />
);

InputPedidoComercial.propTypes = {
  pedidoComercial: PropTypes.string,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  updateDetalheProperty: PropTypes.func,
};

InputPedidoComercial.defaultProps = {
  pedidoComercial: '',
  updateDetalheProperty: () => {},
  camposEditaveis: [],
};

export default InputPedidoComercial;
