import { connect } from 'react-redux';

import operations from '../../redux/operations';
import FilterButton from '../../../../../../../common/controls/buttonFilter';

const mapStateToProps = ({ cobrancas }) => ({
  isFilterSelected: cobrancas?.analistas?.page?.isFilterSelected,
  isLoading: cobrancas?.analistas?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPage(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
