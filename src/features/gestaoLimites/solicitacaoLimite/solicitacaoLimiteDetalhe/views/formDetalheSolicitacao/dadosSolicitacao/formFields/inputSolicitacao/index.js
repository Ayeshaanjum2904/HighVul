import { connect } from 'react-redux';

import InputSolicitacao from './inputSolicitacao';

const mapStateToProps = ({ limites }) => ({
  solicitacao: limites.details.modal.detalheSolicitacao?.solicitacao,
});

export default connect(mapStateToProps)(InputSolicitacao);
