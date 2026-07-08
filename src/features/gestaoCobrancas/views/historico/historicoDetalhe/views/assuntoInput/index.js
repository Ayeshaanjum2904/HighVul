import { connect } from 'react-redux';

import AssuntoInput from './assuntoInput';

const mapStateToProps = ({ cobrancas }) => ({
  assunto: cobrancas.historico.details.historicoDetail?.assunto,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AssuntoInput);
