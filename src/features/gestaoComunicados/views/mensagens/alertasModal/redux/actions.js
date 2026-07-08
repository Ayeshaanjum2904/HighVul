const PREFIX_SEND_ALERTA = 'alertasCreate/SEND_ALERTA';
const SEND_ALERTA_START = `${PREFIX_SEND_ALERTA}/START`;
const SEND_ALERTA_SUCCESS = `${PREFIX_SEND_ALERTA}/SUCCESS`;
const SEND_ALERTA_ERROR = `${PREFIX_SEND_ALERTA}/ERROR`;

const PREFIX_GET_ALERTA = 'alertasCreate/GET_ALERTA';
const GET_ALERTA_START = `${PREFIX_GET_ALERTA}/START`;
const GET_ALERTA_SUCCESS = `${PREFIX_GET_ALERTA}/SUCCESS`;
const GET_ALERTA_ERROR = `${PREFIX_GET_ALERTA}/ERROR`;

const PREFIX_UPLOAD_IMAGEM = 'alertasCreate/UPLOAD_IMAGEM';
const UPLOAD_IMAGEM_START = `${PREFIX_UPLOAD_IMAGEM}/START`;
const UPLOAD_IMAGEM_SUCCESS = `${PREFIX_UPLOAD_IMAGEM}/SUCCESS`;
const UPLOAD_IMAGEM_ERROR = `${PREFIX_UPLOAD_IMAGEM}/ERROR`;

const SET_MODAL_ALERTA_OPEN = 'alertasCreate/SET_MODAL_ALERTA_OPEN';
const SET_TITULO = 'alertasCreate/SET_TITULO';
const SET_MENSAGEM = 'alertasCreate/SET_MENSAGEM';
const SET_START_DATE = 'alertasCreate/SET_START_DATE';
const SET_END_DATE = 'alertasCreate/SET_END_DATE';
const SET_BRANDS = 'alertasCreate/SET_BRANDS';
const SET_MODAL_STATUS = 'alertasCreate/SET_MODAL_STATUS';
const CLEAR_URL_IMAGEM = 'alertasCreate/CLEAR_URL_IMAGEM';

const SET_SIGNED_URL = 'alertasCreate/SET_SIGNED_URL';
const SET_S3_KEY = 'alertasCreate/SET_S3_KEY';
const RESET_STORE = 'alertasCreate/RESET_STORE';

const sendAlertaStart = () => ({
  type: SEND_ALERTA_START,
});

const sendAlertaError = () => ({
  type: SEND_ALERTA_ERROR,
});

const sendAlertaSuccess = () => ({
  type: SEND_ALERTA_SUCCESS,
});

const getAlertaStart = () => ({
  type: GET_ALERTA_START,
});

const getAlertaError = () => ({
  type: GET_ALERTA_ERROR,
});

const getAlertaSuccess = (alerta) => ({
  type: GET_ALERTA_SUCCESS,
  payload: { alerta },
});

const uploadImagemStart = () => ({
  type: UPLOAD_IMAGEM_START,
});

const uploadImagemSuccess = (urlImagem, nomeImagem) => ({
  type: UPLOAD_IMAGEM_SUCCESS,
  payload: { urlImagem, nomeImagem },
});

const uploadImagemError = () => ({
  type: UPLOAD_IMAGEM_ERROR,
});

const setTitulo = (titulo) => ({
  type: SET_TITULO,
  payload: { titulo },
});

const setMensagem = (mensagem) => ({
  type: SET_MENSAGEM,
  payload: { mensagem },
});

const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  payload: { startDate },
});

const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  payload: { endDate },
});

const setBrands = (brands) => ({
  type: SET_BRANDS,
  payload: { brands },
});

const setModalAlertaOpen = (status) => ({
  type: SET_MODAL_ALERTA_OPEN,
  payload: { status },
});

const setModalStatus = (status) => ({
  type: SET_MODAL_STATUS,
  payload: { status },
});

const clearUrlImagem = () => ({
  type: CLEAR_URL_IMAGEM,
});

const setSignedUrl = (signedUrl) => ({
  type: SET_SIGNED_URL,
  payload: { signedUrl },
});

const setS3Key = (s3Key) => ({
  type: SET_S3_KEY,
  payload: { s3Key },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {

    PREFIX_SEND_ALERTA,
    SEND_ALERTA_START,
    SEND_ALERTA_SUCCESS,
    SEND_ALERTA_ERROR,

    PREFIX_GET_ALERTA,
    GET_ALERTA_START,
    GET_ALERTA_SUCCESS,
    GET_ALERTA_ERROR,

    PREFIX_UPLOAD_IMAGEM,
    UPLOAD_IMAGEM_START,
    UPLOAD_IMAGEM_SUCCESS,
    UPLOAD_IMAGEM_ERROR,

    SET_TITULO,
    SET_MENSAGEM,
    SET_START_DATE,
    SET_END_DATE,
    SET_BRANDS,
    SET_MODAL_ALERTA_OPEN,
    SET_MODAL_STATUS,
    CLEAR_URL_IMAGEM,
    SET_SIGNED_URL,
    SET_S3_KEY,

    RESET_STORE,
  },

  sendAlertaError,
  sendAlertaStart,
  sendAlertaSuccess,

  getAlertaError,
  getAlertaStart,
  getAlertaSuccess,

  uploadImagemError,
  uploadImagemStart,
  uploadImagemSuccess,

  setTitulo,
  setMensagem,
  setStartDate,
  setEndDate,
  setBrands,
  setModalAlertaOpen,
  setModalStatus,
  clearUrlImagem,
  setSignedUrl,
  setS3Key,

  resetStore,
};
