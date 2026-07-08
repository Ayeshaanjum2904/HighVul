import { connect } from 'react-redux';

import ConsultorFcaInput from './inputConsultorFca';

const mapStateToProps = ({ cobrancas }) => ({
  consultor: cobrancas.grupos.details.updateConcessionaria.data?.consultorFca,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultorFcaInput);
