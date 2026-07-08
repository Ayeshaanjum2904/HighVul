import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputSerie from './inputSerie';

const mapStateToProps = ({ veiculos }) => ({
  descricaoSerie: veiculos.cadastroVeiculo.veiculo.descricaoSerie,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputSerie);
