import { connect } from 'react-redux';

import UploadImagem from './uploadImagem';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  isLoading: veiculos.cadastroModelo.uploadImagem.isLoading,
  urlSelecionada: selectors.selectUrlModelo(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  uploadImagem: (file) => dispatch(operations.uploadImagem(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImagem);
