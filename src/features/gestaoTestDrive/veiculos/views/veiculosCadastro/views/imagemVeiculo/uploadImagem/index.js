import { connect } from 'react-redux';

import UploadImagem from './uploadImagem';

import operations from '../../../redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  isLoading: veiculos.cadastroVeiculo.uploadImagem.isLoading,
  urlImagem: veiculos.cadastroVeiculo.uploadImagem.urlDownload
    || veiculos.cadastroVeiculo.uploadImagem.urlImagem,
});

const mapDispatchToProps = (dispatch) => ({
  uploadImagem: (file) => dispatch(operations.uploadImagem(file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImagem);
