import { connect } from 'react-redux';

import DashboardFilter from './dashboardFilter';
import operations from '../../redux/reduxPage/operations/operations';
import * as selectors from '../../redux/reduxPage/selectors';

const mapStateToProps = ({ dashboard }) => ({
  startDate: dashboard.principal.page.filters?.startDate,
  endDate: dashboard.principal.page.filters?.endDate,
  filterType: dashboard.principal.page.filters?.filterType,
  isLoading: selectors.isLoading(dashboard),
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (data) => dispatch(operations.setStartDate(data)),
  setEndDate: (data) => dispatch(operations.setEndDate(data)),
  setFilterType: (type) => dispatch(operations.setFilterType(type)),
  forceReload: () => dispatch(operations.forceReload()),
  getConcessionaria: () => dispatch(operations.getConcessionaria()),

  getGrupos: async () => { await dispatch(operations.getGrupos()); },
  getModelos: async () => { await dispatch(operations.getModelos()); },
  getBrands: async () => { await dispatch(operations.getBrands()); },
  getRegionais: async () => { await dispatch(operations.getRegionais()); },
  getPontos: async () => { await dispatch(operations.getPontos()); },
  setSelectedBrands: (brands) => dispatch(operations.setSelectedBrands(brands)),
  setSelectedRegional: (regionais) => dispatch(operations.setSelectedRegional(regionais)),
  disableFilterButton: () => dispatch(operations.disableFilterButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFilter);
