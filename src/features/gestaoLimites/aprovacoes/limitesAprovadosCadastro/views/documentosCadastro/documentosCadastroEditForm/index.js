import { connect } from 'react-redux';
import documentoCadastroEditForm from './documentoCadastroEditForm';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovadosCadastro }) => ({
  documentoList: limitesAprovadosCadastro.documento.documentoList,
  loadingDocumentoList: limitesAprovadosCadastro.documento.isLoading,
  relacionamentoList: limitesAprovadosCadastro.relacionamento.relacionamentoList,
  loadingRelacionamentoList: limitesAprovadosCadastro.relacionamento.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  insertRelacionamento: (relacao) => dispatch(operations.insertTipoRelacionamento(relacao)),
  deleteRelacionamento: (idRelacionamento) => dispatch(
    operations.deleteTipoRelacionamento(idRelacionamento),
  ),
  onSubmit: (idLimite, data) => dispatch(operations.updatePessoaDocumentacao(idLimite, data)),
  uploadArquivoTemporario: async (file) => dispatch(operations.uploadArquivoTemporario(file)),
  deletePessoaDocumentacao: (idPessoaDocumentacao, idLimite) => dispatch(
    operations.deletePessoaDocumentacao(idPessoaDocumentacao, idLimite),
  ),
  invalidarDocumento: (documento, motivo, closeModal) => dispatch(
    operations.deletePessoaDocumento(documento, motivo, closeModal),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(documentoCadastroEditForm);
