import logger from 'utils/logger';

import { Mixpanel, trackedProperties } from 'modules';
import { saveAs } from 'file-saver';
import service from './service';
import actions from './actions';

const getContatos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getContatosStart());
    const { pageParams, filters } = getState().cobrancas.contatos.page;

    const response = await service.getContatos({
      texto: filters.texto,
      ipp: pageParams.ipp,
      page: pageParams.page,
    });

    const responsePageParams = {
      page: response.pagina,
      ipp: response.itensPorPagina,
      totalItems: response.itensTotal,
    };

    dispatch(actions.getContatosSuccess(response.contatos, responsePageParams));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getContatosError());
  }
};

const deleteContato = () => async (dispatch, getState) => {
  try {
    dispatch(actions.deleteContatoStart());
    const { contatoId } = getState().cobrancas.contatos.page.deleteContato;

    await service.deleteContato(contatoId);

    dispatch(actions.addSnackbar('Contato removido com sucesso', 'success'));
    dispatch(actions.deleteContatoSuccess());
    dispatch(getContatos());
  } catch (e) {
    logger.error(e);
    dispatch(actions.addSnackbar('Erro ao remover o contato', 'error'));
    dispatch(actions.deleteContatoError());
  }
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getContatos());
};
const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
};

const setTextoContato = (texto) => (dispatch) => {
  Mixpanel.trackPageFilter(trackedProperties.contatosPage, 'text');
  dispatch(actions.setTextoContato(texto));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setContatoId = (id = null) => (dispatch) => {
  dispatch(actions.setContatoId(id));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const exportarRelatorio = () => async (dispatch) => {
  try {
    dispatch(actions.exportRelatorioStart());

    const xlsxResponse = await service.exportarRelatorio();

    const url = window.URL.createObjectURL(new Blob([xlsxResponse]));
    const today = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
    saveAs(url, `relatorio_contatos_${today}.xlsx`);
    dispatch(actions.exportRelatorioSuccess());
  } catch (error) {
    logger.error('Erro ao exportar relatório:', error);
    dispatch(actions.exportRelatorioError());
  }
};

export default {
  getContatos,
  setPage,
  setIpp,
  resetStore,
  setContatoId,
  deleteContato,
  setTextoContato,
  dismissSnackbar,
  addSnackbar,
  exportarRelatorio,
};
