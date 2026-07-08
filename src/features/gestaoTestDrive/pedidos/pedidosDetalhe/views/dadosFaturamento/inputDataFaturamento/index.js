import { connect } from 'react-redux';
import operations from '../../../redux/operations';

import InputDataFaturamento from './inputDataFaturamento';

const mapStateToProps = ({ pedidos }) => ({
  dataFaturamento: pedidos.details.modal.detalhePedido?.dataFaturamento,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  status: pedidos.details.modal.detalhePedido?.status,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (value) => {
    dispatch(operations.updateDetalheProperty('dataFaturamento', value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDataFaturamento);
