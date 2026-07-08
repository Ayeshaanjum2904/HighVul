import { connect } from 'react-redux';

import operations from './redux/operations';
import AnalistasPage from './analistasPage';

const mapStateToProps = ({ cobrancas }) => ({
  isModalOpen: cobrancas.analistas.modal.isOpen,
  snackbarErrors: cobrancas.analistas.page.snackbarErrors,
  isLoading: cobrancas.analistas.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAssociacoes: () => dispatch(operations.getAssociacoes()),
  resetStore: () => dispatch(operations.resetStore()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalistasPage);
