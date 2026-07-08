import _ from 'lodash';
import logger from 'utils/logger';
import { Mixpanel, trackedProperties } from 'modules';
import actions from './actions';
import service from './service';

import AnalistasPageOperations from '../../analistasPage/redux/operations';

const insertAnalista = () => async (dispatch, getState) => {
  try {
    dispatch(actions.insertAnalistaStart());

    const { analista } = getState().cobrancas.analistas.modal;

    const result = await service.insertAnalista(analista);
    if (!result.success && !_.isEmpty(result.errors)) {
      dispatch(AnalistasPageOperations.addSnackbar('Falha ao associar o analista', 'error'));
      dispatch(actions.insertAnalistaError(result.errors));
      Mixpanel.trackSubmit(trackedProperties.inserirAnalista, true, result.errors);
      return;
    }

    Mixpanel.trackSubmit(trackedProperties.inserirAnalista, false);
    dispatch(AnalistasPageOperations.addSnackbar('Analista associado com sucesso', 'success'));
    dispatch(actions.insertAnalistaSuccess({ id: result.id, ...analista }));
  } catch (e) {
    logger.error(e);
    dispatch(actions.insertAnalistaError([]));
  }
};

const getAnalistas = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getAnalistasStart());
    const { marca, regional } = getState().cobrancas.analistas.modal.analista;

    let analistas = [];
    if (!!marca && !!regional) {
      analistas = await service.getAnalistas(marca, regional);
    }
    dispatch(actions.getAnalistasSuccess(analistas));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getAnalistasError());
  }
};

const deleteAnalista = (id) => async (dispatch) => {
  try {
    dispatch(actions.deleteAnalistaStart(id));

    await service.deletaAnalista(id);

    dispatch(actions.deleteAnalistaSuccess(id));
    dispatch(AnalistasPageOperations.addSnackbar('Analista removido com sucesso', 'success'));
  } catch (e) {
    dispatch(actions.deleteAnalistaError(id));
    dispatch(AnalistasPageOperations.addSnackbar('Erro ao remover o analista', 'error'));
    logger.error(e);
  }
};

const openModal = (modal, regional = null, marca = null) => async (dispatch) => {
  dispatch(actions.updateAnalistaProperty('regional', regional));
  dispatch(actions.updateAnalistaProperty('marca', marca));
  dispatch(actions.setModalType(modal));
  dispatch(actions.setModalOpen(true));
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setModalOpen(false));
  dispatch(AnalistasPageOperations.resetStore());
  dispatch(AnalistasPageOperations.getAssociacoes());
};

const updateAnalistaProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateAnalistaProperty(propertyName, value));
};

const setSelectedMarca = (marca) => (dispatch) => {
  dispatch(actions.setSelectedMarca(marca));
  dispatch(getAnalistas());
};

const setSelectedRegional = (regional) => (dispatch) => {
  dispatch(actions.setSelectedRegional(regional));
  dispatch(getAnalistas());
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const getRegionais = () => async (dispatch, getState) => {
  try {
    let { regionais } = getState().cobrancas.analistas.modal;
    if (_.isEmpty(regionais)) regionais = await service.getRegionais();

    dispatch(actions.setRegionais(regionais));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setRegionais([]));
  }
};

const getMarcas = () => async (dispatch, getState) => {
  try {
    let { marcas } = getState().cobrancas.analistas.modal;
    if (_.isEmpty(marcas)) marcas = await service.getMarcas();

    dispatch(actions.setMarcas(marcas));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setMarcas([]));
  }
};

export default {
  insertAnalista,
  getAnalistas,
  openModal,
  closeModal,
  updateAnalistaProperty,
  getMarcas,
  getRegionais,
  resetStore,
  deleteAnalista,
  setSelectedMarca,
  setSelectedRegional,
};
