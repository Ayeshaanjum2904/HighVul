import { connect } from 'react-redux';

import ContaPaiInput from './inputContaPai';

const mapStateToProps = ({ cobrancas }) => ({
  contaPai: cobrancas.grupos.details.updateConcessionaria.data?.contaPai,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContaPaiInput);
