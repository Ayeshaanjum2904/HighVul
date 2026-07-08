import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputPedidoIndustrial from './inputPedidoIndustrial';

const mapStateToProps = ({ pedidos }) => ({
  pedidoIndustrial: pedidos.details.modal.detalhePedido?.pedidoIndustrial,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (propertyName, value) => {
    dispatch(operations.updateDetalheProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPedidoIndustrial);
