import logger from 'utils/logger';
import _ from 'lodash';
import { formatDateForUrl } from 'utils/axios';
import actions from './actions';
import service from './service';

const getHistorico = () => async (dispatch, getState) => {
  function mapTipo(array) {
    return array.map((t) => t.value);
  }
  function mapRegional(array) {
    return array.map((item) => item.value);
  }
  try {
    dispatch(actions.getHistoricoStart());
    const { filters, pageParams } = getState().cobrancas.historico.page;
    const body = {
      busca: filters.busca,
      regional: mapRegional(filters.regional),
      page: pageParams.page,
      ipp: pageParams.ipp,
      date: _.isDate(filters.date) ? null : formatDateForUrl(filters.date),
      tipoEmail: mapTipo(filters.tipo),
    };

    const response = await service.getHistorico(body);
    dispatch(actions.getHistoricoSuccess(response));
  } catch (error) {
    dispatch(actions.getHistoricoFail());
    logger.error(error);
  }
};

const setFilter = (filterName, value) => (dispatch) => {
  dispatch(actions.setFilter(filterName, value));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getHistorico());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
};

export default {
  getHistorico,
  setFilter,
  resetStore,
  setPage,
  setIpp,
};
