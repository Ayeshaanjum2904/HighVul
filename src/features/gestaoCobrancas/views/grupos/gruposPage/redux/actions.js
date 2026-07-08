const PREFIX_FILTERS = 'contatosPage/FILTERS';
const SET_TEXTO = `${PREFIX_FILTERS}/SET_TEXTO`;
const UPDATE_FILTERS_PROPERTY = `${PREFIX_FILTERS}/UPDATE_FILTERS_PROPERTY`;

const PREFIX_GET_GRUPOS = 'gruposPage/GET_GRUPOS';
const GET_GRUPOS_START = `${PREFIX_GET_GRUPOS}/START`;
const GET_GRUPOS_SUCCESS = `${PREFIX_GET_GRUPOS}/SUCCESS`;
const GET_GRUPOS_ERROR = `${PREFIX_GET_GRUPOS}/ERROR`;

const PREFIX_UPDATE_CONFIG = 'gruposPage/UPDATE_CONFIG';
const UPDATE_CONFIG_START = `${PREFIX_UPDATE_CONFIG}/START`;
const UPDATE_CONFIG_SUCCESS = `${PREFIX_UPDATE_CONFIG}/SUCCESS`;
const UPDATE_CONFIG_ERROR = `${PREFIX_UPDATE_CONFIG}/ERROR`;

const SET_GRUPOS_PAGE = 'gruposPage/SET_GRUPOS_PAGE';
const SET_PAGE = 'gruposPage/SET_PAGE';
const SET_IPP = 'gruposPage/SET_IPP';
const RESET_STORE = 'gruposPage/RESET_STORE';
const DISMISS_SNACKBAR = 'gruposPage/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'gruposPage/ADD_SNACKBAR';

const PREFIX_EXPORT_RELATORIO = 'gruposPage/EXPORT_RELATORIO';
const EXPORT_RELATORIO_START = `${PREFIX_EXPORT_RELATORIO}/START`;
const EXPORT_RELATORIO_SUCCESS = `${PREFIX_EXPORT_RELATORIO}/SUCCESS`;
const EXPORT_RELATORIO_ERROR = `${PREFIX_EXPORT_RELATORIO}/ERROR`;

const setTexto = (texto) => ({
  type: SET_TEXTO,
  payload: { texto },
});

const updateFiltersProperty = (propertyName, value) => ({
  type: UPDATE_FILTERS_PROPERTY,
  payload: { propertyName, value },
});

const getGruposStart = () => ({
  type: GET_GRUPOS_START,
});

const getGruposError = () => ({
  type: GET_GRUPOS_ERROR,
});

const getGruposSuccess = (response, pageParams) => ({
  type: GET_GRUPOS_SUCCESS,
  payload: { pageParams, response },
});

const updateConfigStart = (action, id) => ({
  type: UPDATE_CONFIG_START,
  payload: { action, id },
});

const updateConfigError = (action, id) => ({
  type: UPDATE_CONFIG_ERROR,
  payload: { action, id },
});

const updateConfigSuccess = (action, propertyName, id, status) => ({
  type: UPDATE_CONFIG_SUCCESS,
  payload: {
    action, propertyName, id, status,
  },
});

const setGruposPage = (page) => ({
  type: SET_GRUPOS_PAGE,
  payload: { page },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const resetStore = () => ({ type: RESET_STORE });

const exportRelatorioStart = () => ({ type: EXPORT_RELATORIO_START });
const exportRelatorioSuccess = () => ({ type: EXPORT_RELATORIO_SUCCESS });
const exportRelatorioError = () => ({ type: EXPORT_RELATORIO_ERROR });

export default {
  types: {
    PREFIX_FILTERS,
    UPDATE_FILTERS_PROPERTY,
    SET_TEXTO,

    PREFIX_GET_GRUPOS,
    GET_GRUPOS_START,
    GET_GRUPOS_SUCCESS,
    GET_GRUPOS_ERROR,

    PREFIX_UPDATE_CONFIG,
    UPDATE_CONFIG_START,
    UPDATE_CONFIG_SUCCESS,
    UPDATE_CONFIG_ERROR,

    SET_GRUPOS_PAGE,
    ADD_SNACKBAR,
    DISMISS_SNACKBAR,
    SET_PAGE,
    SET_IPP,
    RESET_STORE,

    PREFIX_EXPORT_RELATORIO,
    EXPORT_RELATORIO_START,
    EXPORT_RELATORIO_SUCCESS,
    EXPORT_RELATORIO_ERROR,
  },
  setTexto,
  updateFiltersProperty,

  getGruposError,
  getGruposStart,
  getGruposSuccess,

  updateConfigError,
  updateConfigStart,
  updateConfigSuccess,

  setPage,
  setIpp,
  setGruposPage,
  resetStore,
  addSnackbar,
  dismissSnackbar,

  exportRelatorioStart,
  exportRelatorioSuccess,
  exportRelatorioError,
};
