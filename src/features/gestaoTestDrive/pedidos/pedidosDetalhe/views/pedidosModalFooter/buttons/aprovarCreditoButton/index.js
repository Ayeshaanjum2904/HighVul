import { connect } from 'react-redux';

import detalhesOperations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

import Button from './aprovarCreditoButton';

const mapStateToProps = ({ pedidos }) => ({
  isModalSending: selectors.isModalSending(pedidos),
  isLoadingCancel: pedidos.details.cancelPedido.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  aprovarCredito: () => { dispatch(detalhesOperations.aprovarCredito(true)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
