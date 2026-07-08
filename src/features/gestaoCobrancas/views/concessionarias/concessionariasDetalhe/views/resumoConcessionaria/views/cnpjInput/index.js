import { connect } from 'react-redux';

import CnpjInput from './inputCnpj';

const mapStateToProps = ({ cobrancas }) => ({
  cnpj: cobrancas.concessionarias.details.concessionaria?.cnpj,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CnpjInput);
