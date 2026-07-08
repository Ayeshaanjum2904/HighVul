import { connect } from 'react-redux';

import CorpoEmail from './corpoEmail';

const mapStateToProps = ({ cobrancas }) => ({
  corpoEmail: cobrancas.historico.details.historicoDetail?.corpoEmail,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CorpoEmail);
