import { connect } from 'react-redux';

import RegionalFCAInput from './inputRegionalFCA';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  regional: selectors.selectRegionalFCA(cobrancas),
  isDisabled: cobrancas.concessionarias.details.isDisabled,
  errors: cobrancas.concessionarias.details.statusRequest.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(operations.setUpdateData('descricaoRegionalFca', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalFCAInput);
