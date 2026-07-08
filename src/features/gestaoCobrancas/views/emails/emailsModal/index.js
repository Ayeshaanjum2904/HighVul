import { connect } from 'react-redux';

import EmailsModal from './emailsModal';

import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  template: cobrancas.emails.modal.modalTemplate,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.closeModal()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailsModal);
