import { connect } from 'react-redux';

import InputMotivo from './inputMotivo';

const mapStateToProps = ({ limites }) => ({
  motivo: limites.details.modal.detalheSolicitacao?.motivo,

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputMotivo);
