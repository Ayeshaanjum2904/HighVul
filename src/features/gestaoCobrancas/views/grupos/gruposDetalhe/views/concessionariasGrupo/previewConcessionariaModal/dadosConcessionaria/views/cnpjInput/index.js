import { connect } from 'react-redux';

import CnpjInput from './inputCnpj';

const mapStateToProps = ({ cobrancas }) => ({
  cnpj: cobrancas.grupos.details.updateConcessionaria.data?.cnpj,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CnpjInput);
