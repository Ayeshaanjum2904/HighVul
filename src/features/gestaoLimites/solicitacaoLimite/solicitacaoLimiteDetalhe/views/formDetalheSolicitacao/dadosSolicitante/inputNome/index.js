import { connect } from 'react-redux';

import InputNome from './inputNome';

const mapStateToProps = ({ limites }) => ({
  usuarioNome: limites.details.modal.detalheSolicitacao?.solicitanteNome,
});

export default connect(mapStateToProps)(InputNome);
