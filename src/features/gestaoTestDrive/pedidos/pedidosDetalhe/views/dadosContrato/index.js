import { connect } from 'react-redux';
import DadosContrato from './dadosContrato';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  currentStatus: pedidos.details.modal.detalhePedido?.status,
  isContrato: selectors.isContrato(pedidos),
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DadosContrato);
