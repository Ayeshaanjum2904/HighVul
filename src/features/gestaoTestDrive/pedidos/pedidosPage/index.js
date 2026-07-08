import { connect } from 'react-redux';

import operations from './redux/operations';
import detailsOperations from '../pedidosDetalhe/redux/operations';
import selectors from './redux/selectors';

import PedidosPage from './pedidosPage';

const mapStateToProps = ({ pedidos, auth }) => ({
  isDetalhesOpen: pedidos.details.isOpen,
  hasPermissionTodasBrands: selectors.hasPermissionTodasBrands(auth),
  snackbarErrors: pedidos.details.snackbarErrors,
  page: pedidos.page.pedidosList.page,
  ipp: pedidos.page.pedidosList.ipp,
  totalItems: pedidos.page.pedidosList.totalItems,
  isLoading: pedidos.page.pedidosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPedidos: () => { dispatch(operations.getPedidos()); },
  resetStore: () => { dispatch(operations.resetStore()); },
  setPage: (page) => { dispatch(operations.setPage(page)); },
  onSnackbarClose: (id) => dispatch(detailsOperations.dismissSnackbar(id)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosPage);
