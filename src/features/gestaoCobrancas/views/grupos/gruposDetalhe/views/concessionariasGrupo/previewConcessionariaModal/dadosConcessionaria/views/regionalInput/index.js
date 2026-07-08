import { connect } from 'react-redux';

import RegionalInput from './inputRegional';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.grupos.details.updateConcessionaria.data?.regional,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalInput);
