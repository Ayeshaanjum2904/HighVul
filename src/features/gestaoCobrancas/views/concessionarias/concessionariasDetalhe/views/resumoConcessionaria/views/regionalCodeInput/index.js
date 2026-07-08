import { connect } from 'react-redux';

import RegionalCodeInput from './inputRegionalCode';

const mapStateToProps = ({ cobrancas }) => ({
  regionalCode: cobrancas.concessionarias.details.concessionaria?.codigoRegional,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalCodeInput);
