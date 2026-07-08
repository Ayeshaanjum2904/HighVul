import { connect } from 'react-redux';
import JuridicoForm from './juridicoForm';
import operations from '../../redux/operations';

const mapStateToProps = ({ limitesAprovadosJuridico }) => ({
  documentoOpcoes: limitesAprovadosJuridico.documento.documentoList,
});

const mapDispatchToProps = (dispatch) => ({
  getTipoDocumentoList: () => dispatch(operations.getTipoDocumentoList()),
  insertTipoDocumento: (tipoDocumento) => dispatch(operations.insertTipoDocumento(tipoDocumento)),
  insertPessoaDocumentacao: (data, idLimite, idPessoa) => dispatch(
    operations.insertPessoaDocumentacao(data, idLimite, idPessoa),
  ),
  uploadArquivoTemporario: (file) => dispatch(operations.uploadArquivoTemporario(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JuridicoForm);
