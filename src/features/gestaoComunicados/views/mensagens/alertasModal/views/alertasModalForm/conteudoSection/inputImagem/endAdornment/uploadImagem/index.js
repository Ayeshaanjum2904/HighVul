import { connect } from 'react-redux';
import UploadImagem from './uploadImagem';

import operations from '../../../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  isLoading: comunicados.alertas.modal.uploadImagem.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  uploadImagem: (file) => dispatch(operations.uploadImagem(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImagem);
