import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputUrlVeiculo from './inputUrlVeiculo';

const mapStateToProps = ({ veiculos }) => ({
  urlVeiculo: veiculos.cadastroVeiculo.veiculo.urlVeiculo,
});

const mapDispatchToProps = (dispatch) => ({
  setUrlVeiculo: (urlVeiculo) => {
    dispatch(operations.setUrlVeiculo(urlVeiculo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputUrlVeiculo);
