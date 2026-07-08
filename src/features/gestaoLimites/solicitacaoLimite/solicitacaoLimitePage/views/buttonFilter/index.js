import { connect } from 'react-redux';

import ButtonFilter from 'common/controls/buttonFilter';
import operations from '../../redux/operations';

const mapStateToProps = ({ limites }) => ({
  isFilterSelected: limites?.page?.isFilterSelected,
  isLoading: limites?.page?.solicitacoesList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPage(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
