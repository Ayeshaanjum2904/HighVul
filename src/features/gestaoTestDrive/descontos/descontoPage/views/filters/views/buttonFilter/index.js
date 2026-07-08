import { connect } from 'react-redux';

import ButtonFilter from 'common/controls/buttonFilter';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ descontos }) => ({
  isFilterSelected: descontos?.page?.isFilterSelected,
  isLoading: descontos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPageNumber(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
