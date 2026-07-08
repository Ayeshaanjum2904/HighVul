import { connect } from 'react-redux';

import ModalAviso from './modalAviso';
import actions from '../../../redux/actions';
import selectors from '../../../redux/selectors';
import { categorizarPedidosPorStatus } from '../../../utils/cancelamentoUtils';

const mapStateToProps = ({ pedidos }) => {
  const modalState = selectors.modalAvisoState(pedidos);
  const selectedPedidos = selectors.selectedPedidos(pedidos);
  const { pedidosCancelados } = categorizarPedidosPorStatus(selectedPedidos);

  return {
    open: modalState.open,
    pedidosCancelados,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(actions.closeModalAviso()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAviso);
