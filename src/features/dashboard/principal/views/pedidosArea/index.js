import { connect } from 'react-redux';

import PedidosArea from './pedidosArea';
import * as PageSelectors from '../../redux/reduxPage/selectors';
import PageOperations from '../../redux/reduxPage/operations/operations';
import PedidosAreaOperations from '../../redux/reduxPedidosArea/operations';
import PedidosAreaSelectors from '../../redux/reduxPedidosArea/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: PedidosAreaSelectors.isLoading(dashboard),
  isError: PedidosAreaSelectors.isError(dashboard),
  data: PedidosAreaSelectors.pedidosAreaChartData(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  getPedidosArea: () => PedidosAreaOperations.getPedidosArea(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosArea);
