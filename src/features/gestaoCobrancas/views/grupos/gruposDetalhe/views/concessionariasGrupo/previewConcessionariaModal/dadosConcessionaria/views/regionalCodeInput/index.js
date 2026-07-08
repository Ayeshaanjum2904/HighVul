import { connect } from 'react-redux';

import RegionalCodeInput from './inputRegionalCode';

const mapStateToProps = ({ cobrancas }) => ({
  regionalCode: cobrancas.grupos.details.updateConcessionaria.data?.codigoRegional,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalCodeInput);
