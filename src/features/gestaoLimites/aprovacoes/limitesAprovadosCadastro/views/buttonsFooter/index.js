import { connect } from 'react-redux';

import operations from 'features/gestaoLimites/aprovacoes/limitesAprovadosPage/redux/operations';
import operationsCadastro from '../../redux/operations';
import selectors from '../../redux/selectors';
import ButtonsFooter from './buttonsFooter';

const mapStateToProps = ({ limitesAprovadosCadastro, auth }) => ({
  documentosCadastro: limitesAprovadosCadastro.listaPessoaDocumentacao.listaDados,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  cadastroPage: (cadastroPage) => {
    dispatch(operations.setCadastroPage(cadastroPage));
  },
  enviarProposta: (idLimite, status, actions) => {
    dispatch(
      operationsCadastro.updateAndSaveStatus(idLimite, status, actions),
    );
  },
  salvarJustificativa: (idLimite, status, motivo, documento, actions) => dispatch(
    operationsCadastro.updateComJustificativa(idLimite, status, motivo, documento, actions),
  ),
  uploadDocumento: (file) => dispatch(
    operationsCadastro.uploadDocumento(file),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsFooter);
