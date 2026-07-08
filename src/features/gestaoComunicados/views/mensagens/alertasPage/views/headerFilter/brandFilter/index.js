import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import BrandFilter from './brandFilter';

const mapStateToProps = ({ comunicados }) => ({
  brand: comunicados.alertas.page.filters.brand,
  brandList: comunicados.alertas?.page?.filters?.brandList,
  isLoading: comunicados.alertas.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (brand) => dispatch(operations.setBrand(brand)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter);
