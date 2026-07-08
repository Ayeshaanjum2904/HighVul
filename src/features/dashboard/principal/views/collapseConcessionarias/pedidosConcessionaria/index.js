import { connect } from 'react-redux';

import PedidosConcessionaria from './pedidosConcessionaria';
import * as PageSelectors from '../../../redux/reduxPage/selectors';
import selectors from '../../../redux/reduxPedidosConcessionaria/selectors';
import operations from '../../../redux/reduxPedidosConcessionaria/operations';
import PageOperations from '../../../redux/reduxPage/operations/operations';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: selectors.isLoading(dashboard),
  isError: selectors.isError(dashboard),
  data: dashboard.principal.pedidosConcessionaria.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPedidosConcessionaria: (tipo, orderBy) => operations.getPedidosConcessionaria(tipo, orderBy),
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosConcessionaria);
