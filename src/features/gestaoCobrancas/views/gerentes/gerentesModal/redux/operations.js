import _ from 'lodash';
import logger from 'utils/logger';
import { Mixpanel, trackedProperties } from 'modules';
import actions from './actions';
import service from './service';

import GerentesPageOperations from '../../gerentesPage/redux/operations';

const insertGerente = () => async (dispatch, getState) => {
  try {
    dispatch(actions.insertGerenteStart());

    const { gerente } = getState().cobrancas.gerentes.modal;

    const result = await service.insertGerente(gerente);
    if (!result.success && !_.isEmpty(result.errors)) {
      dispatch(GerentesPageOperations.addSnackbar('Falha ao associar o gerente', 'error'));
      dispatch(actions.insertGerenteError(result.errors));
      Mixpanel.trackSubmit(trackedProperties.inserirGerente, true, result.errors);
      return;
    }

    Mixpanel.trackSubmit(trackedProperties.inserirGerente, false);
    dispatch(GerentesPageOperations.addSnackbar('Gerente associado com sucesso', 'success'));
    dispatch(actions.insertGerenteSuccess({ ...gerente, id: result.id }));
  } catch (e) {
    logger.error(e);
    dispatch(actions.insertGerenteError([]));
  }
};

const getGerentes = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getGerentesStart());
    const { marca, regional } = getState().cobrancas.gerentes.modal.gerente;

    let gerentes = [];
    if (!!marca && !!regional) {
      gerentes = await service.getGerentes(marca, regional);
    }
    dispatch(actions.getGerentesSuccess(gerentes));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getGerentesError());
  }
};

const deleteGerente = (id) => async (dispatch) => {
  try {
    dispatch(actions.deleteGerenteStart(id));

    await service.deleteGerente(id);

    dispatch(actions.deleteGerenteSuccess(id));
    dispatch(GerentesPageOperations.addSnackbar('Gerente removido com sucesso', 'success'));
  } catch (e) {
    dispatch(actions.deleteGerenteError(id));
    dispatch(GerentesPageOperations.addSnackbar('Erro ao remover o gerente', 'error'));
    logger.error(e);
  }
};

const openModal = (modal, regional = null, marca = null) => async (dispatch) => {
  dispatch(actions.updateGerenteProperty('regional', regional));
  dispatch(actions.updateGerenteProperty('marca', marca));
  dispatch(actions.setModalType(modal));
  dispatch(actions.setModalOpen(true));
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setModalOpen(false));
  dispatch(GerentesPageOperations.resetStore());
  dispatch(GerentesPageOperations.getAssociacoes());
};

const updateGerenteProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateGerenteProperty(propertyName, value));
};

const setSelectedMarca = (marca) => (dispatch) => {
  dispatch(actions.setSelectedMarca(marca));
  dispatch(getGerentes());
};

const setSelectedRegional = (regional) => (dispatch) => {
  dispatch(actions.setSelectedRegional(regional));
  dispatch(getGerentes());
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
  insertGerente,
  getGerentes,
  openModal,
  closeModal,
  updateGerenteProperty,
  getMarcas,
  getRegionais,
  resetStore,
  deleteGerente,
  setSelectedMarca,
  setSelectedRegional,
};
