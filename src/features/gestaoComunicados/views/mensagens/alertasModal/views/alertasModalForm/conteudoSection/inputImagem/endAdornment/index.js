import { connect } from 'react-redux';
import operations from '../../../../../redux/operations';
import EndAdornment from './endAdornment';

const mapStateToProps = ({ comunicados }) => ({
  urlImagem: comunicados.alertas.modal.alerta.urlImagem,
  isLoading: comunicados.alertas.modal.uploadImagem.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  deleteImagem: () => dispatch(operations.deleteImagem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndAdornment);
