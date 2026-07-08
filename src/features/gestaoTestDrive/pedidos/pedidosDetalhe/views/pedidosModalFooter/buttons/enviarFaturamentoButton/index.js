import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';
import detalhesOperations from '../../../../redux/operations';

import EnviarFaturamentoButton from './enviarFaturamentoButton';

const mapStateToProps = ({ pedidos }) => ({
  isModalSending: selectors.isModalSending(pedidos),
  isLoadingCancel: pedidos.details.cancelPedido.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  sendDetalhePedido: () => { dispatch(detalhesOperations.sendDetalhePedido()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(EnviarFaturamentoButton);
