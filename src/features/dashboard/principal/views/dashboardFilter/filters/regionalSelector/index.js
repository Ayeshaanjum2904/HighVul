import { connect } from 'react-redux';

import RegionalSelector from './regionalSelector';

import operations from '../../../../redux/reduxPage/operations/operations';
import selector from '../../../../redux/selector';

const mapStateToProps = ({ dashboard }) => ({
  regionais: selector.getRegionaisFilter(dashboard),
  selectedRegional: dashboard.principal.page.filters?.selectedRegional,
  regionaisIsLoading: dashboard.principal.page.regionais?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedRegional: (regional) => dispatch(operations.setSelectedRegional(regional)),
  filterGrupos: () => dispatch(operations.filterGrupos()),
  filterPontos: () => dispatch(operations.filterPontos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalSelector);
