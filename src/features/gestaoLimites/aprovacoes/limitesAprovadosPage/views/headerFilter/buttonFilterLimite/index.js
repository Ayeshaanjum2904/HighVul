import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import ButtonFilterLimite from './buttonFilterLimite';

const mapStateToProps = ({ limitesAprovados }) => ({
  isFilterSelected: limitesAprovados.isFilterSelected,
});

const mapDispatchToProps = (dispatch) => ({
  applyFilter: (tipoUsuario) => {
    dispatch(operations.setIsFilterSelected(false));
    dispatch(operations.setPageParams('page', 0, tipoUsuario, true));
  },
  clearFilter: (tipoUsuario) => {
    dispatch(operations.clearFilters());
    dispatch(operations.setPageParams('page', 0, tipoUsuario, true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilterLimite);
