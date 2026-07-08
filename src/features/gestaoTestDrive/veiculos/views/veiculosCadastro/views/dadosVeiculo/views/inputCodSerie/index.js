import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputCodSerie from './inputCodSerie';

const mapStateToProps = ({ veiculos }) => ({
  codigoSerie: veiculos.cadastroVeiculo.veiculo.codigoSerie,
  disabled: veiculos.cadastroVeiculo.mvsDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCodSerie);
