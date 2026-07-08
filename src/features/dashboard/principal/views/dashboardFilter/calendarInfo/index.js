import { connect } from 'react-redux';

import CalendarInfo from './calendarInfo';

import operations from '../../../redux/reduxPage/operations/operations';

const mapStateToProps = ({ dashboard }) => ({
  filterType: dashboard.principal.page.filters?.filterType,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterType: (type) => dispatch(operations.setFilterType(type)),
  forceReload: (type) => dispatch(operations.forceReload(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarInfo);
