import logger from 'utils/logger';
import { v4 } from 'uuid';
import _ from 'lodash';
import actions from './actions';
import service from './service';
import operationsPage from '../../comunicadosPage/redux/operations';

const uploadFile = (file) => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadFileStart());
    const isKey = getState().comunicados.comunicados.modal.key;
    if (isKey === null || isKey === undefined) {
      dispatch(actions.setKey(v4()));
    }
    const { key, urlFile } = getState().comunicados.comunicados.modal;
    if (urlFile) {
      await service.deleteFile(key);
    }

    const { fileName } = getState().comunicados.comunicados.modal;
    const ext = file.name.split('.').pop();
    const newFile = new File([file], fileName.concat('.').concat(ext), { type: file.type });
    const uploadResponse = await service.getUrlUpload(key, newFile.type);
    const urlUpload = uploadResponse.url;
    await service.uploadFile(urlUpload, newFile);
    const urlFinal = urlUpload.split('?', 2)[0];
    dispatch(actions.uploadFileSuccess(urlFinal, newFile.name));
    dispatch(actions.setS3Key(uploadResponse.key));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadFileError());
  }
};

const deleteUrl = () => async (dispatch, getState) => {
  const { key } = getState().comunicados.comunicados.modal;
  await service.deleteFile(key);
};

const getBrand = () => async (dispatch) => {
  try {
    const brands = await service.getBrand();
    dispatch(actions.setBrandsSelector(brands));
  } catch (error) {
    logger.error(error);
  }
};

const insertFile = () => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadFileStart());
    const {
      urlFile,
      fileName,
      dataEmissao,
      brands,
      key,
      documento,
    } = getState().comunicados.comunicados.modal;
    await service.insertDocumento({
      urlFile, fileName, dataEmissao, brands, key, documento,
    });
    dispatch(operationsPage.getComunicados());
    dispatch(operationsPage.getFilters());
    dispatch(operationsPage.setSnackbars('Comunicado adicionado', 'success'));
    dispatch(actions.resetStore());
  } catch (error) {
    logger.error(error);
    dispatch(actions.uploadFileError());
    dispatch(operationsPage.setSnackbars('Erro ao adicionar comunicado', 'error'));
  }
};

const setFileName = (fileName) => (dispatch) => {
  dispatch(actions.setFileName(fileName));
};

const setDataEmissao = (dataEmissao) => async (dispatch) => {
  dispatch(actions.setDataEmissao(dataEmissao));
};

const setTemplate = (template) => async (dispatch) => {
  dispatch(actions.setTemplate(template));
};

const setKey = (key) => async (dispatch) => {
  dispatch(actions.setKey(key));
};

const setDocumento = (documento) => async (dispatch) => {
  dispatch(actions.setDocumento(documento));
};

const setBrand = (brand) => async (dispatch) => {
  dispatch(actions.setBrand(brand));
};

const resetStore = () => async (dispatch) => {
  dispatch(actions.resetStore());
};

const deleteFile = () => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadFileStart());
    const { key } = getState().comunicados.comunicados.modal;
    await service.excluiComunicado(key);
    dispatch(actions.uploadFileSuccess(null, null));
  } catch (e) {
    logger.error(e);
    dispatch(actions.uploadFileError());
  }
};

const setCloseModal = () => async (dispatch, getState) => {
  try {
    const { urlFile, key } = getState().comunicados.comunicados.modal;
    if (!_.isNull(urlFile) && !_.isUndefined(urlFile)) {
      await service.excluiComunicado(key);
    }
    dispatch(actions.setModalOpen(false));
  } catch (error) {
    logger.error(error);
  }
};

const setOpenModal = () => (dispatch) => {
  dispatch(actions.setModalOpen(true));
};

const requestPreviewSignedUrl = () => async (dispatch, getState) => {
  try {
    const { key } = getState().comunicados.comunicados.modal;
    const signed = await service.getSignedUrl(key);
    dispatch(actions.setSignedUrl(signed));
    return signed;
  } catch (error) {
    logger.error(error);
    dispatch(operationsPage.setSnackbars('Erro ao obter URL de preview', 'error'));
    return null;
  }
};

export default {
  uploadFile,
  setDataEmissao,
  setBrand,
  deleteFile,
  setDocumento,
  setTemplate,
  resetStore,
  setKey,
  insertFile,
  deleteUrl,
  setFileName,
  getBrand,
  setCloseModal,
  setOpenModal,
  requestPreviewSignedUrl,
};
