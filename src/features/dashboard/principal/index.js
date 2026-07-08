import { connect } from 'react-redux';

import DashboardPage from './principalPage';

import operations from './redux/reduxPage/operations/operations';
import * as selectors from './redux/reduxPage/selectors';

const mapStateToProps = ({ dashboard }) => ({
  isError: selectors.hasError(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
