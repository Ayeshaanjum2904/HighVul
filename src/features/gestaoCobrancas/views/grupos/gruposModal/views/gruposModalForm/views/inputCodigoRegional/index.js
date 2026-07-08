import { connect } from 'react-redux';

import InputCodigoRegional from './inputCodigoRegional';

const mapStateToProps = ({ cobrancas }) => ({
  regionalId: cobrancas.grupos.modal.grupo.regionalId,
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCodigoRegional);
