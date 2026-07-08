import { connect } from 'react-redux';

import RegionalInput from './inputRegional';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.concessionarias.details.concessionaria?.regional,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalInput);
