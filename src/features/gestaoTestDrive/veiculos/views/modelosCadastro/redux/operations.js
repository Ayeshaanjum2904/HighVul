import logger from 'utils/logger';
import actions from './actions';
import service from './service';

import CadastroVeiculoOperations from '../../veiculosCadastro/redux/operations';

import operationsUtils from './operationsUtils';

const openModal = (id) => async (dispatch, getState) => {
  dispatch(actions.setOpen(true));
  if (id !== null) {
    const { modelos } = getState().veiculos.cadastroVeiculo;
    const modelo = modelos.find((m) => m.id === id);
    dispatch(actions.editModelo(modelo));
  }
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setOpen(false));
  dispatch(actions.resetStore());
};

const sendModelo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.sendModeloStart());

    const { urlImagem } = getState().veiculos.cadastroModelo.uploadImagem;
    const { modelo } = getState().veiculos.cadastroModelo;
    const isUpdate = operationsUtils.isUpdateModelo(getState);

    if (urlImagem) modelo.urlModelo = urlImagem;

    if (isUpdate) await service.updateModelo(modelo);
    else await service.sendModelo(modelo);

    const message = operationsUtils.getSuccessMessage(getState);
    dispatch(CadastroVeiculoOperations.addSnackbar(message, 'success'));
    dispatch(actions.sendModeloSuccess());
    dispatch(CadastroVeiculoOperations.getModelos());
  } catch (e) {
    const message = operationsUtils.getErrorMessage(getState);
    dispatch(CadastroVeiculoOperations.addSnackbar(message, 'error'));
    dispatch(actions.sendModeloError());
    logger.error(e);
  }
};

const uploadImagem = (file) => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadImagemStart());

    const { id } = getState().veiculos.cadastroModelo.modelo;

    await service.deleteUrlImagemModelo(id);

    const response = await service.getUrlUploadImagemModelo(file[0].type, file[0].name, id);
    await service.uploadImagemModelo(response.urlUpload, file[0]);

    dispatch(actions.uploadImagemSuccess(response.urlUpload.split('?', 2)[0], response.urlDownload));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadImagemError());
  }
};

const deleteImagem = () => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadImagemStart());

    const { id } = getState().veiculos.cadastroModelo.modelo;

    await service.deleteUrlImagemModelo(id);

    dispatch(actions.uploadImagemSuccess(null, null));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadImagemError());
  }
};

const updateModeloProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateModeloProperty(propertyName, value));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const setUrlModelo = (urlModelo) => (dispatch) => {
  dispatch(actions.setUrlModelo(urlModelo));
};

const deleteModelo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.deleteModeloStart());

    const { id } = getState().veiculos.cadastroModelo.modelo;
    await service.deleteModelo(id);

    dispatch(CadastroVeiculoOperations.addSnackbar('Modelo removido com sucesso', 'success'));
    dispatch(actions.deleteModeloSuccess());
    dispatch(CadastroVeiculoOperations.getModelos());
  } catch (e) {
    dispatch(CadastroVeiculoOperations.addSnackbar('Erro ao remover o modelo', 'success'));
    dispatch(actions.deleteModeloError());
    logger.error(e);
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  openModal,
  closeModal,
  sendModelo,
  uploadImagem,
  deleteImagem,
  updateModeloProperty,
  dismissSnackbar,
  resetStore,
  deleteModelo,
  setUrlModelo,
};
