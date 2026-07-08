import { connect } from 'react-redux';

import PedidosPeriodo from './pedidosPeriodo';
import * as PageSelectors from '../../redux/reduxPage/selectors';
import PageOperations from '../../redux/reduxPage/operations/operations';
import PedidosPeriodoOperations from '../../redux/reduxPedidosPeriodo/operations';
import PedidosPeriodoSelectors from '../../redux/reduxPedidosPeriodo/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: PedidosPeriodoSelectors.isLoading(dashboard.principal),
  isError: PedidosPeriodoSelectors.isError(dashboard.principal),
  data: PedidosPeriodoSelectors.pedidosPeriodoChartData(dashboard.principal),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  getPedidosPeriodo: () => PedidosPeriodoOperations.getPedidosPeriodo(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosPeriodo);
