import { connect } from 'react-redux';

import operations from './redux/operations';

import ComunicadosPage from './comunicadosPage';

const mapStateToProps = ({ comunicados }) => ({
  isModalOpen: comunicados.comunicados.modal.isModalOpen,
  snackbarErrors: comunicados.comunicados.page.snackbarErrors,
  page: comunicados.comunicados.page.pageParams.page,
  ipp: comunicados.comunicados.page.pageParams.ipp,
  totalItems: comunicados.comunicados.page.pageParams.totalItems,
  isLoading: comunicados.comunicados.page.requestStatus.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  getFilters: () => dispatch(operations.getFilters()),
  getComunicados: () => dispatch(operations.getComunicados()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbars(id)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  setSortingOrder: (nome, ordem) => dispatch(
    operations.setSortingOrder(nome, ordem),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComunicadosPage);
