import { connect } from 'react-redux';
import selectors from '../../redux/selectors';

import FormDetalhePedido from './formDetalhePedido';

const mapStateToProps = ({ pedidos }) => ({
  detalhePedido: pedidos.details.modal?.detalhePedido,
  isError: pedidos.details.modal.isError,
  isLoading: pedidos.details.modal.isLoading,
  isOrdem: selectors.isOrdem(pedidos),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDetalhePedido);
