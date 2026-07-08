import { connect } from 'react-redux';

import RegionalInput from './inputRegionalJeep';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.grupos.details.updateConcessionaria.data?.regionalJeep,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalInput);
