import { connect } from 'react-redux';

import DataEnvioInput from './dataEnvioInput';

const mapStateToProps = ({ cobrancas }) => ({
  data: cobrancas.historico.details.historicoDetail?.dataEnvio,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DataEnvioInput);
