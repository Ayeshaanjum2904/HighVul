import { connect } from 'react-redux';
import CancelarPedidoModal from './cancelarPedidoModal';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  motivo: pedidos.details.cancelPedido?.motivo,
  isLoadingCancel: pedidos.details.cancelPedido.isLoading,
  isModalSending: selectors.isModalSending(pedidos),
  status: pedidos.details.modal.detalhePedido?.status,
  openAlertModal: pedidos.details.cancelPedido.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  updateMotivo: (value) => {
    dispatch(operations.updateMotivo(value));
  },
  cancelPedido: (value) => {
    dispatch(operations.cancelPedido(value));
  },
  setOpenAlertModal: (value) => { dispatch(operations.setOpenCancelPedidoModal(value)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CancelarPedidoModal);
