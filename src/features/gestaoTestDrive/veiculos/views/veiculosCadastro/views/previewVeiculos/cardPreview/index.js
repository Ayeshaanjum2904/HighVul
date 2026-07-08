import { connect } from 'react-redux';

import CardPreview from './cardPreview';

import operations from '../../../redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  urlVeiculo: veiculos.cadastroVeiculo.veiculo.urlVeiculo,
});

const mapDispatchToProps = (dispatch) => ({
  setUrlVeiculo: (urlVeiculo) => {
    dispatch(operations.setUrlVeiculo(urlVeiculo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPreview);
