import { connect } from 'react-redux';

import TipoConcessionariaInput from './inputConcessionariaTipo';

const mapStateToProps = ({ cobrancas }) => ({
  tipo: cobrancas.concessionarias.details.concessionaria?.tipo,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TipoConcessionariaInput);
