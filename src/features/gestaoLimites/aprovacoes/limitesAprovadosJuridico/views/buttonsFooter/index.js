import { connect } from 'react-redux';
import operations from 'features/gestaoLimites/aprovacoes/limitesAprovadosPage/redux/operations';
import ButtonsFooterJuridico from './buttonsFooter';
import operationsCadastro from '../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  cadastroPage: (cadastroPage) => {
    dispatch(operations.setCadastroPage(cadastroPage));
  },

  enviarProposta: (idLimite, status, actions) => dispatch(
    operationsCadastro.enviarProposta(idLimite, status, actions),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsFooterJuridico);
