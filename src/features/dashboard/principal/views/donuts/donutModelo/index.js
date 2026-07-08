import { connect } from 'react-redux';

import DonutModelo from './donutModelo';
import * as PageSelectors from '../../../redux/reduxPage/selectors';
import PageOperations from '../../../redux/reduxPage/operations/operations';
import PedidosModeloOperations from '../../../redux/reduxPedidosModelo/operations';
import PedidosModeloSelector from '../../../redux/reduxPedidosModelo/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: PedidosModeloSelector.isLoading(dashboard),
  isError: PedidosModeloSelector.isError(dashboard),
  dataset: PedidosModeloSelector.getDonutData(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  getPedidosModelo: () => PedidosModeloOperations.getPedidosModelo(),
});

export default connect(mapStateToProps, mapDispatchToProps)(DonutModelo);
