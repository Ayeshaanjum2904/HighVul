import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputDataPagamento from './inputDataPagamento';

const mapStateToProps = ({ pedidos }) => ({
  dataPagamento: pedidos.details.modal.detalhePedido?.dataPagamento,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (propertyName, value) => {
    dispatch(operations.updateDetalheProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDataPagamento);
