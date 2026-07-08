import { connect } from 'react-redux';

import ButtonFilterPedidos from './buttonFilterPedidos';
import operations from '../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  isFilterSelected: pedidos?.page?.isFilterSelected,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  applyFilter: () => {
    dispatch(operations.setPage(0));
  },
  clearFilter: () => {
    dispatch(operations.clearFilters());
    dispatch(operations.setPage(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilterPedidos);
