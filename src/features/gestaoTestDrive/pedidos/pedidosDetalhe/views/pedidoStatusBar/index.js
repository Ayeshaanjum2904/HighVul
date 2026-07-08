import { connect } from 'react-redux';
import PedidosStatusBar from './pedidoStatusBar';

const mapStateToProps = ({ pedidos }) => ({
  statusBar: pedidos.details.modal.detalhePedido?.statusBar,
  isLoading: pedidos.details.modal.isLoading,
});

export default connect(mapStateToProps, null)(PedidosStatusBar);
