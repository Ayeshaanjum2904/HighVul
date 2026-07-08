import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import ButtonFilterComunicado from './buttonFilterComunicado';

const mapStateToProps = ({ comunicados }) => ({
  isFilterSelected: comunicados.comunicados.page.isFilterSelected,
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilterComunicado);
