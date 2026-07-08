import { connect } from 'react-redux';

import FieldDocumentoJuridico from './fieldDocumentoJuridico';
import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ limitesAprovadosJuridico, auth }) => ({
  listaPessoaDocumentacao: limitesAprovadosJuridico.listaPessoaDocumentacao.listaDados,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  validarDocumento: (documento) => dispatch(operations.updateDocumentoJuridicoValidacao(documento)),
  desfazerValidacaoDocumento: (documento) => dispatch(
    operations.updateDocumentoJuridicoDesfazerValidacao(documento),
  ),
  getDocumentoDownload: (idDocumento) => dispatch(
    operations.getDocumentoJuridicoDownload(idDocumento),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldDocumentoJuridico);
