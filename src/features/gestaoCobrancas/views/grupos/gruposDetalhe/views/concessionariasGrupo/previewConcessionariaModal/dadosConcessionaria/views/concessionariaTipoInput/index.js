import { connect } from 'react-redux';

import TipoConcessionariaInput from './inputConcessionariaTipo';

const mapStateToProps = ({ cobrancas }) => ({
  tipo: cobrancas.grupos.details.updateConcessionaria.data?.tipo,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TipoConcessionariaInput);
