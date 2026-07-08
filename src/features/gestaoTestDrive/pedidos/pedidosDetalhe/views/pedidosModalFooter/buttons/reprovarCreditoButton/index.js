import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';
import detalhesOperations from '../../../../redux/operations';

import Button from './reprovarCreditoButton';

const mapStateToProps = ({ pedidos }) => ({
  isLoadingCancel: pedidos.details.cancelPedido.isLoading,
  isModalSending: selectors.isModalSending(pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  reprovarCredito: () => { dispatch(detalhesOperations.aprovarCredito(false)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
