import { connect } from 'react-redux';
import DocumentosFormalizar from './documentosFormalizar';
import operations from '../../redux/operations';
import selectors from '../../../limitesAprovadosPage/redux/selectors';

const mapStateToProps = ({ limitesAprovadosJuridico, auth }) => ({
  tipoDocumentos: limitesAprovadosJuridico.tipoDocumentoFormalizar.documentoList,
  isLoadingTipoDocumentos: limitesAprovadosJuridico.tipoDocumentoFormalizar.isLoading,
  documentosFormalizar: limitesAprovadosJuridico.documentosFormalizar.documentosFormalizarList,
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentosFormalizar);
