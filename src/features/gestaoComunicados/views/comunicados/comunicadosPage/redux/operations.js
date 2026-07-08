import logger from 'utils/logger';
import actions from './actions';
import service from './service';

const getFilters = () => async (dispatch) => {
  try {
    const response = await service.getFilters();
    dispatch(actions.setBrandList(response));
  } catch (e) {
    logger.error(e);
  }
};

const getComunicados = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getComunicadosStart());
    const { pageParams, filters } = getState().comunicados.comunicados.page;
    const response = await service.getComunicados(pageParams, filters);
    const page = {
      ipp: response.itensPorPage,
      page: response.page,
      totalItems: response.totalItens,
    };
    dispatch(actions.getComunicadosSuccess(page, response.documentos));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getComunicadosError());
  }
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getComunicados());
};

const setSnackbars = (menssagem, tipo) => (dispatch) => {
  dispatch(actions.setSnackbars(menssagem, tipo));
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getComunicados());
};

const setComunicadoId = (idArquivo) => (dispatch) => {
  dispatch(actions.setComunicadoId(idArquivo));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setStartDate = (startDate) => (dispatch) => {
  dispatch(actions.setStartDate(startDate));
};

const setEndDate = (endDate) => (dispatch) => {
  dispatch(actions.setEndDate(endDate));
};

const setBrand = (brand) => (dispatch) => {
  dispatch(actions.setBrand(brand));
};

const setTitulo = (titulo) => (dispatch) => {
  dispatch(actions.setTitulo(titulo));
};

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => async (dispatch) => {
  dispatch(actions.setSortingOrder(nomeColuna, sentidoOrdenacao));
  dispatch(getComunicados());
};

const setFilters = (isFilterSelected, getList = true) => async (dispatch) => {
  dispatch(actions.setFilters(isFilterSelected));
  if (getList) dispatch(getComunicados());
};

const clearFilters = () => (dispatch) => {
  dispatch(actions.clearFilters());
};

const deleteArquivo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.deleteComunicadoStart());
    const idDelete = getState().comunicados.comunicados.page.arquivoDelete;
    await service.excluiComunicado(idDelete);
    dispatch(actions.deleteComunicadoSuccess());
    dispatch(getComunicados());
  } catch (error) {
    logger.error(error);
    dispatch(actions.deleteComunicadoError());
  }
};

const dismissSnackbars = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbars(id));
};

export default {
  setPage,
  setIpp,
  setComunicadoId,
  resetStore,
  getFilters,
  getComunicados,
  deleteArquivo,
  dismissSnackbars,
  setSnackbars,
  setStartDate,
  setEndDate,
  setBrand,
  setTitulo,
  setSortingOrder,
  setFilters,
  clearFilters,
};
