import logger from 'utils/logger';
import { Mixpanel, trackedProperties } from 'modules';
import { SnackbarActions } from 'modules/snackbar';
import actions from './actions';
import service from './service';

import PageOperations from '../../alertasPage/redux/operations';

const sendAlerta = () => async (dispatch, getState) => {
  try {
    dispatch(actions.sendAlertaStart());

    const { alerta } = getState().comunicados.alertas.modal;
    const { id } = alerta;
    const isUpdate = id === null;

    if (isUpdate) {
      await service.sendAlerta(alerta);
      Mixpanel.trackSubmit(trackedProperties.inserirAlerta, false);
    } else {
      await service.updateAlerta(id, alerta);
      Mixpanel.trackSubmit(trackedProperties.editarAlerta, false);
    }

    dispatch(actions.sendAlertaSuccess());
    dispatch(actions.setModalAlertaOpen(false));
    dispatch(PageOperations.getAlertas());
  } catch (e) {
    const { id } = getState().alertas.modal.alerta;
    if (id === null) Mixpanel.trackSubmit(trackedProperties.inserirAlerta, true);
    else Mixpanel.trackSubmit(trackedProperties.editarAlerta, true);

    logger.error(e);
    dispatch(actions.sendAlertaError());
  }
};

const getAlerta = (id) => async (dispatch) => {
  try {
    dispatch(actions.setModalAlertaOpen(true));
    dispatch(actions.getAlertaStart());

    const response = await service.getAlerta(id);
    dispatch(actions.getAlertaSuccess(response));

    if (response.urlImagem) {
      const key = response.urlImagem.split('amazonaws.com/', 2)[1];
      dispatch(actions.setS3Key(key));
      const signed = await service.getSignedUrl(key, response.nomeImagem);
      dispatch(actions.setSignedUrl(signed));
    }
  } catch (e) {
    logger.error(e);
    dispatch(actions.getAlertaError());
  }
};

const uploadImagem = (file) => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadImagemStart());

    const { urlImagem, id } = getState().comunicados.alertas.modal.alerta;
    const { s3Key } = getState().comunicados.alertas.modal;
    if (urlImagem !== null) {
      await service.deleteUrlImagem(s3Key, id);
    }

    const uploadResponse = await service.getUrlUploadImagem(file.type, file.name, id);
    const urlUpload = uploadResponse.url;
    await service.uploadImagem(urlUpload, file);

    const urlFinal = urlUpload.split('?', 2)[0];
    dispatch(actions.uploadImagemSuccess(urlFinal, file.name));
    dispatch(actions.setS3Key(uploadResponse.key));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadImagemError());
  }
};

const deleteImagem = () => async (dispatch, getState) => {
  try {
    const { s3Key } = getState().comunicados.alertas.modal;
    const { id } = getState().comunicados.alertas.modal.alerta;
    await service.deleteUrlImagem(s3Key, id);
    dispatch(actions.clearUrlImagem());
  } catch (e) {
    logger.error(e);
  }
};

const requestPreviewSignedUrl = () => async (dispatch, getState) => {
  try {
    const { s3Key, alerta: { nomeImagem } } = getState().comunicados.alertas.modal;
    if (!s3Key) return null;
    const signed = await service.getSignedUrl(s3Key, nomeImagem);
    dispatch(actions.setSignedUrl(signed));
    return signed;
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao obter URL de preview da imagem', 'error'));
    return null;
  }
};

const getSignedUrl = (urlImagem, nomeImagem) => async (dispatch) => {
  try {
    const key = urlImagem.split('amazonaws.com/', 2)[1];
    return await service.getSignedUrl(key, nomeImagem);
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao carregar imagem', 'error'));
    return null;
  }
};

const openModalAlerta = () => (dispatch) => {
  dispatch(actions.setModalAlertaOpen(true));
};

const closeModalAlerta = () => async (dispatch, getState) => {
  const { s3Key } = getState().comunicados.alertas.modal;
  const { urlImagem, id } = getState().comunicados.alertas.modal.alerta;
  if (urlImagem !== null && id == null) {
    await service.deleteUrlImagem(s3Key);
  }
  dispatch(actions.setModalAlertaOpen(false));
};

const setStartDate = (data) => (dispatch) => {
  dispatch(actions.setStartDate(data));
};

const setEndDate = (data) => (dispatch) => {
  dispatch(actions.setEndDate(data));
};

const setModalStatus = (status) => (dispatch) => {
  dispatch(actions.setModalStatus(status));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setBrands = (brands) => (dispatch) => {
  dispatch(actions.setBrands(brands));
};

const setMensagem = (mensagem) => (dispatch) => {
  dispatch(actions.setMensagem(mensagem));
};

const setTitulo = (titulo) => (dispatch) => {
  dispatch(actions.setTitulo(titulo));
};

export default {
  sendAlerta,
  getAlerta,
  openModalAlerta,
  closeModalAlerta,
  uploadImagem,
  setStartDate,
  setEndDate,
  setModalStatus,
  resetStore,
  setBrands,
  setMensagem,
  setTitulo,
  deleteImagem,
  getSignedUrl,
  requestPreviewSignedUrl,
};
