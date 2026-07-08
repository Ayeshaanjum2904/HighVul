import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import BrandFilter from './brandFilter';

const mapStateToProps = ({ comunicados }) => ({
  brand: comunicados.comunicados.page.filters.brand,
  brandList: comunicados.comunicados?.page?.filters?.brandList,
  isLoading: comunicados.comunicados.page.requestStatus.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (brand) => dispatch(operations.setBrand(brand)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter);
