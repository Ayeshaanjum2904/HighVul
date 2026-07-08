import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

import SelectStatus from './selectStatus';

const mapStateToProps = ({ ordens }) => ({
  status: ordens.filters.status,
  statusList: selectors.statusList(ordens),
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => dispatch(operations.setStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectStatus);
