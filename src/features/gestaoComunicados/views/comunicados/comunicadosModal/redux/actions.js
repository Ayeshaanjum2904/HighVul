const PREFIX = 'comunicadosModal';

const SET_TEMPLATE = `${PREFIX}/SET_TEMPLATE`;
const SET_DOCUMENTO = `${PREFIX}/SET_DOCUMENTO`;
const SET_BRAND = `${PREFIX}/SET_BRAND`;
const SET_DATA_EMISSAO = `${PREFIX}/SET_DATA_EMISSAO`;
const SET_URL_FILE = `${PREFIX}/SET_URL_FILE`;
const SET_FILE_NAME = `${PREFIX}/SET_FILE_NAME`;
const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_KEY = `${PREFIX}?SET_KEY`;
const UPLOAD_FILE_START = `${PREFIX}/UPLOAD_FILE_START`;
const UPLOAD_FILE_SUCCESS = `${PREFIX}/UPLOAD_FILE_SUCCESS`;
const UPLOAD_FILE_ERROR = `${PREFIX}/UPLOAD_FILE_ERROR`;
const SET_BRANDS_SELECTOR = `${PREFIX}/SET_BRANDS_SELECTOR`;
const SET_MODAL_OPEN = `${PREFIX}/SET_MODAL_OPEN`;
const SET_SIGNED_URL = `${PREFIX}/SET_SIGNED_URL`;
const SET_S3_KEY = `${PREFIX}/SET_S3_KEY`;

const setTemplate = (template) => ({
  type: SET_TEMPLATE,
  payload: { template },
});

const setDataEmissao = (dataEmissao) => ({
  type: SET_DATA_EMISSAO,
  payload: { dataEmissao },
});

const setDocumento = (documento) => ({
  type: SET_DOCUMENTO,
  payload: { documento },
});

const setBrand = (brand) => ({
  type: SET_BRAND,
  payload: { brand },
});

const setBrandsSelector = (brands) => ({
  type: SET_BRANDS_SELECTOR,
  payload: { brands },
});
const setFileName = (fileName) => ({
  type: SET_FILE_NAME,
  payload: { fileName },
});

const setFileURL = (fileURL) => ({
  type: SET_URL_FILE,
  payload: { fileURL },
});

const setKey = (key) => ({
  type: SET_KEY,
  payload: { key },
});

const uploadFileStart = () => ({
  type: UPLOAD_FILE_START,
});

const uploadFileError = () => ({
  type: UPLOAD_FILE_ERROR,
});

const uploadFileSuccess = (url, fileName) => ({
  type: UPLOAD_FILE_SUCCESS,
  payload: { url, fileName },
});

const setModalOpen = (state) => ({
  type: SET_MODAL_OPEN,
  payload: { state },
});

const resetStore = () => ({ type: RESET_STORE });

const setSignedUrl = (signedUrl) => ({
  type: SET_SIGNED_URL,
  payload: { signedUrl },
});

const setS3Key = (s3Key) => ({
  type: SET_S3_KEY,
  payload: { s3Key },
});

export default {
  types: {
    SET_TEMPLATE,
    SET_DOCUMENTO,
    SET_BRAND,
    SET_DATA_EMISSAO,
    SET_FILE_NAME,
    SET_URL_FILE,
    SET_KEY,
    RESET_STORE,
    UPLOAD_FILE_ERROR,
    UPLOAD_FILE_START,
    UPLOAD_FILE_SUCCESS,
    SET_BRANDS_SELECTOR,
    SET_MODAL_OPEN,
    SET_SIGNED_URL,
    SET_S3_KEY,
  },

  setTemplate,
  setBrand,
  setKey,
  setFileName,
  setFileURL,
  setDocumento,
  setDataEmissao,
  uploadFileError,
  uploadFileStart,
  uploadFileSuccess,
  resetStore,
  setBrandsSelector,
  setModalOpen,
  setSignedUrl,
  setS3Key,
};
