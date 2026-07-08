import { connect } from 'react-redux';

import InputEmail from './inputEmail';

const mapStateToProps = ({ limites }) => ({
  usuarioEmail: limites.details.modal.detalheSolicitacao?.solicitanteEmail,
});

export default connect(mapStateToProps)(InputEmail);
