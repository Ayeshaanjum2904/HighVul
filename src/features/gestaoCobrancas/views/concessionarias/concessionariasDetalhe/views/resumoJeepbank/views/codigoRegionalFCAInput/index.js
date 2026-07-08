import { connect } from 'react-redux';

import ConsultorFcaInput from './inputCodigoRegional';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  codigo: selectors.selectCode(cobrancas),
  isDisabled: cobrancas.concessionarias.details.isDisabled,
  errors: cobrancas.concessionarias.details.statusRequest.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(operations.setUpdateData('codigoRegionalFca', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultorFcaInput);
