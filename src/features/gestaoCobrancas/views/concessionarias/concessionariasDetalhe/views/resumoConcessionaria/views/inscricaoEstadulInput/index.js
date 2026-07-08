import { connect } from 'react-redux';

import InscricaoEstadualInput from './inputInscricaoEstadual';

const mapStateToProps = ({ cobrancas }) => ({
  inscricaoEstadual: cobrancas.concessionarias.details.concessionaria?.inscricaoEstadual,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InscricaoEstadualInput);
