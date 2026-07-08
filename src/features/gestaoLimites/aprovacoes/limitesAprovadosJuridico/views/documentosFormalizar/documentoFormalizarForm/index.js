import { connect } from 'react-redux';
import { SnackbarOperations } from 'modules/snackbar';
import DocumentoFormalizarForm from './documentoFormalizarForm';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovadosJuridico }) => ({
  documentoList: limitesAprovadosJuridico.tipoDocumentoFormalizar.documentoList,
  loadingDocumentoList: limitesAprovadosJuridico.tipoDocumentoFormalizar.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  createDocumento: (tipoDocumento) => dispatch(
    operations.insertTipoDocumentoFormalizar(tipoDocumento),
  ),
  deleteDocumento: (idTipoDocumento) => dispatch(
    operations.deleteTipoDocumentoFormalizar(idTipoDocumento),
  ),
  getDocumentoList: () => dispatch(operations.getTipoDocumentoFormalizarList()),
  onSubmit: (documento) => dispatch(operations.insertDocumentoFormalizar(documento)),
  uploadAnexo: async (file) => dispatch(operations.uploadArquivoTemporario(file)),
  uploadMultiplosAnexos: async (files) => dispatch(
    operations.uploadMultiplosArquivosTemporarios(files),
  ),
  downloadAnexo: (idDocumento) => dispatch(operations.getDocumentoDownload(idDocumento)),
  handleInvalidAnexo: (message) => dispatch(SnackbarOperations.addSnackbar(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentoFormalizarForm);
