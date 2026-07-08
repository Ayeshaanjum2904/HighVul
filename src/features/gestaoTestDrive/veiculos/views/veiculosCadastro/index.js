import { connect } from 'react-redux';

import VeiculosCadastro from './veiculosCadastro';

import VeiculosPageOperations from '../veiculosPage/redux/operations';
import operations from './redux/operations';
import selectors from './redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  isCadastroModeloOpen: veiculos.cadastroModelo.isOpen,
  snackbarErrors: veiculos.cadastroVeiculo.snackbarErrors,
  title: selectors.selectPageTitle(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  setVeiculosPage: (page) => dispatch(VeiculosPageOperations.setVeiculosPage(page)),
  resetStore: () => dispatch(operations.resetStore()),
  getBrands: () => dispatch(operations.getBrands()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeiculosCadastro);
