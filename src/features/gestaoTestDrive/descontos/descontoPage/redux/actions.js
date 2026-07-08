const PREFIX = 'descontosPage';

const PREFIX_GET_DESCONTOS = `${PREFIX}/GET_DESCONTOS`;
const GET_DESCONTOS_START = `${PREFIX_GET_DESCONTOS}/GET_DESCONTOS_START`;
const GET_DESCONTOS_SUCCESS = `${PREFIX_GET_DESCONTOS}/GET_DESCONTOS_SUCCESS`;
const GET_DESCONTOS_ERROR = `${PREFIX_GET_DESCONTOS}/GET_DESCONTOS_ERROR`;

const SET_FILTER = `${PREFIX}/SET_FILTER`;
const SET_PAGE = `${PREFIX}/SET_PAGE`;
const SET_PAGE_NUMBER = `${PREFIX}/SET_PAGE_NUMBER`;
const SET_IPP = `${PREFIX}/SET_IPP`;
const SET_DESCONTO_SWITCH = `${PREFIX}/SET_DESCONTO_SWITCH`;
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

const getDescontosStart = () => ({
  type: GET_DESCONTOS_START,
});

const getDescontosError = () => ({
  type: GET_DESCONTOS_ERROR,
});

const getDescontosSuccess = (response) => ({
  type: GET_DESCONTOS_SUCCESS,
  payload: { response },
});

const setDescontoSwitch = (idDesconto) => ({
  type: SET_DESCONTO_SWITCH,
  payload: { idDesconto },
});

export default {
  types: {
    SET_FILTER,
    SET_PAGE,
    SET_PAGE_NUMBER,
    SET_IPP,
    RESET_STORE,
    SET_SNACKBAR,
    DISMISS_SNACKBAR,

    PREFIX_GET_DESCONTOS,
    GET_DESCONTOS_START,
    GET_DESCONTOS_ERROR,
    GET_DESCONTOS_SUCCESS,
    SET_DESCONTO_SWITCH,
  },

  setFilter,
  setPage,
  setPageNumber,
  setIpp,
  resetStore,
  setSnackbar,
  dismissSnackbar,
  getDescontosError,
  getDescontosStart,
  getDescontosSuccess,
  setDescontoSwitch,
};
