import { connect } from 'react-redux';

import GruposPage from './gruposPage';
import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isModalOpen: cobrancas.grupos.modal.isOpen,
  snackbarErrors: cobrancas.grupos.page.snackbarErrors,
});

const mapDispatchToProps = (dispatch) => ({
  getGrupos: () => dispatch(operations.getGrupos()),
  resetStore: () => dispatch(operations.resetStore()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GruposPage);
