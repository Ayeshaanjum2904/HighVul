import logger from 'utils/logger';

import _ from 'lodash';
import { camelFormat } from 'utils/format';
import service from './service';
import actions from './actions';

function mapStatus(arrayStatus) {
  return arrayStatus.map((s) => s.value);
}

function mapRegiao(arrayRegiao) {
  return arrayRegiao.map((r) => r.value);
}

const getSolicitacoes = (isInitialLoad) => async (dispatch, getState) => {
  try {
    dispatch(actions.getSolicitacoesStart());

    const { user } = getState().auth;
    const { filters, solicitacoesList } = getState().limites.page;
    const response = await service.getSolicitacoes(user, {
      texto: filters.texto,
      page: solicitacoesList.page,
      ipp: solicitacoesList.ipp,
      regiaoFilter: !_.isEmpty(filters.regiao) ? mapRegiao(filters.regiao) : [],
      statusFilter: !_.isEmpty(filters.status) ? mapStatus(filters.status) : [],
    });
    if (isInitialLoad) {
      const selectedRegioes = response.regioes.map((regiao) => ({
        value: regiao.id,
        text: `${regiao.codigo} - ${camelFormat(regiao.nome)}`,
      }));
      const selectedStatus = response.statusFilter.map((status) => ({
        value: status,
        text: camelFormat(status),
      }));

      dispatch(actions.setRegiao(selectedRegioes));
      dispatch(actions.setStatus(selectedStatus));
      dispatch(actions.setRegiaoFilter(response.regioes));
      dispatch(actions.setStatusFilter(response.statusFilter));
    }
    dispatch(actions.getSolicitacoesSuccess(response));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getSolicitacoesError());
  }
};

const setTexto = (texto) => (dispatch) => {
  dispatch(actions.setTexto(texto));
};

const setRegiao = (regiao) => (dispatch) => {
  dispatch(actions.setRegiao(regiao));
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getSolicitacoes());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getSolicitacoes());
};

const setStatus = (status) => (dispatch) => {
  dispatch(actions.setStatus(status));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setSolicitacaoVisualizada = (solicitacaoId) => (dispatch) => {
  dispatch(actions.setSolicitacaoVisualizada(solicitacaoId));
};

export default {
  getSolicitacoes,
  setTexto,
  setPage,
  setIpp,
  resetStore,
  setSolicitacaoVisualizada,
  setStatus,

  setRegiao,
};
