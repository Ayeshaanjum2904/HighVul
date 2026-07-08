import { formatDateForUrl } from 'utils/axios';
import logger from 'utils/logger';

import actions from './actions';
import { Pages } from '../../redux/enums';
// eslint-disable-next-line import/no-cycle
import operationsDetail from '../../condicoesDetalhe/redux/operations';

import condicoesService from './service';

function mapBrand(arrayBrand) {
  return arrayBrand.map((b) => b.value);
}
function mapProduto(arrayProduto) {
  return arrayProduto.map((p) => p.value);
}

const getCondicoes = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getCondicoesStart());
    const { pageParams, filters } = getState().condicoesComerciais.page;
    const response = await condicoesService.getCondicoes({
      page: pageParams.page,
      ipp: pageParams.ipp,
      brand: mapBrand(filters.brand),
      produto: mapProduto(filters.produto),
      text: filters.text,
      vigenciaInicio: formatDateForUrl(filters.dataInicio),
      vigenciaFim: formatDateForUrl(filters.dataFim),
    });
    dispatch(actions.getCondicoesSuccess(response));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getCondicoesError());
  }
};

const disableCondicao = (id) => async (dispatch) => {
  try {
    dispatch(actions.setCondicaoSwitch(id));
    await condicoesService.disableCondicao(id);
  } catch (error) {
    logger.error(error);
    dispatch(actions.setSnackbar('error', 'Erro ao desativar condição'));
    dispatch(actions.setCondicaoSwitch(id));
  }
};

const setPage = (page) => async (dispatch) => {
  dispatch(actions.setPage(page));
};

const setFilter = (propertyName, value) => async (dispatch) => {
  dispatch(actions.setFilter(propertyName, value));
};

const setCartaMes = (value) => async (dispatch) => {
  dispatch(actions.setFilter('text', value));
};

const setUpdatePage = (condicaoId, marca) => async (dispatch) => {
  dispatch(setPage(Pages.condicoesUpdate));
  dispatch(operationsDetail.getDetails(condicaoId, marca));
};

const setDuplicatePage = (condicaoId, marca) => async (dispatch) => {
  dispatch(setPage(Pages.condicoesDuplicate));
  dispatch(operationsDetail.getDetails(condicaoId, marca));
};

const setPageNumber = (page) => async (dispatch) => {
  dispatch(actions.setPageNumber(page));
  dispatch(getCondicoes());
};

const setIpp = (ipp) => async (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getCondicoes());
};

const resetStore = () => async (dispatch) => {
  dispatch(actions.resetStore());
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const createSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.setSnackbar(type, message));
};

export default {
  setPage,
  setFilter,
  setUpdatePage,
  setDuplicatePage,
  setPageNumber,
  setIpp,
  resetStore,
  dismissSnackbar,
  getCondicoes,
  disableCondicao,
  createSnackbar,
  setCartaMes,
};
