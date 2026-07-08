import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

import SelectStatus from './selectStatusPedidosPage';

const mapStateToProps = ({ pedidos }) => ({
  status: pedidos.page.filters.status,
  statusList: selectors.statusList(pedidos),
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => dispatch(operations.setStatus(status)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectStatus);
