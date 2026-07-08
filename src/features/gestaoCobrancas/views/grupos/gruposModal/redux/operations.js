import logger from 'utils/logger';
import _ from 'lodash';
import { Mixpanel, trackedProperties } from 'modules';
import actions from './actions';
import service from './service';

import { Pages } from '../../../../redux/enums';

import GruposPageOperations from '../../gruposPage/redux/operations';
import GruposDetalheOperations from '../../gruposDetalhe/redux/operations/operations';

const insertGrupo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.insertGrupoStart());

    const { grupo } = getState().cobrancas.grupos.modal;

    const result = await service.insertGrupo(grupo);

    if (!result.success && !_.isEmpty(result.errors)) {
      dispatch(GruposPageOperations.addSnackbar('Erro ao adicionar o grupo', 'error'));
      dispatch(actions.insertGrupoError(result.errors));
      Mixpanel.trackSubmit(trackedProperties.inserirGrupo, true, result.errors);
      return;
    }

    dispatch(actions.insertGrupoSuccess());
    dispatch(GruposDetalheOperations.addSnackbar('Grupo adicionado com sucesso', 'success'));
    dispatch(GruposPageOperations.setGruposPage(
      Pages.detalheGrupo,
      { ...grupo, id: result.id },
    ));
    Mixpanel.trackSubmit(trackedProperties.inserirGrupo, false);
  } catch (e) {
    logger.error(e);
    dispatch(actions.insertGrupoError([]));
  }
};

const openModal = () => async (dispatch) => {
  dispatch(actions.setModal(true));
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setModal(false));
};

const updateGrupoProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateGrupoProperty(propertyName, value));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const getMarcas = () => async (dispatch, getState) => {
  try {
    let { marcas } = getState().cobrancas.grupos.modal;
    if (_.isEmpty(marcas)) marcas = await service.getMarcas();

    dispatch(actions.setMarcas(marcas));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setMarcas([]));
  }
};

const getRegionais = () => async (dispatch, getState) => {
  try {
    let { regionais } = getState().cobrancas.grupos.modal;
    if (_.isEmpty(regionais)) regionais = await service.getRegionais();

    dispatch(actions.setRegionais(regionais));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setRegionais([]));
  }
};

export default {
  insertGrupo,
  resetStore,
  closeModal,
  openModal,
  updateGrupoProperty,
  getMarcas,
  getRegionais,
};
