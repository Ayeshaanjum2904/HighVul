const PREFIX_FILTERS = 'gerentesPage/FILTERS';
const SET_MARCA = `${PREFIX_FILTERS}/SET_MARCA`;
const SET_REGIONAL = `${PREFIX_FILTERS}/SET_REGIONAL`;

const PREFIX_GET_ASSOCIACOES = 'gerentesPage/GET_ASSOCIACOES';
const GET_ASSOCIACOES_START = `${PREFIX_GET_ASSOCIACOES}/START`;
const GET_ASSOCIACOES_SUCCESS = `${PREFIX_GET_ASSOCIACOES}/SUCCESS`;
const GET_ASSOCIACOES_ERROR = `${PREFIX_GET_ASSOCIACOES}/ERROR`;

const SET_PAGE = 'gerentesPage/SET_PAGE';
const SET_IPP = 'gerentesPage/SET_IPP';
const RESET_STORE = 'gerentesPage/RESET_STORE';
const DISMISS_SNACKBAR = 'gerentesPage/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'gerentesPage/ADD_SNACKBAR';

const getAssociacoesStart = () => ({
  type: GET_ASSOCIACOES_START,
});

const getAssociacoesError = () => ({
  type: GET_ASSOCIACOES_ERROR,
});

const getAssociacoesSuccess = (response, pageParams) => ({
  type: GET_ASSOCIACOES_SUCCESS,
  payload: { pageParams, response },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setMarca = (marca) => ({
  type: SET_MARCA,
  payload: { marca },
});

const setRegional = (regional) => ({
  type: SET_REGIONAL,
  payload: { regional },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    PREFIX_GET_ASSOCIACOES,
    GET_ASSOCIACOES_ERROR,
    GET_ASSOCIACOES_START,
    GET_ASSOCIACOES_SUCCESS,

    SET_MARCA,
    SET_REGIONAL,

    SET_PAGE,
    SET_IPP,
    RESET_STORE,
    DISMISS_SNACKBAR,
    ADD_SNACKBAR,
  },

  getAssociacoesError,
  getAssociacoesStart,
  getAssociacoesSuccess,

  setMarca,
  setRegional,

  setPage,
  setIpp,
  resetStore,
  addSnackbar,
  dismissSnackbar,
};
