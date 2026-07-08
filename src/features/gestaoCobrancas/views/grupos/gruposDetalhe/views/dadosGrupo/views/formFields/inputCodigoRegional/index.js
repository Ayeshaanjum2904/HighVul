import { connect } from 'react-redux';

import InputCodigoRegional from './inputCodigoRegional';

import selectors from '../../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  regionalId: selectors.select.regional(cobrancas),
  errors: cobrancas.grupos.details.updateGrupo.errors,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCodigoRegional);
