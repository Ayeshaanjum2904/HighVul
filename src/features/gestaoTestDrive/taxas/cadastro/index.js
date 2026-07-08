import { connect } from 'react-redux';
import CadastroPage from './cadastroPage';

import operations from './redux/operations';

const mapStateToProps = ({ taxas }) => ({
  isModalOpen: taxas?.cadastro?.isModalOpen,
  isFormOpen: taxas?.cadastro?.isFormOpen,
  taxasCadastradas: taxas?.cadastro?.taxasCadastradas,
  snackbarErrors: taxas?.cadastro?.snackbarErrors,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CadastroPage);
