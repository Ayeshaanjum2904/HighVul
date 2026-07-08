const PREFIX = 'condicoesPage';

const PREFIX_GET_CONDICOES = `${PREFIX}/GET_CONDICOES`;
const GET_CONDICOES_START = `${PREFIX_GET_CONDICOES}/GET_CONDICOES_START`;
const GET_CONDICOES_SUCCESS = `${PREFIX_GET_CONDICOES}/GET_CONDICOES_SUCCESS`;
const GET_CONDICOES_ERROR = `${PREFIX_GET_CONDICOES}/GET_CONDICOES_ERROR`;

const SET_CONDICAO_SWITCH = `${PREFIX}/SET_CONDICAO_SWITCH`;

const SET_FILTER = `${PREFIX}/SET_FILTER`;
const SET_PAGE = `${PREFIX}/SET_PAGE`;
const SET_CONDICAO_ID = `${PREFIX}/SET_CONDICAO_ID`;
const SET_PAGE_NUMBER = `${PREFIX}/SET_PAGE_NUMBER`;
const SET_IPP = `${PREFIX}/SET_IPP`;
const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_SNACKBAR = `${PREFIX}/SET_SNACKBAR`;
const DISMISS_SNACKBAR = `${PREFIX}/DISMISS_SNACKBAR`;

const setFilter = (propertyName, value) => ({
  type: SET_FILTER,
  payload: { propertyName, value },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setPageNumber = (page) => ({
  type: SET_PAGE_NUMBER,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const resetStore = () => ({
  type: RESET_STORE,
});

const setSnackbar = (type, message) => ({
  type: SET_SNACKBAR,
  payload: { type, message },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const getCondicoesStart = () => ({
  type: GET_CONDICOES_START,
});

const getCondicoesError = () => ({
  type: GET_CONDICOES_ERROR,
});

const getCondicoesSuccess = (response) => ({
  type: GET_CONDICOES_SUCCESS,
  payload: { response },
});

const setCondicaoSwitch = (idCondicao) => ({
  type: SET_CONDICAO_SWITCH,
  payload: { idCondicao },
});

export default {
  types: {
    SET_FILTER,
    SET_PAGE,
    SET_CONDICAO_ID,
    SET_PAGE_NUMBER,
    SET_IPP,
    RESET_STORE,
    SET_SNACKBAR,
    DISMISS_SNACKBAR,

    PREFIX_GET_CONDICOES,
    GET_CONDICOES_START,
    GET_CONDICOES_ERROR,
    GET_CONDICOES_SUCCESS,
    SET_CONDICAO_SWITCH,
  },

  setFilter,
  setPage,
  setPageNumber,
  setIpp,
  resetStore,
  setSnackbar,
  dismissSnackbar,
  getCondicoesError,
  getCondicoesStart,
  getCondicoesSuccess,
  setCondicaoSwitch,
};
