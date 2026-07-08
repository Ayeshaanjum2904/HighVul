import logger from 'utils/logger';
import service from './service';
import actions from './actions';

const getAlertas = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getAlertasStart());
    const { pageParams, filters } = getState().comunicados.alertas.page;

    const response = await service.getAlertas({ pageParams, filters });

    const responsePageParams = {
      page: response.pagina,
      ipp: response.itensPorPagina,
      totalItems: response.itensTotal,
    };

    dispatch(actions.getAlertasSuccess(response.alertas, responsePageParams));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getAlertasError());
  }
};

const getFilters = () => async (dispatch) => {
  try {
    const response = await service.getFilters();
    dispatch(actions.setBrandList(response));
  } catch (e) {
    logger.error(e);
  }
};

const deleteAlerta = () => async (dispatch, getState) => {
  try {
    dispatch(actions.deleteAlertaStart());
    const { alertaId } = getState().comunicados.alertas.page.deleteAlerta;

    const response = await service.deleteAlerta(alertaId);

    dispatch(actions.deleteAlertaSuccess(response));

    dispatch(getAlertas());
  } catch (e) {
    logger.error(e);
    dispatch(actions.deleteAlertaError());
  }
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getAlertas());
};
const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getAlertas());
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setAlertaId = (id = null) => (dispatch) => {
  dispatch(actions.setAlertaId(id));
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
  dispatch(getAlertas());
};

const setFilters = (isFilterSelected, getList = true) => async (dispatch) => {
  dispatch(actions.setFilters(isFilterSelected));
  if (getList) dispatch(getAlertas());
};

const clearFilters = () => (dispatch) => {
  dispatch(actions.clearFilters());
};

export default {
  getAlertas,
  getFilters,
  setPage,
  setIpp,
  resetStore,
  setAlertaId,
  deleteAlerta,
  setStartDate,
  setEndDate,
  setBrand,
  setTitulo,
  setSortingOrder,
  setFilters,
  clearFilters,
};
