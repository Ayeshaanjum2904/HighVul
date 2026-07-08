const PREFIX_SEND_VEICULO = 'veiculosCadastro/SEND_VEICULO';
const SEND_VEICULO_START = `${PREFIX_SEND_VEICULO}/START`;
const SEND_VEICULO_SUCCESS = `${PREFIX_SEND_VEICULO}/SUCCESS`;
const SEND_VEICULO_UPDATE_SUCCESS = `${PREFIX_SEND_VEICULO}/UPDATE_SUCCESS`;
const SEND_VEICULO_ERROR = `${PREFIX_SEND_VEICULO}/ERROR`;

const PREFIX_UPLOAD_IMAGEM = 'veiculosCadastro/UPLOAD_IMAGEM';
const UPLOAD_IMAGEM_START = `${PREFIX_UPLOAD_IMAGEM}/START`;
const UPLOAD_IMAGEM_SUCCESS = `${PREFIX_UPLOAD_IMAGEM}/SUCCESS`;
const UPLOAD_IMAGEM_ERROR = `${PREFIX_UPLOAD_IMAGEM}/ERROR`;

const UPDATE_VEICULO_PROPERTY = 'veiculosCadastro/UPDATE_VEICULO_PROPERTY';

const SET_BRANDS = 'veiculosCadastro/SET_BRANDS';
const SET_MODELO = 'veiculosCadastro/SET_MODELO';
const EDIT_VEICULO = 'veiculosCadastro/EDIT_VEICULO';
const SET_URL_VEICULO = 'veiculosCadastro/SET_URL_VEICULO';

const GET_URL_VEICULOS_LIST = 'veiculosCadastro/GET_URL_VEICULOS_LIST';
const SET_URL_VEICULOS_LIST = 'veiculosCadastro/SET_URL_VEICULOS_LIST';

const GET_MODELOS = 'veiculosCadastro/GET_MODELOS';
const SET_MODELOS = 'veiculosCadastro/SET_MODELOS';

const RESET_STORE = 'veiculosCadastro/RESET_STORE';
const DISMISS_SNACKBAR = 'veiculosCadastro/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'veiculosCadastro/ADD_SNACKBAR';

const sendVeiculoStart = () => ({
  type: SEND_VEICULO_START,
});

const sendVeiculoError = () => ({
  type: SEND_VEICULO_ERROR,
});

const sendVeiculoSuccess = () => ({
  type: SEND_VEICULO_SUCCESS,
});

const sendVeiculoUpdateSuccess = (veiculo) => ({
  type: SEND_VEICULO_UPDATE_SUCCESS,
  payload: { veiculo },
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

const setUrlVeiculo = (urlVeiculo) => ({
  type: SET_URL_VEICULO,
  payload: { urlVeiculo },
});

const updateVeiculoProperty = (propertyName, value) => ({
  type: UPDATE_VEICULO_PROPERTY,
  payload: { propertyName, value },
});

const setBrands = (brands) => ({
  type: SET_BRANDS,
  payload: { brands },
});

const setModelo = (modelo) => ({
  type: SET_MODELO,
  payload: { modelo },
});

const getUrlVeiculosList = () => ({
  type: GET_URL_VEICULOS_LIST,
});

const getModelos = () => ({
  type: GET_MODELOS,
});

const setUrlVeiculosList = (urlVeiculosList) => ({
  type: SET_URL_VEICULOS_LIST,
  payload: { urlVeiculosList },
});

const setModelos = (modelos) => ({
  type: SET_MODELOS,
  payload: { modelos },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const editVeiculo = (veiculo) => ({
  type: EDIT_VEICULO,
  payload: { veiculo },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    PREFIX_SEND_VEICULO,
    SEND_VEICULO_START,
    SEND_VEICULO_SUCCESS,
    SEND_VEICULO_UPDATE_SUCCESS,
    SEND_VEICULO_ERROR,

    PREFIX_UPLOAD_IMAGEM,
    UPLOAD_IMAGEM_START,
    UPLOAD_IMAGEM_SUCCESS,
    UPLOAD_IMAGEM_ERROR,

    GET_URL_VEICULOS_LIST,
    SET_URL_VEICULOS_LIST,
    GET_MODELOS,
    SET_MODELOS,

    UPDATE_VEICULO_PROPERTY,
    SET_BRANDS,
    SET_MODELO,
    EDIT_VEICULO,
    SET_URL_VEICULO,

    RESET_STORE,
    DISMISS_SNACKBAR,
    ADD_SNACKBAR,
  },

  sendVeiculoError,
  sendVeiculoStart,
  sendVeiculoSuccess,
  sendVeiculoUpdateSuccess,

  uploadImagemError,
  uploadImagemStart,
  uploadImagemSuccess,

  updateVeiculoProperty,
  setModelo,
  setBrands,
  editVeiculo,
  setUrlVeiculo,

  getUrlVeiculosList,
  setUrlVeiculosList,

  getModelos,
  setModelos,

  resetStore,
  dismissSnackbar,
  addSnackbar,
};
