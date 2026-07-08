const PREFIX_FILTERS = 'veiculosPage/FILTERS';
const SET_TEXTO = `${PREFIX_FILTERS}/SET_TEXTO`;
const SET_MARCA = `${PREFIX_FILTERS}/SET_MARCA`;
const SET_STATUS = `${PREFIX_FILTERS}/SET_STATUS`;

const PREFIX_GET_VEICULOS = 'veiculosPage/GET_VEICULOS';
const GET_VEICULOS_START = `${PREFIX_GET_VEICULOS}/START`;
const GET_VEICULOS_SUCCESS = `${PREFIX_GET_VEICULOS}/SUCCESS`;
const GET_VEICULOS_ERROR = `${PREFIX_GET_VEICULOS}/ERROR`;

const SET_VEICULOS_PAGE = 'veiculosPage/SET_VEICULOS_PAGE';

const SET_PAGE = 'veiculosPage/SET_PAGE';
const SET_IPP = 'veiculosPage/SET_IPP';
const SET_SORTING_ORDER = 'veiculosPage/SET_SORTING_ORDER';
const RESET_STORE = 'veiculosPage/RESET_STORE';
const DISMISS_SNACKBAR = 'veiculosCadastro/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'veiculosCadastro/ADD_SNACKBAR';

const setTexto = (texto) => ({
  type: SET_TEXTO,
  payload: { texto },
});

const setMarca = (marca) => ({
  type: SET_MARCA,
  payload: { marca },
});

const setStatus = (status) => ({
  type: SET_STATUS,
  payload: { status },
});

const getVeiculosStart = () => ({
  type: GET_VEICULOS_START,
});

const getVeiculosError = () => ({
  type: GET_VEICULOS_ERROR,
});

const getVeiculosSuccess = (data, pageParams) => ({
  type: GET_VEICULOS_SUCCESS,
  payload: { data, pageParams },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setVeiculosPage = (page) => ({
  type: SET_VEICULOS_PAGE,
  payload: { page },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => ({
  type: SET_SORTING_ORDER,
  payload: { nomeColuna, sentidoOrdenacao },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    PREFIX_FILTERS,
    SET_TEXTO,
    SET_MARCA,
    SET_STATUS,

    PREFIX_GET_VEICULOS,
    GET_VEICULOS_START,
    GET_VEICULOS_SUCCESS,
    GET_VEICULOS_ERROR,

    SET_VEICULOS_PAGE,

    SET_PAGE,
    SET_IPP,
    SET_SORTING_ORDER,
    RESET_STORE,
    ADD_SNACKBAR,
    DISMISS_SNACKBAR,
  },

  setTexto,
  setMarca,
  setStatus,

  getVeiculosError,
  getVeiculosStart,
  getVeiculosSuccess,

  setVeiculosPage,

  setPage,
  setIpp,
  resetStore,
  dismissSnackbar,
  addSnackbar,
  setSortingOrder,
};
