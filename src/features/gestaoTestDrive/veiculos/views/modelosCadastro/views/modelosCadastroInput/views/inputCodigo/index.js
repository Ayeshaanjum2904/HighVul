import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputCodigo from './inputCodigo';

const mapStateToProps = ({ veiculos }) => ({
  codigoModelo: veiculos.cadastroModelo.modelo.codigoModelo,
  disabled: veiculos.cadastroVeiculo.mvsDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  updateModeloProperty: (propertyName, value) => {
    dispatch(operations.updateModeloProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCodigo);
