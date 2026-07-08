import { connect } from 'react-redux';

import ConsultorJeepInput from './inputConsultorJeep';

const mapStateToProps = ({ cobrancas }) => ({
  consultor: cobrancas.grupos.details.updateConcessionaria.data?.consultorJeep,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultorJeepInput);
