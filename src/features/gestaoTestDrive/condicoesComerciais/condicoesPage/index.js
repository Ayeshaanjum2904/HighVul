import { connect } from 'react-redux';
import CondicoesPage from './condicoesPage';

import operations from './redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  snackbarErrors: condicoesComerciais.page.snackbar.errors,
  page: condicoesComerciais.page.pageParams.page,
  ipp: condicoesComerciais.page.pageParams.ipp,
  totalItems: condicoesComerciais.page.pageParams.totalItens,
  isLoading: condicoesComerciais.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  getCondicoes: () => dispatch(operations.getCondicoes()),
  onCloseSnackbar: (id) => dispatch(operations.dismissSnackbar(id)),
  setPage: (page) => dispatch(operations.setPageNumber(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CondicoesPage);
