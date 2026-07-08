import { connect } from 'react-redux';

import CadastroVeiculoButton from './cadastroVeiculoButton';

import operations from '../../redux/operations';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ auth }) => ({
  hasPermissionCadastroVeiculo: selectors.hasPermissionCadastroVeiculo(auth),
});

const mapDispatchToProps = (dispatch) => ({
  setVeiculosPage: (page) => dispatch(operations.setVeiculosPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CadastroVeiculoButton);
