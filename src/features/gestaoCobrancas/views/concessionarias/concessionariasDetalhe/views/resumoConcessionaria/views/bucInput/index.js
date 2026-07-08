import { connect } from 'react-redux';

import BucInput from './inputBuc';

const mapStateToProps = ({ cobrancas }) => ({
  buc: cobrancas.concessionarias.details.concessionaria.corretorId
    ? cobrancas.concessionarias.details.concessionaria?.corretorId
    : cobrancas.concessionarias.details.concessionaria?.id,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BucInput);
