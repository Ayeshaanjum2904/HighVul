import { connect } from 'react-redux';

import PedidosRegiao from './pedidosRegiao';
import * as PageSelectors from '../../../../redux/reduxPage/selectors';
import PageOperations from '../../../../redux/reduxPage/operations/operations';
import PedidosRegiaoOperations from '../../../../redux/reduxPedidosRegiao/operations';

import selectors from '../../../../redux/reduxPedidosRegiao/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: selectors.isLoading(dashboard),
  isError: selectors.isError(dashboard),
  data: selectors.pedidosRegiaoChartData(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  getPedidosRegiao: () => PedidosRegiaoOperations.getPedidosRegiao(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosRegiao);
