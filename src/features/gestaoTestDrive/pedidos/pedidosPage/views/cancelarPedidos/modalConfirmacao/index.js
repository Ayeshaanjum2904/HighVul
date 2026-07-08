import { connect } from 'react-redux';

import ModalConfirmacao from './modalConfirmacao';
import actions from '../../../redux/actions';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import { categorizarPedidosPorStatus } from '../../../utils/cancelamentoUtils';

const mapStateToProps = ({ pedidos }) => {
  const modalState = selectors.modalConfirmacaoState(pedidos);
  const selectedPedidos = selectors.selectedPedidos(pedidos);
  const { pedidosValidos } = categorizarPedidosPorStatus(selectedPedidos);

  return {
    open: modalState.open,
    pedidosValidos,
    justificativa: selectors.justificativaCancelamento(pedidos),
    isLoading: selectors.isCancelingPedidos(pedidos),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(actions.closeModalConfirmacao()),
  onJustificativaChange: (justificativa) => (
    dispatch(actions.setJustificativaCancelamento(justificativa))
  ),
  onConfirmar: (pedidosIds) => {
    dispatch(operations.cancelarPedidos(pedidosIds));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmacao);
