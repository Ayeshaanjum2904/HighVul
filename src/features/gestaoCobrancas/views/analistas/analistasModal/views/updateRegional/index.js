import { connect } from 'react-redux';

import UpdateRegional from './updateRegional';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  disabled: selectors.disableCloseButton(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.closeModal()),
  getAnalistas: () => dispatch(operations.getAnalistas()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRegional);
