import { connect } from 'react-redux';

import ImagemVeiculo from './imagemVeiculo';

import operations from '../../redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  urlImagem: veiculos.cadastroVeiculo.uploadImagem.urlImagem,
});

const mapDispatchToProps = (dispatch) => ({
  deleteImagem: () => dispatch(operations.deleteImagem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagemVeiculo);
