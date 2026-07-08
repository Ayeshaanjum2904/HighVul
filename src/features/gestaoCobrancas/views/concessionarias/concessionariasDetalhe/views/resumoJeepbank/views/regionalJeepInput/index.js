import { connect } from 'react-redux';

import RegionalInput from './inputRegionalJeep';
import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  regional: selectors.selectRegionalJeep(cobrancas),
  isDisabled: cobrancas.concessionarias.details.isDisabled,
  errors: cobrancas.concessionarias.details.statusRequest.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(operations.setUpdateData('regionalJeep', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalInput);
