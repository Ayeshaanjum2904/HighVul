import { connect } from 'react-redux';

import ErrorFooter from './errorFooter';

import operations from '../../redux/reduxPage/operations/operations';
import * as selectors from '../../redux/reduxPage/selectors';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: selectors.isLoading(dashboard),
  errorParams: selectors.errorParams(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(operations.loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorFooter);
