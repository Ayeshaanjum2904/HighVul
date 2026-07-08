import { connect } from 'react-redux';

import ContaPaiInput from './inputContaPai';

const mapStateToProps = ({ cobrancas }) => ({
  contaPai: cobrancas.concessionarias.details.concessionaria?.contaPai,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContaPaiInput);
