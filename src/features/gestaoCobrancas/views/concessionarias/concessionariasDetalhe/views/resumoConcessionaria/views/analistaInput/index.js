import { connect } from 'react-redux';

import AnalistaInput from './inputAnalista';

const mapStateToProps = ({ cobrancas }) => ({
  analistaName: cobrancas.concessionarias.details.concessionaria?.analistaFinanciamento,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalistaInput);
