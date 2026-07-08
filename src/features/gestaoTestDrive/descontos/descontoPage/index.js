import { connect } from 'react-redux';
import DescontosPage from './descontosPage';

import operations from './redux/operations';

const mapStateToProps = ({ descontos }) => ({
  snackbarErrors: descontos.page.snackbar.errors,
  page: descontos.page.pageParams.page,
  ipp: descontos.page.pageParams.ipp,
  totalItems: descontos.page.pageParams.totalItens,
  isLoading: descontos.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => { dispatch(operations.resetStore()); },
  getDescontos: () => { dispatch(operations.getDescontos()); },
  onCloseSnackbar: (id) => { dispatch(operations.dismissSnackbar(id)); },
  setPage: (page) => dispatch(operations.setPageNumber(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DescontosPage);
