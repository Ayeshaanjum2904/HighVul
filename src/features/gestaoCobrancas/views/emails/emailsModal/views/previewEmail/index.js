import { connect } from 'react-redux';

import PreviewEmail from './previewEmail';

const mapStateToProps = ({ cobrancas }) => ({
  assunto: cobrancas.emails.modal.template?.assuntoEmail,
  corpo: cobrancas.emails.modal.template?.corpoEmail,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewEmail);
