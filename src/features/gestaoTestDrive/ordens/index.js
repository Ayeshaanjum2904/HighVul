import { connect } from 'react-redux';
import operations from './redux/operations';

import Ordens from './ordens';
import selectors from './redux/selectors';

const mapStateToProps = ({ ordens }) => ({
  ordensList: ordens.ordensList.ordens,
  ipp: ordens.pageParams.ipp,
  totalItems: ordens.pageParams.totalItems,
  page: ordens.pageParams.page,
  isLoading: ordens.ordensList.isLoading,
  isModalOrdemOpen: selectors.isModalOrdemOpen(ordens),
  isModalVincularCondicaoOpen: selectors.isModalVincularCondicaoOpen(ordens),
  selectedOrdem: selectors.getSelectedOrdemVincular(ordens),
  condicoesComerciais: selectors.getCondicoes(ordens),
  loadingCondicoes: selectors.getLoadingCondicoes(ordens),
  isModalVincularCondicaoAVistaOpen: selectors.isModalVincularCondicaoAVistaOpen(ordens),
  selectedOrdemAVista: selectors.getSelectedOrdemVincularAVista(ordens),
  condicoesAVista: selectors.getCondicoesAVista(ordens),
  loadingCondicoesAVista: selectors.getLoadingCondicoesAVista(ordens),
});

const mapDispatchToProps = (dispatch) => ({
  getProdutosList: () => dispatch(operations.getProdutosList()),
  getStatusList: () => dispatch(operations.getStatusList()),
  getOrdens: () => dispatch(operations.getOrdens()),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setModalOrdem: (modalOrdemOpen) => dispatch(operations.setOpenModalOrdem(modalOrdemOpen, null)),
  setModalVincularCondicao: (isOpen, ordem = null) => dispatch(
    operations.setOpenModalVincularCondicao(isOpen, ordem),
  ),
  getCondicoesComerciais: () => dispatch(operations.getCondicoesComerciais()),
  setModalVincularCondicaoAVista: (isOpen, ordem = null) => dispatch(
    operations.setOpenModalVincularCondicaoAVista(isOpen, ordem),
  ),
  getCondicoesAVista: (ordemId) => dispatch(operations.getCondicoesAVista(ordemId)),
  resetStore: () => dispatch(operations.resetOrdensStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordens);
