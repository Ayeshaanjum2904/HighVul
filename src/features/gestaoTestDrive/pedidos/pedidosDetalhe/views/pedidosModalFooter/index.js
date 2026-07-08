import { connect } from 'react-redux';
import PedidosModalFooter from './pedidosModalFooter';

import detalhesOperations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  isError: selectors.isModalSendingError(pedidos),
  isErrorComentario: pedidos.details.sendComentario.isError,
  currentStatus: pedidos.details.modal.detalhePedido?.status,
  isAVista: pedidos.details.modal.detalhePedido?.isAVista,
  isPedidoComOrdem: pedidos.details.modal.detalhePedido?.ordemId,
  produto: pedidos.details.modal.detalhePedido?.produto,
  isOrdem: selectors.isOrdem(pedidos),
  fluxoAntigo: pedidos.details.modal.detalhePedido?.marca?.includes('PEUGEOT')
    || pedidos.details.modal.detalhePedido?.marca?.includes('CITROEN')
    || pedidos.details.modal.detalhePedido?.fluxoAntigo,
});

const mapDispatchToProps = (dispatch) => ({
  sendDetalhePedido: () => { dispatch(detalhesOperations.sendDetalhePedido()); },
  cancelPedido: () => { dispatch(detalhesOperations.cancelPedido()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosModalFooter);
