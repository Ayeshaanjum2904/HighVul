import { connect } from 'react-redux';

import InputTipo from './inputTipo';

const mapStateToProps = ({ limites }) => ({
  tipo: limites.details.modal.detalheSolicitacao?.tipo,
});

export default connect(mapStateToProps)(InputTipo);
