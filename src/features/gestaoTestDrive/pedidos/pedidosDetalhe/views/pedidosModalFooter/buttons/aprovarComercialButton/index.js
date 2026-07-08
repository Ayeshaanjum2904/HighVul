import { connect } from 'react-redux';

import detalhesOperations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

import AprovarComercialButton from './aprovarComercialButton';

const mapStateToProps = ({ pedidos }) => ({
  isModalSending: selectors.isModalSending(pedidos),
  isLoadingCancel: pedidos.details.cancelPedido.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  aprovarExcecao: () => { dispatch(detalhesOperations.aprovarAnaliseComercial(true)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AprovarComercialButton);
