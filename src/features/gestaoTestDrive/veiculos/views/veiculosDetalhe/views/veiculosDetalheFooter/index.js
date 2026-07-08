import { connect } from 'react-redux';

import VeiculosDetalheFooter from './veiculosDetalheFooter';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ auth, veiculos }) => ({
  hasPermissionCadastroVeiculo: selectors.hasPermissionCadastroVeiculo(auth),
  snackbarErrors: veiculos.details.snackbarErrors,
});

const mapDispatchToProps = (dispatch) => ({
  deleteVeiculo: () => { dispatch(operations.deleteVeiculo()); },
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeiculosDetalheFooter);
