import { connect } from 'react-redux';

import Operations from './redux/operations';
import HistoricoTaxaPage from './historicoPage';

const mapStateToProps = () => ({ taxas }) => ({
  snackbarErrors: taxas?.historico?.snackbarErrors,
  page: taxas?.historico?.paginacao?.page,
  ipp: taxas?.historico?.paginacao?.ipp,
  totalItems: taxas?.historico?.paginacao?.totalItems,
  isLoading: taxas?.historico?.requestStatus?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getHistorico: () => dispatch(Operations.getHistorico()),
  onSnackbarClose: (id) => dispatch(Operations.dismissSnackbar(id)),
  setPage: (page) => { dispatch(Operations.setPage(page)); },
  setIpp: (ipp) => dispatch(Operations.setIpp(ipp)),
  resetStore: () => dispatch(Operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoTaxaPage);
