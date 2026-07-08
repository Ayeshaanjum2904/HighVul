import { connect } from 'react-redux';

import VeiculosPage from './veiculosPage';

import DetalheOperations from '../veiculosDetalhe/redux/operations';
import PageOperations from './redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  isOpen: veiculos.details.isOpen,
  snackbarErrors: veiculos.page.snackbarErrors,
  page: veiculos.page.veiculosList.page,
  ipp: veiculos.page.veiculosList.ipp,
  totalItems: veiculos.page.veiculosList.totalItems,
  isLoading: veiculos.page.veiculosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  closeDetalheVeiculo: () => dispatch(DetalheOperations.closeModal()),
  openDetalheVeiculo: (id) => dispatch(DetalheOperations.openModal(id)),
  resetStore: () => dispatch(PageOperations.resetStore()),
  getVeiculos: () => dispatch(PageOperations.getVeiculos()),
  onSnackbarClose: (id) => dispatch(PageOperations.dismissSnackbar(id)),
  setPage: (page) => dispatch(PageOperations.setPage(page)),
  setIpp: (ipp) => dispatch(PageOperations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeiculosPage);
