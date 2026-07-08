import { connect } from 'react-redux';
import DocumentosCadastro from './documentosCadastro';
import operations from '../../redux/operations';
import selectors from '../../../limitesAprovadosPage/redux/selectors';

const mapStateToProps = ({ limitesAprovadosCadastro, auth }) => ({
  documentosCadastro: limitesAprovadosCadastro.listaPessoaDocumentacao.listaDados,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  invalidarDocumentosFormalizarDealer: (nomeGuid, motivo, idLimite, invalidarTodos) => dispatch(
    operations.invalidarDocumentosFormalizarDealer(nomeGuid, motivo, idLimite, invalidarTodos),
  ),
  validarDocumentoFormalizarDealer: (idDocumento, idLimite) => dispatch(
    operations.validarDocumentoFormalizarDealer(idDocumento, idLimite),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentosCadastro);
