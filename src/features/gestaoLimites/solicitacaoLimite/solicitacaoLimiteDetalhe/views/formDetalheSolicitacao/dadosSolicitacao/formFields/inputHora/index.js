import { connect } from 'react-redux';

import InputHora from './inputHora';

const mapStateToProps = ({ limites }) => ({
  data: limites.details.modal.detalheSolicitacao?.data,
});

export default connect(mapStateToProps)(InputHora);
