import { connect } from 'react-redux';

import InsertRegional from './insertRegional';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  disabled: selectors.disableCloseButton(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.closeModal()),
  resetStore: () => dispatch(operations.resetStore()),
  getRegionais: () => dispatch(operations.getRegionais()),
  getMarcas: () => dispatch(operations.getMarcas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertRegional);
