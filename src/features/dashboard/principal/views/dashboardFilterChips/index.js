import { connect } from 'react-redux';
import DashboardFilterChips from './dashboardFilterChips';

import * as selectors from '../../redux/reduxPage/selectors';
import operations from '../../redux/reduxPage/operations/operations';

const mapStateToProps = ({ dashboard }) => ({
  filtroData: selectors.formattedDateFilter(dashboard),
  selectedBrands: dashboard.principal.page.filters?.selectedBrands,
  pontos: dashboard.principal.page.filters?.selectedPonto,
  selectedGrupo: dashboard.principal.page.filters?.selectedGrupo,
  selectedRegional: dashboard.principal.page.filters?.selectedRegional,
  selectedModelos: dashboard.principal.page.filters?.selectedModelos,
  concessionaria: dashboard.principal.page.filters?.concessionaria,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterType: (type) => dispatch(operations.setFilterType(type)),
  setBrands: (brands) => dispatch(operations.setSelectedBrands(brands)),
  setPonto: (ponto) => dispatch(operations.setSelectedPontos(ponto)),
  setGrupo: (grupo) => dispatch(operations.setSelectedGrupo(grupo)),
  setRegional: (regional) => dispatch(operations.setSelectedRegional(regional)),
  setModelos: (modelos) => dispatch(operations.setSelectedModelos(modelos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFilterChips);
