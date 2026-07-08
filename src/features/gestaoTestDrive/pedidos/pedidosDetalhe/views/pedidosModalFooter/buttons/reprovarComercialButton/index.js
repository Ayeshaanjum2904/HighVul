import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';
import detalhesOperations from '../../../../redux/operations';

import ReprovarComercialButton from './reprovarComercialButton';

const mapStateToProps = ({ pedidos }) => ({
  isLoadingCancel: pedidos.details.cancelPedido.isLoading,
  isModalSending: selectors.isModalSending(pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  reprovarAdicional: () => { dispatch(detalhesOperations.aprovarAnaliseComercial(false)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReprovarComercialButton);
