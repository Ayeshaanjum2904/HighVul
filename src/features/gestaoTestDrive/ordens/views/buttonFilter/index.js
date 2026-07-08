import { connect } from 'react-redux';
import operations from '../../redux/operations';
import ButtonFilter from './buttonFilter';

const mapStateToProps = ({ ordens }) => ({
  isFilterSelected: ordens.isFilterSelected,
  loadingStatus: ordens.loadingStatus,
  loadingProdutos: ordens.loadingProdutos,
});

const mapDispatchToProps = (dispatch) => ({
  onApply: () => dispatch(operations.applyFilters()),
  onClear: () => dispatch(operations.clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
