import { connect } from 'react-redux';

import operations from './redux/operations';
import LimitesAprovadosPage from './limitesAprovadosPage';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  snackbarErrors: limitesAprovados.snackbarErrors,
  limitesAprovadosList: limitesAprovados.limitesAprovadosList.limites,
  isLoadingList: limitesAprovados.limitesAprovadosList.isLoading,
  isErrorList: limitesAprovados.limitesAprovadosList.isError,
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
  getLimitesAprovados: (tipoUsuario) => dispatch(operations.getLimitesAprovados(tipoUsuario)),
  getFilters: () => dispatch(operations.getFilters()),
  resetStore: () => dispatch(operations.resetStore()),
  setIdLimite: (idLimite) => dispatch(operations.setIdLimite(idLimite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LimitesAprovadosPage);
