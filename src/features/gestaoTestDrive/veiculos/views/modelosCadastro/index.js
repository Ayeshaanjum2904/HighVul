import { connect } from 'react-redux';

import ModelosCadastro from './modelosCadastro';
import operations from './redux/operations';
import selectors from './redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  snackbarErrors: veiculos.cadastroModelo.snackbarErrors,
  disabled: selectors.isCloseDisabled(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.closeModal()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModelosCadastro);
