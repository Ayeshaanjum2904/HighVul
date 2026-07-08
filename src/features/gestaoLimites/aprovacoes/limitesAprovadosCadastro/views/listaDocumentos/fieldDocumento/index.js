import { connect } from 'react-redux';

import FieldDocumento from './fieldDocumento';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ limitesAprovadosCadastro, auth }) => ({
  listaPessoaDocumentacao: limitesAprovadosCadastro.listaPessoaDocumentacao.listaDados,
  isLoading: limitesAprovadosCadastro.listaPessoaDocumentacao.isLoading,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  validarDocumento: (documento) => dispatch(operations.updateDocumentoValidacao(documento)),
  desfazerValidacaoDocumento: (documento) => dispatch(
    operations.updateDocumentoDesfazerValidacao(documento),
  ),
  getDocumentoDownload: (idDocumento, isCadastro) => dispatch(
    operations.getDocumentoDownload(idDocumento, isCadastro),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldDocumento);
