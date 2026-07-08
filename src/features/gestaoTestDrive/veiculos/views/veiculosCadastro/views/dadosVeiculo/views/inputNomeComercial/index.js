import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputNomeComercial from './inputNomeComercial';

const mapStateToProps = ({ veiculos }) => ({
  nomeComercial: veiculos.cadastroVeiculo.veiculo.nomeComercial,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNomeComercial);
