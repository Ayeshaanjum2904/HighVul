/* eslint-disable import/no-cycle */
import logger from 'utils/logger';
import { formatDateForUrl } from 'utils/axios';

import actions from './actions';
import operationsDetails from '../../descontoDetalhe/redux/operations';

import { Pages } from '../../redux/enums';
import descontosService from './service';

function mapBrand(arrayBrand) {
  return arrayBrand.map((b) => b.value);
}
function mapProduto(arrayProduto) {
  return arrayProduto.map((p) => p.value);
}

const getDescontos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getDescontosStart());
    const { pageParams, filters } = getState().descontos.page;
    const response = await descontosService.getDescontos({
      page: pageParams.page,
      ipp: pageParams.ipp,
      brand: mapBrand(filters.brand),
      produto: mapProduto(filters.produto),
      text: filters.text,
      vigenciaInicio: formatDateForUrl(filters.dataInicio),
      vigenciaFim: formatDateForUrl(filters.dataFim),
    });
    if (filters.brand === null && filters.produto === null) {
      dispatch(actions.setFilter('brand', response.brand));
      dispatch(actions.setFilter('produto', response.produto));
    }
    dispatch(actions.getDescontosSuccess(response));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getDescontosError());
  }
};

const createSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.setSnackbar(type, message));
};

const setPage = (page) => async (dispatch) => {
  dispatch(actions.setPage(page));
};

const setFilter = (propertyName, value) => async (dispatch) => {
  dispatch(actions.setFilter(propertyName, value));
};

const setDve = (value) => async (dispatch) => {
  dispatch(actions.setFilter('text', value));
};

const setUpdatePage = (descontoId, marca) => async (dispatch) => {
  dispatch(setPage(Pages.descontosUpdate));
  dispatch(operationsDetails.getDetails(descontoId, marca));
};

const setDuplicatePage = (descontoId, marca) => async (dispatch) => {
  dispatch(setPage(Pages.descontosDuplicate));
  dispatch(operationsDetails.getDetails(descontoId, marca));
};

const setPageNumber = (page) => async (dispatch) => {
  dispatch(actions.setPageNumber(page));
  dispatch(getDescontos());
};

const setIpp = (ipp) => async (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getDescontos());
};

const resetStore = () => async (dispatch) => {
  dispatch(actions.resetStore());
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const disableDesconto = (id) => async (dispatch) => {
  try {
    dispatch(actions.setDescontoSwitch(id));
    await descontosService.disableDesconto(id);
  } catch (error) {
    logger.error(error);
    dispatch(createSnackbar('Error ao desativar desconto', 'error'));
    dispatch(actions.setDescontoSwitch(id));
  }
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
  getDescontos,
  createSnackbar,
  setDve,
  disableDesconto,
};
