import { connect } from 'react-redux';
import DashboardCards from './dashboardCards';

import PageOperations from '../../redux/reduxPage/operations/operations';
import PedidosOperations from '../../redux/reduxPedidos/operations';
import FluxoOperations from '../../redux/reduxFluxo/operations';
import * as FluxoSelectors from '../../redux/reduxFluxo/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dataLoader: dashboard.principal.page.dataLoader,
  fluxo: dashboard.principal.fluxo,
  pedido: dashboard.principal.pedidos,
  isFluxoLoading: FluxoSelectors.isLoading(dashboard),
  isFluxoError: FluxoSelectors.isError(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  reigisterLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  getFluxo: () => FluxoOperations.getFluxo(),
  getPedidos: () => PedidosOperations.getPedidos(),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCards);
