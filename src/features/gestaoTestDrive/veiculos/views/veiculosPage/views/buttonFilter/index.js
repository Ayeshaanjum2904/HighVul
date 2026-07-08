import { connect } from 'react-redux';

import ButtonFilter from 'common/controls/buttonFilter';
import operations from '../../redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  isFilterSelected: veiculos?.page?.isFilterSelected,
  isLoading: veiculos?.page?.veiculosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPage(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
