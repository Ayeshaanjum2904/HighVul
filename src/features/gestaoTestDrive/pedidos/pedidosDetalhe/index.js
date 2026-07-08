import { connect } from 'react-redux';
import PedidosModal from './pedidosModal';

import detalhesOperations from './redux/operations';

import selectors from './redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  pedidoId: pedidos.details.modal.detalhePedido?.pedidoId,
  isError: selectors.isModalSendingError(pedidos),
  isLoading: selectors.isModalSending(pedidos),
  statusErrorModalOpen: pedidos.details.updateStatusPedido.isModalOpen,
  isLoadingSendComentario: pedidos.details.sendComentario.isLoading,
  snackbarErrors: pedidos.details.snackbarErrors,
  isEmpty: pedidos.details.regressaoStatus.isEmpty,
  etapaIsError: pedidos.details.regressaoStatus.isError,
  status: pedidos.details.modal.detalhePedido?.status,
  statusList: pedidos.page.filters.statusList,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => { dispatch(detalhesOperations.closeModal()); },
  sendDetalhePedido: () => { dispatch(detalhesOperations.sendDetalhePedido()); },
  onSnackbarClose: (id) => dispatch(detalhesOperations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosModal);
