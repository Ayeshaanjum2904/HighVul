import { connect } from 'react-redux';
import CriarComunicado from './criarComunicado';
import operations from '../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  fileName: comunicados.comunicados.modal.fileName,
  urlFile: comunicados.comunicados.modal?.urlFile,
});

const mapDispatchToProps = (dispatch) => ({
  setFileName: (fileName) => dispatch(operations.setFileName(fileName)),
  deleteFile: () => dispatch(operations.deleteFile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CriarComunicado);
