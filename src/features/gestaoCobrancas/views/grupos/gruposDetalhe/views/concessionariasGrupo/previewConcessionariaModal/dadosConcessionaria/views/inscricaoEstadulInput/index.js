import { connect } from 'react-redux';

import InscricaoEstadualInput from './inputInscricaoEstadual';

const mapStateToProps = ({ cobrancas }) => ({
  inscricaoEstadual: cobrancas.grupos.details.updateConcessionaria.data?.inscricaoEstadual,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InscricaoEstadualInput);
