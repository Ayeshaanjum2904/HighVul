import { connect } from 'react-redux';
import DocumentoCadastroForm from './documentoCadastroForm';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ limitesAprovadosCadastro, auth }) => ({
  documentoList: limitesAprovadosCadastro.documento.documentoList,
  loadingDocumentoList: limitesAprovadosCadastro.documento.isLoading,
  relacionamentoList: limitesAprovadosCadastro.relacionamento.relacionamentoList,
  loadingRelacionamentoList: limitesAprovadosCadastro.relacionamento.isLoading,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  getDocumentoList: () => dispatch(operations.getTipoDocumentoList()),
  insertDocumento: (documento) => dispatch(operations.insertTipoDocumento(documento)),
  getRelacionamentoList: () => dispatch(operations.getTipoRelacionamentoList()),
  insertRelacionamento: (relacao) => dispatch(operations.insertTipoRelacionamento(relacao)),
  deleteDocumento: (idDocumento) => dispatch(operations.deleteTipoDocumento(idDocumento)),
  deleteRelacionamento: (idRelacionamento) => dispatch(
    operations.deleteTipoRelacionamento(idRelacionamento),
  ),
  onSubmit: (data) => dispatch(operations.insertDocumentosCadastro(data)),
  uploadArquivoTemporario: async (file) => dispatch(operations.uploadArquivoTemporario(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentoCadastroForm);
