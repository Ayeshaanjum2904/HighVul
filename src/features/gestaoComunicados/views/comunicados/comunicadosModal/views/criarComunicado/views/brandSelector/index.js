import { connect } from 'react-redux';

import BrandSelector from './brandSelector';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  brands: comunicados.comunicados.modal.selectors.brands,
  selectedBrands: comunicados.comunicados.modal.brands,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedBrands: (brands) => dispatch(operations.setBrand(brands)),
  getBrand: () => dispatch(operations.getBrand()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandSelector);
