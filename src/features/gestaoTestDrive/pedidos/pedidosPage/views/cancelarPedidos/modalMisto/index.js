import { connect } from 'react-redux';

import ModalMisto from './modalMisto';
import actions from '../../../redux/actions';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import { categorizarPedidosPorStatus } from '../../../utils/cancelamentoUtils';

const mapStateToProps = ({ pedidos }) => {
  const modalState = selectors.modalMistoState(pedidos);
  const selectedPedidos = selectors.selectedPedidos(pedidos);
  const { pedidosValidos, pedidosCancelados } = categorizarPedidosPorStatus(selectedPedidos);

  return {
    open: modalState.open,
    pedidosValidos,
    pedidosCancelados,
    justificativa: selectors.justificativaCancelamento(pedidos),
    isLoading: selectors.isCancelingPedidos(pedidos),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(actions.closeModalMisto()),
  onJustificativaChange: (justificativa) => (
    dispatch(actions.setJustificativaCancelamento(justificativa))
  ),
  onConfirmar: (pedidosIds) => {
    dispatch(operations.cancelarPedidos(pedidosIds));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalMisto);
