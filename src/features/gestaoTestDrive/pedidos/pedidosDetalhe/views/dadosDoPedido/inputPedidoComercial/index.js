import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputPedidoComercial from './inputPedidoComercial';

const mapStateToProps = ({ pedidos }) => ({
  pedidoComercial: pedidos.details.modal.detalhePedido?.pedidoComercial,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (propertyName, value) => {
    dispatch(operations.updateDetalheProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPedidoComercial);
