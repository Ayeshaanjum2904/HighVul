import { connect } from 'react-redux';

import ConsultorFcaInput from './inputConsultorFca';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  consultor: selectors.selectConsultorFca(cobrancas),
  isDisabled: cobrancas.concessionarias.details.isDisabled,
  errors: cobrancas.concessionarias.details.statusRequest.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(operations.setUpdateData('consultorFca', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultorFcaInput);
