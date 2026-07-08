import { connect } from 'react-redux';

import operations from './redux/operations';
import GerentesPage from './gerentesPage';

const mapStateToProps = ({ cobrancas }) => ({
  isModalOpen: cobrancas.gerentes.modal.isOpen,
  snackbarErrors: cobrancas.gerentes.page.snackbarErrors,
  page: cobrancas.gerentes.page.pageParams.page,
  ipp: cobrancas.gerentes.page.pageParams.ipp,
  totalItems: cobrancas.gerentes.page.pageParams.totalItems,
  isLoading: cobrancas.gerentes.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAssociacoes: () => dispatch(operations.getAssociacoes()),
  resetStore: () => dispatch(operations.resetStore()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GerentesPage);
