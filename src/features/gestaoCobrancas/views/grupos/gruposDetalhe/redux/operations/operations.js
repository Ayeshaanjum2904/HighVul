import logger from 'utils/logger';
import actions from '../actions/actions';
import service from '../service/service';

import operationsLoadData from './operationsLoadData';
import operationsUpdateConcessionaria from './operationsUpdateConcessionaria';
import operationsUpdateGrupo from './operationsUpdateGrupo';
import operationsUpdateContato from './operationsUpdateContato';

const getDetalhesGrupo = () => async (dispatch, idGrupo) => {
  try {
    const grupo = await service.getDetalhesGrupo(idGrupo);
    dispatch(actions.setGrupo(grupo));
  } catch (e) {
    dispatch(actions.setGrupo(null));
    logger.error(e);
    throw e;
  }
};

const getConcessionariasGrupo = () => async (dispatch, idGrupo) => {
  try {
    const concessionarias = await service.getConcessionariasGrupo(idGrupo);
    dispatch(actions.setConcessionariasGrupo(concessionarias));
  } catch (e) {
    dispatch(actions.setConcessionariasGrupo([]));
    logger.error(e);
    throw e;
  }
};

const getContatosGrupo = () => async (dispatch, idGrupo) => {
  try {
    const contatos = await service.getContatosGrupo(idGrupo);
    dispatch(actions.setContatosGrupo(contatos));
  } catch (e) {
    dispatch(actions.setContatosGrupo([]));
    logger.error(e);
    throw e;
  }
};

const getHistoricoGrupo = () => async (dispatch, idGrupo) => {
  try {
    const historico = await service.getHistoricoGrupo(idGrupo);
    dispatch(actions.setHistoricoGrupo(historico));
  } catch (e) {
    dispatch(actions.setHistoricoGrupo([]));
    logger.error(e);
    throw e;
  }
};

const setGrupo = (grupo) => (dispatch) => {
  dispatch(actions.setGrupo(grupo));
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
  getDetalhesGrupo,
  getConcessionariasGrupo,
  getContatosGrupo,
  getHistoricoGrupo,
  setGrupo,
  dismissSnackbar,
  addSnackbar,
  resetStore,
  ...operationsLoadData,
  ...operationsUpdateConcessionaria,
  ...operationsUpdateGrupo,
  ...operationsUpdateContato,
};
