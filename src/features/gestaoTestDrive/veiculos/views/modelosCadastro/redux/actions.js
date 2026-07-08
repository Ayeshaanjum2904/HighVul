const PREFIX_SEND_MODELO = 'modeloCadastro/SEND_MODELO';
const SEND_MODELO_START = `${PREFIX_SEND_MODELO}/START`;
const SEND_MODELO_SUCCESS = `${PREFIX_SEND_MODELO}/SUCCESS`;
const SEND_MODELO_ERROR = `${PREFIX_SEND_MODELO}/ERROR`;

const PREFIX_UPLOAD_IMAGEM = 'modeloCadastro/UPLOAD_IMAGEM ';
const UPLOAD_IMAGEM_START = `${PREFIX_UPLOAD_IMAGEM}/START`;
const UPLOAD_IMAGEM_SUCCESS = `${PREFIX_UPLOAD_IMAGEM}/SUCCESS`;
const UPLOAD_IMAGEM_ERROR = `${PREFIX_UPLOAD_IMAGEM}/ERROR`;

const PREFIX_DELETE_MODELO = 'veiculosDetalhe/DELETE_MODELO';
const DELETE_MODELO_START = `${PREFIX_DELETE_MODELO}/START`;
const DELETE_MODELO_SUCCESS = `${PREFIX_DELETE_MODELO}/SUCCESS`;
const DELETE_MODELO_ERROR = `${PREFIX_DELETE_MODELO}/ERROR`;

const UPDATE_MODELO_PROPERTY = 'modeloCadastro/UPDATE_MODELO_PROPERTY';
const EDIT_MODELO = 'modeloCadastro/EDIT_MODELO';
const SET_URL_MODELO = 'modeloCadastro/SET_URL_MODELO';

const RESET_STORE = 'modeloCadastro/RESET_STORE';
const SET_OPEN = 'modeloCadastro/SET_OPEN';

const sendModeloStart = () => ({
  type: SEND_MODELO_START,
});

const sendModeloError = () => ({
  type: SEND_MODELO_ERROR,
});

const sendModeloSuccess = () => ({
  type: SEND_MODELO_SUCCESS,
});

const uploadImagemStart = () => ({
  type: UPLOAD_IMAGEM_START,
});

const uploadImagemSuccess = (urlImagem, urlDownload) => ({
  type: UPLOAD_IMAGEM_SUCCESS,
  payload: { urlImagem, urlDownload },
});

const uploadImagemError = () => ({
  type: UPLOAD_IMAGEM_ERROR,
});

const setUrlModelo = (urlModelo) => ({
  type: SET_URL_MODELO,
  payload: { urlModelo },
});

const deleteModeloStart = () => ({
  type: DELETE_MODELO_START,
});

const deleteModeloError = () => ({
  type: DELETE_MODELO_ERROR,
});

const deleteModeloSuccess = () => ({
  type: DELETE_MODELO_SUCCESS,
});

const updateModeloProperty = (propertyName, value) => ({
  type: UPDATE_MODELO_PROPERTY,
  payload: { propertyName, value },
});

const editModelo = (modelo) => ({
  type: EDIT_MODELO,
  payload: { modelo },
});

const setOpen = (isOpen) => ({
  type: SET_OPEN,
  payload: { isOpen },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    PREFIX_SEND_MODELO,
    SEND_MODELO_START,
    SEND_MODELO_SUCCESS,
    SEND_MODELO_ERROR,

    PREFIX_UPLOAD_IMAGEM,
    UPLOAD_IMAGEM_START,
    UPLOAD_IMAGEM_SUCCESS,
    UPLOAD_IMAGEM_ERROR,

    PREFIX_DELETE_MODELO,
    DELETE_MODELO_START,
    DELETE_MODELO_SUCCESS,
    DELETE_MODELO_ERROR,

    UPDATE_MODELO_PROPERTY,
    EDIT_MODELO,
    SET_URL_MODELO,

    RESET_STORE,
    SET_OPEN,
  },

  sendModeloError,
  sendModeloStart,
  sendModeloSuccess,

  uploadImagemError,
  uploadImagemStart,
  uploadImagemSuccess,

  deleteModeloStart,
  deleteModeloError,
  deleteModeloSuccess,

  updateModeloProperty,
  editModelo,
  setUrlModelo,

  resetStore,
  setOpen,
};
