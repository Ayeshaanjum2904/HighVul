import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

import InputValor from './inputValor';

const mapStateToProps = ({ veiculos }) => ({
  valor: veiculos.cadastroVeiculo.veiculo.valor,
  isNovoValorValido: selectors.validateValorMaximo(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputValor);
