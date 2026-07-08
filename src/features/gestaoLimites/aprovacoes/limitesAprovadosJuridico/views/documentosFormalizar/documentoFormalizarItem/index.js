import { connect } from 'react-redux';
import DocumentosFormalizarItem from './documentosFormalizarItem';
import operations from '../../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteDocumento: (idLimitesAprovadosHub, idDocumento) => dispatch(
    operations.deleteDocumentoFormalizar({
      idLimitesAprovadosHub,
      itemsToDelete: [idDocumento],
      filesToDelete: [],
      items: [],
    }),
  ),

  validarDocumentoJuridico: (idDocumento, validar, idLimite) => dispatch(
    operations.validarDocumentoFormalizarJuridico(idDocumento, validar, idLimite),
  ),

});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentosFormalizarItem);
