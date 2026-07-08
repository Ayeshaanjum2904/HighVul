import { connect } from 'react-redux';

import CadastroVeiculoButton from './cadastroVeiculoButton';

import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  disabled: selectors.isSendEnabled(veiculos),
  isLoading: veiculos.cadastroVeiculo.sendVeiculo.isLoading,
  buttonTitle: selectors.selectButtonTittle(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  sendVeiculo: () => dispatch(operations.sendVeiculo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CadastroVeiculoButton);
