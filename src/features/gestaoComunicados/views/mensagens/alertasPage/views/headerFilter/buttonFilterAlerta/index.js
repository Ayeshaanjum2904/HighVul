import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import ButtonFilterAlerta from './buttonFilterAlerta';

const mapStateToProps = ({ comunicados }) => ({
  isFilterSelected: comunicados.alertas.page.isFilterSelected,
});

const mapDispatchToProps = (dispatch) => ({
  applyFilter: () => {
    dispatch(operations.setFilters(true));
  },
  clearFilter: () => {
    dispatch(operations.clearFilters());
    dispatch(operations.setFilters(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilterAlerta);
