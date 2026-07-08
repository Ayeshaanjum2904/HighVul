import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import BrandFilter from './brandFilter';

const mapStateToProps = ({ limitesAprovados }) => ({
  brand: limitesAprovados.filters.brand,
  brands: selectors.brandList(limitesAprovados),
  isLoading: limitesAprovados.limitesAprovadosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setBrand: (brand) => dispatch(operations.setBrand(brand)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter);
