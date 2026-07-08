import { connect } from 'react-redux';
import EmailModalStatusBar from './emailModalStatusBar';

const mapStateToProps = ({ cobrancas }) => ({
  status: cobrancas.emails.modal.modalTemplate,
  isLoading: false,
});

export default connect(mapStateToProps, null)(EmailModalStatusBar);
