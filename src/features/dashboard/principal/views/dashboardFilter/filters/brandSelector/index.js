import { connect } from 'react-redux';

import BrandSelector from './brandSelector';
import operations from '../../../../redux/reduxPage/operations/operations';

const mapStateToProps = ({ dashboard }) => ({
  brands: dashboard.principal.page.brands.data,
  selectedBrands: dashboard.principal.page.filters?.selectedBrands,
  brandsIsLoading: dashboard.principal.page.brands?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedBrands: (brands) => dispatch(operations.setSelectedBrands(brands)),
  filterModelos: async () => { await dispatch(operations.filterModelos()); },
  filterGrupos: async () => { await dispatch(operations.filterGrupos()); },
  filterPontos: async () => { await dispatch(operations.filterPontos()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandSelector);
