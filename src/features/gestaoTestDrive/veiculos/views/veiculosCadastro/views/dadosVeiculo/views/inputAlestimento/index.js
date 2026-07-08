import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputAlestimento from './inputAlestimento';

const mapStateToProps = ({ veiculos }) => ({
  allestimento: veiculos.cadastroVeiculo.veiculo.allestimento,
  disabled: veiculos.cadastroVeiculo.allestimentoDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputAlestimento);
