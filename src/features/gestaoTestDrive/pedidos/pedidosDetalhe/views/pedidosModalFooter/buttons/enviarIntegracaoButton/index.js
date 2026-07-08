import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';
import detalhesOperations from '../../../../redux/operations';

import EnviarIntegracaoButton from './enviarIntegracaoButton';

const mapStateToProps = ({ pedidos }) => ({
  isLoadingIntegracao: selectors.isLoadingIntegracao(pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  onEnviarIntegracao: () => { dispatch(detalhesOperations.enviarIntegracao()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(EnviarIntegracaoButton);
