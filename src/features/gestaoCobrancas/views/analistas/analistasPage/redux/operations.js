import logger from 'utils/logger';

import service from './service';
import actions from './actions';

const getAssociacoes = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getAssociacoesStart());
    const { pageParams, filters } = getState().cobrancas.analistas.page;

    const response = await service.getAssociacoes(filters, pageParams);

    const responsePageParams = {
      page: response.pagina,
      ipp: response.itensPorPagina,
      totalItems: response.itensTotal,
    };

    dispatch(actions.getAssociacoesSuccess(response, responsePageParams));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getAssociacoesError());
  }
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getAssociacoes());
};
const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
};

const setMarca = (marca) => (dispatch) => {
  dispatch(actions.setMarca(marca));
};

const setRegional = (regional) => (dispatch) => {
  dispatch(actions.setRegional(regional));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getAssociacoes,
  setPage,
  setIpp,
  setMarca,
  setRegional,
  dismissSnackbar,
  addSnackbar,
  resetStore,
};
