import logger from 'utils/logger';
import actions from './actions';
import service from './service';
import operationsUtils from './operationsUtils';

import { Pages } from '../../../redux/enums';

import VeiculosPageOperations from '../../veiculosPage/redux/operations';

const sendVeiculo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.sendVeiculoStart());

    const { veiculo } = getState().veiculos.cadastroVeiculo;
    const { urlImagem } = getState().veiculos.cadastroVeiculo.uploadImagem;
    const isUpdate = operationsUtils.isUpdateModelo(getState);

    if (urlImagem) veiculo.urlVeiculo = urlImagem;

    if (isUpdate) {
      await service.updateVeiculo(veiculo);
      dispatch(actions.sendVeiculoUpdateSuccess(veiculo));
    } else {
      await service.sendVeiculo(veiculo);
      dispatch(actions.sendVeiculoSuccess());
    }

    const message = operationsUtils.getSuccessMessage(getState);
    dispatch(actions.addSnackbar(message, 'success'));
  } catch (e) {
    const message = operationsUtils.getErrorMessage(getState);
    dispatch(actions.addSnackbar(message, 'error'));
    dispatch(actions.sendVeiculoError());
    logger.error(e);
  }
};

const uploadImagem = (file) => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadImagemStart());

    const { id } = getState().veiculos.cadastroVeiculo.veiculo;

    await service.deleteUrlImagemVeiculo(id);

    const response = await service.getUrlUploadImagemVeiculo(file[0].type, file[0].name, id);
    await service.uploadImagemVeiculo(response.urlUpload, file[0]);

    dispatch(actions.uploadImagemSuccess(response.urlUpload.split('?', 2)[0], response.urlDownload));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadImagemError());
  }
};

const deleteImagem = () => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadImagemStart());

    const { urlImagem } = getState().veiculos.cadastroVeiculo.uploadImagem;
    const { id } = getState().veiculos.cadastroVeiculo.veiculo;
    if (urlImagem) await service.deleteUrlImagemVeiculo(id);

    dispatch(actions.uploadImagemSuccess(null, null));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadImagemError());
  }
};

const updateVeiculoProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateVeiculoProperty(propertyName, value));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const getUrlVeiculosList = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getUrlVeiculosList());
    const { marca } = getState().veiculos.cadastroVeiculo.veiculo;
    const urlVeiculosList = await service.getUrlVeiculosList(marca);
    dispatch(actions.setUrlVeiculosList(urlVeiculosList));
  } catch (e) {
    logger.error(e);
  }
};

const getModelos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getModelos());
    const { marca } = getState().veiculos.cadastroVeiculo.veiculo;
    const modelos = await service.getModelos(marca);
    dispatch(actions.setModelos(modelos));
  } catch (e) {
    logger.error(e);
  }
};

const getBrands = () => async (dispatch) => {
  try {
    const brands = await service.getBrands();
    dispatch(actions.setBrands(brands));
  } catch (e) {
    logger.error(e);
  }
};

const setModelo = (idModelo) => (dispatch, getState) => {
  const { modelos } = getState().veiculos.cadastroVeiculo;
  const modelo = modelos.find((m) => m.id === idModelo);
  dispatch(actions.setModelo(modelo));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const setUrlVeiculo = (urlVeiculo) => (dispatch) => {
  dispatch(actions.setUrlVeiculo(urlVeiculo));
};

const editVeiculo = () => async (dispatch, getState) => {
  const { detalheVeiculo } = getState().veiculos.details.modal;

  dispatch(actions.editVeiculo(detalheVeiculo));

  dispatch(VeiculosPageOperations.setVeiculosPage(Pages.cadastroVeiculo));

  await Promise.all([
    await service.getModelos(detalheVeiculo.marca)
      .then((result) => dispatch(actions.setModelos(result))),
    await service.getUrlVeiculosList(detalheVeiculo.marca)
      .then((result) => dispatch(actions.setUrlVeiculosList(result))),
  ]);
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

export default {
  sendVeiculo,
  uploadImagem,
  deleteImagem,
  updateVeiculoProperty,
  resetStore,
  getBrands,
  setModelo,
  dismissSnackbar,
  getUrlVeiculosList,
  getModelos,
  editVeiculo,
  addSnackbar,
  setUrlVeiculo,
};
