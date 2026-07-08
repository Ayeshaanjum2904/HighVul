import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import StatusFilter from './statusFilter';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  status: limitesAprovados.filters.status,
  statusList: selectors.statusList(limitesAprovados),
  isLoading: limitesAprovados.limitesAprovadosList.isLoading,
  user: auth.user,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => dispatch(operations.setStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusFilter);
