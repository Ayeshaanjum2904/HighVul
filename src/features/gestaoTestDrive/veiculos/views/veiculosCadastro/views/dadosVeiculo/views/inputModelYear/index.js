import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputModelYear from './inputModelYear';

const mapStateToProps = ({ veiculos }) => ({
  modelYear: veiculos.cadastroVeiculo.veiculo.modelYear,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModelYear);
