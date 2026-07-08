import { connect } from 'react-redux';
import DadosFaturamento from './dadosFaturamento';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  currentStatus: pedidos.details.modal.detalhePedido?.status,
  isFaturamento: selectors.isFaturamento(pedidos),
  status: pedidos.details.modal.detalhePedido?.status,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DadosFaturamento);
