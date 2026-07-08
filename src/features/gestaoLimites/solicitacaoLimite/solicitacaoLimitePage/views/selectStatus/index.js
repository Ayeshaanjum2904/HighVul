import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selector from '../../redux/selectors';
import SelectStatus from './selectStatus';

const mapStateToProps = ({ limites }) => ({
  status: limites.page.filters.status,
  statusList: selector.statusFilter(limites),
  isLoading: limites?.page?.solicitacoesList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => dispatch(operations.setStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectStatus);
