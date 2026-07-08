import { connect } from 'react-redux';

import AnalistaInput from './inputAnalista';

const mapStateToProps = ({ cobrancas }) => ({
  analistaName: cobrancas.grupos.details.updateConcessionaria.data?.analistaFinanciamento,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalistaInput);
