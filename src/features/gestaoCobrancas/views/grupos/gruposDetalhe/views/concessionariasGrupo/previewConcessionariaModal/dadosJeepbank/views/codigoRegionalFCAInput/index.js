import { connect } from 'react-redux';

import ConsultorFcaInput from './inputCodigoRegional';

const mapStateToProps = ({ cobrancas }) => ({
  codigo: cobrancas.grupos.details.updateConcessionaria.data?.codigoRegionalFca,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultorFcaInput);
