import logger from 'utils/logger';

import service from './service';
import actions from './actions';

const getVeiculos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getVeiculosStart());
    const { filters, veiculosList, ordenacao } = getState().veiculos.page;
    const response = await service.getVeiculos(filters, veiculosList, ordenacao);

    const pageParams = {
      page: response.pagina,
      totalItems: response.itensTotal,
    };

    dispatch(actions.getVeiculosSuccess(response, pageParams));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getVeiculosError());
  }
};

const setTexto = (texto) => (dispatch) => {
  dispatch(actions.setTexto(texto));
};

const setMarca = (marca) => (dispatch) => {
  dispatch(actions.setMarca(marca));
};

const setStatus = (status) => (dispatch) => {
  dispatch(actions.setStatus(status));
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getVeiculos());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getVeiculos());
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setVeiculosPage = (page) => (dispatch) => {
  dispatch(actions.setVeiculosPage(page));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => (dispatch) => {
  dispatch(actions.setSortingOrder(nomeColuna, sentidoOrdenacao));
  dispatch(getVeiculos());
};

export default {
  getVeiculos,
  setTexto,
  setMarca,
  setStatus,
  setPage,
  setIpp,
  resetStore,
  setVeiculosPage,
  dismissSnackbar,
  addSnackbar,
  setSortingOrder,
};
