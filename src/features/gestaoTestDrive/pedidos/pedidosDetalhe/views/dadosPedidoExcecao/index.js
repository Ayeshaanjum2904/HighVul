import { connect } from 'react-redux';
import DadosPedidoExcecao from './dadosPedidoExcecao';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  arquivosExcecao: pedidos.details.modal.detalhePedido?.arquivosExcecao,
  isTdExcecao: selectors.isTdExcecao(pedidos),
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DadosPedidoExcecao);
