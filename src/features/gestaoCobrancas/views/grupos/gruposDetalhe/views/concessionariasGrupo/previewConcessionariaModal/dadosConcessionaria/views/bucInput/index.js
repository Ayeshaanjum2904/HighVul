import { connect } from 'react-redux';

import BucInput from './inputBuc';

const mapStateToProps = ({ cobrancas }) => ({
  buc: cobrancas.grupos.details.updateConcessionaria.data?.id,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BucInput);
