import { connect } from 'react-redux';

import GrupoSelector from './grupoSelector';

import operations from '../../../../redux/reduxPage/operations/operations';
import * as selectors from '../../../../redux/reduxPage/selectors';

const mapStateToProps = ({ dashboard }) => ({
  grupos: selectors.formatGrupos(dashboard),
  selectedGrupo: dashboard.principal.page.filters?.selectedGrupo,
  gruposIsLoading: dashboard.principal.page.grupos?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setGrupo: (grupo) => dispatch(operations.setSelectedGrupo(grupo)),
  filterPontos: () => dispatch(operations.filterPontos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GrupoSelector);
