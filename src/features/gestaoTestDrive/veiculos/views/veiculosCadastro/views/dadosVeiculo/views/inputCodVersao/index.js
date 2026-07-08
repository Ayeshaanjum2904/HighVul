import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputCodVersao from './inputCodVersao';

const mapStateToProps = ({ veiculos }) => ({
  codigoVersao: veiculos.cadastroVeiculo.veiculo.codigoVersao,
  disabled: veiculos.cadastroVeiculo.mvsDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCodVersao);
