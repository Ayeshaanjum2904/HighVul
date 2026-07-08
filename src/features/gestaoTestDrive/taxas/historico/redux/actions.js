const PREFIX = 'taxasHistorico';

const SET_FILTER = `${PREFIX}/SET_FILTER`;
const SET_PAGE = `${PREFIX}/SET_PAGE`;
const SET_IPP = `${PREFIX}/SET_IPP`;

const GET_HISTORICO_START = `${PREFIX}/GET_HISTORICO_START`;
const GET_HISTORICO_SUCCESS = `${PREFIX}/GET_OFERTAS_SUCCESS`;
const GET_HISTORICO_ERROR = `${PREFIX}/GET_OFERTAS_ERROR`;

const UPDATE_DATA_START = `${PREFIX}/UPDATE_DATA_START`;
const UPDATE_DATA_SUCESS = `${PREFIX}/UPDATE_DATA_SUCESS`;
const UPDATE_DATA_ERROR = `${PREFIX}/UPDATE_DATA_ERROR`;
const DELETE_TAXA_START = `${PREFIX}/DELETE_TAXA_START`;
const DELETE_TAXA_SUCCESS = `${PREFIX}/DELETE_TAXA_SUCCESS`;
const DELETE_TAXA_ERROR = `${PREFIX}/DELETE_TAXA_ERROR`;

const DISMISS_SNACKBAR = `${PREFIX}/DISMISS_SNACKBAR`;
const ADD_SNACKBAR = `${PREFIX}/ADD_SNACKBAR`;
const SET_INPUT_DATA = `${PREFIX}/SET_INPUT_DATA`;
const SET_TAXA_OPEN = `${PREFIX}/SET_TAXA_OPEN`;
const CLEAR_FORM = `${PREFIX}/CLEAR_FORM`;
const CLEAR_STATE_BRAND = `${PREFIX}/CLEAR_STATE_BRAND`;
const RESET_STORE = `${PREFIX}/RESET_STORE`;

const setInputData = (paramName, value) => ({
  type: SET_INPUT_DATA,
  payload: { paramName, value },
});

const setTaxaOpen = (taxa) => ({
  type: SET_TAXA_OPEN,
  payload: { taxa },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const setFilter = (paramName, value) => ({
  type: SET_FILTER,
  payload: { paramName, value },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const getHistoricoStart = () => ({
  type: GET_HISTORICO_START,
});

const getHistoricoError = () => ({
  type: GET_HISTORICO_ERROR,
});

const getHistoricoSuccess = (data, totalItems, marcas) => ({
  type: GET_HISTORICO_SUCCESS,
  payload: { data, totalItems, marcas },
});

const updateDataStart = () => ({
  type: UPDATE_DATA_START,
});

const updateDataSucess = () => ({
  type: UPDATE_DATA_SUCESS,
});

const updateDataError = (errors) => ({
  type: UPDATE_DATA_ERROR,
  payload: { errors },
});

const clearForm = () => ({
  type: CLEAR_FORM,
});
const clearStateBrand = () => ({
  type: CLEAR_STATE_BRAND,
});

const deleteTaxaStart = () => ({
  type: DELETE_TAXA_START,
});

const deleteTaxaSuccess = () => ({
  type: DELETE_TAXA_SUCCESS,
});

const deleteTaxaError = () => ({
  type: DELETE_TAXA_ERROR,
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    SET_FILTER,
    SET_PAGE,
    SET_IPP,
    GET_HISTORICO_ERROR,
    GET_HISTORICO_START,
    GET_HISTORICO_SUCCESS,
    UPDATE_DATA_SUCESS,
    UPDATE_DATA_ERROR,
    UPDATE_DATA_START,
    DELETE_TAXA_START,
    DELETE_TAXA_SUCCESS,
    DELETE_TAXA_ERROR,
    ADD_SNACKBAR,
    DISMISS_SNACKBAR,
    SET_INPUT_DATA,
    SET_TAXA_OPEN,
    CLEAR_FORM,
    CLEAR_STATE_BRAND,
    RESET_STORE,
  },

  setFilter,
  setPage,
  setIpp,

  getHistoricoError,
  getHistoricoStart,
  getHistoricoSuccess,
  updateDataSucess,
  updateDataError,
  updateDataStart,
  deleteTaxaStart,
  deleteTaxaSuccess,
  deleteTaxaError,

  setInputData,
  setTaxaOpen,
  addSnackbar,
  dismissSnackbar,
  clearForm,
  clearStateBrand,
  resetStore,
};
