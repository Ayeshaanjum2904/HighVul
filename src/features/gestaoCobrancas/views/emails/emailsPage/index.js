import { connect } from 'react-redux';

import EmailsPage from './emailsPage';

import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  snackbarErrors: cobrancas.emails.page.snackbarErrors,
  isModalOpen: cobrancas.emails.modal.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  getTemplates: () => dispatch(operations.getTemplates()),
  getConfiguracoes: () => dispatch(operations.getConfiguracoes()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailsPage);
