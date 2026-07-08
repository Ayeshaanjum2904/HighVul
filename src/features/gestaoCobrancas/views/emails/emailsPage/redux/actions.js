const PREFIX_GET_TEMPLATES = 'emailsPage/GET_TEMPLATES';
const GET_TEMPLATES_START = `${PREFIX_GET_TEMPLATES}/START`;
const GET_TEMPLATES_SUCCESS = `${PREFIX_GET_TEMPLATES}/SUCCESS`;
const GET_TEMPLATES_ERROR = `${PREFIX_GET_TEMPLATES}/ERROR`;

const PREFIX_GET_CONFIGURACOES = 'emailsPage/GET_CONFIGURACOES';
const GET_CONFIGURACOES_START = `${PREFIX_GET_CONFIGURACOES}/START`;
const GET_CONFIGURACOES_SUCCESS = `${PREFIX_GET_CONFIGURACOES}/SUCCESS`;
const GET_CONFIGURACOES_ERROR = `${PREFIX_GET_CONFIGURACOES}/ERROR`;

const PREFIX_UPDATE_CONFIG = 'emailsPage/UPDATE_CONFIG';
const UPDATE_CONFIG_START = `${PREFIX_UPDATE_CONFIG}/START`;
const UPDATE_CONFIG_SUCCESS = `${PREFIX_UPDATE_CONFIG}/SUCCESS`;
const UPDATE_CONFIG_ERROR = `${PREFIX_UPDATE_CONFIG}/ERROR`;
const UPDATE_PRODUTO = `${PREFIX_UPDATE_CONFIG}/PRODUTO`;
const UPDATE_TIPO = `${PREFIX_UPDATE_CONFIG}/TIPO`;

const RESET_STORE = 'emailsPage/RESET_STORE';
const DISMISS_SNACKBAR = 'emailsPage/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'emailsPage/ADD_SNACKBAR';

const getTemplatesStart = () => ({
  type: GET_TEMPLATES_START,
});

const getTemplatesError = () => ({
  type: GET_TEMPLATES_ERROR,
});

const getTemplatesSuccess = (templates) => ({
  type: GET_TEMPLATES_SUCCESS,
  payload: { templates },
});

const getConfiguracoesStart = () => ({
  type: GET_CONFIGURACOES_START,
});

const getConfiguracoesError = () => ({
  type: GET_CONFIGURACOES_ERROR,
});

const getConfiguracoesSuccess = (configuracoes) => ({
  type: GET_CONFIGURACOES_SUCCESS,
  payload: { configuracoes },
});

const updateConfigStart = (action, id) => ({
  type: UPDATE_CONFIG_START,
  payload: { action, id },
});

const updateConfigError = (action, id) => ({
  type: UPDATE_CONFIG_ERROR,
  payload: { action, id },
});

const updateConfigSuccess = (action, id) => ({
  type: UPDATE_CONFIG_SUCCESS,
  payload: { action, id },
});

const updateConfigProduto = (configuracao) => ({
  type: UPDATE_PRODUTO,
  payload: { configuracao },
});

const updateConfigTipo = (configuracao) => ({
  type: UPDATE_TIPO,
  payload: { configuracao },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {

    PREFIX_GET_TEMPLATES,
    GET_TEMPLATES_START,
    GET_TEMPLATES_SUCCESS,
    GET_TEMPLATES_ERROR,

    PREFIX_GET_CONFIGURACOES,
    GET_CONFIGURACOES_START,
    GET_CONFIGURACOES_SUCCESS,
    GET_CONFIGURACOES_ERROR,

    PREFIX_UPDATE_CONFIG,
    UPDATE_CONFIG_START,
    UPDATE_CONFIG_SUCCESS,
    UPDATE_CONFIG_ERROR,
    UPDATE_PRODUTO,
    UPDATE_TIPO,

    RESET_STORE,
    DISMISS_SNACKBAR,
    ADD_SNACKBAR,
  },

  getTemplatesError,
  getTemplatesStart,
  getTemplatesSuccess,

  getConfiguracoesError,
  getConfiguracoesStart,
  getConfiguracoesSuccess,

  updateConfigError,
  updateConfigStart,
  updateConfigSuccess,
  updateConfigProduto,
  updateConfigTipo,

  resetStore,
  addSnackbar,
  dismissSnackbar,
};
