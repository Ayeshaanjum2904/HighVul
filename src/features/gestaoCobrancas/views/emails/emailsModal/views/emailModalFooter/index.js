import { connect } from 'react-redux';

import EmailModalFooter from './emailModalFooter';

const mapStateToProps = ({ cobrancas }) => ({
  status: cobrancas.emails.modal.modalTemplate,
  isError: cobrancas.emails.modal.updateStatus?.isError,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EmailModalFooter);
