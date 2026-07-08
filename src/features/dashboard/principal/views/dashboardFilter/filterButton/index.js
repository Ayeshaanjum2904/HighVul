import { connect } from 'react-redux';

import FilterButton from 'common/controls/buttonFilter';
import operations from '../../../redux/reduxPage/operations/operations';
import operationsSetFilters from '../../../redux/reduxPage/operations/operationsSetFilters';

const mapStateToProps = ({ dashboard }) => ({
  isFilterSelected: dashboard.principal.page.isEnableButton,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.forceReload());
    dispatch(operationsSetFilters.disableFilterButton());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
