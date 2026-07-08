import { connect } from 'react-redux';

import ButtonFilter from 'common/controls/buttonFilter';
import operations from '../../../redux/operations';

const mapStateToProps = ({ taxas }) => ({
  isFilterSelected: taxas.historico?.isFilterSelected,
  isLoading: taxas.historico?.requestStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPage(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
