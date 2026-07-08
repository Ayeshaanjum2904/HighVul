import { connect } from 'react-redux';

import ConsultorJeepInput from './inputConsultorJeep';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  consultor: selectors.selectConsultorJeep(cobrancas),
  isDisabled: cobrancas.concessionarias.details.isDisabled,
  errors: cobrancas.concessionarias.details.statusRequest.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(operations.setUpdateData('consultorJeep', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultorJeepInput);
