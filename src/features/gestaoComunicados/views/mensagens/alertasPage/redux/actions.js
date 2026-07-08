const PREFIX_GET_ALERTAS = 'alertasPage/GET_ALERTAS';
const GET_ALERTAS_START = `${PREFIX_GET_ALERTAS}/START`;
const GET_ALERTAS_SUCCESS = `${PREFIX_GET_ALERTAS}/SUCCESS`;
const GET_ALERTAS_ERROR = `${PREFIX_GET_ALERTAS}/ERROR`;

const PREFIX_DELETE_ALERTA = 'alertasPage/DELETE_ALERTA';
const DELETE_ALERTA_START = `${PREFIX_DELETE_ALERTA}/START`;
const DELETE_ALERTA_SUCCESS = `${PREFIX_DELETE_ALERTA}/SUCCESS`;
const DELETE_ALERTA_ERROR = `${PREFIX_DELETE_ALERTA}/ERROR`;

const SET_ALERTA_ID = 'alertasPage/SET_ALERTA_ID';
const SET_PAGE = 'alertasPage/SET_PAGE';
const SET_IPP = 'alertasPage/SET_IPP';
const RESET_STORE = 'alertasPage/RESET_STORE';
const SET_TITULO = 'alertasPage/SET_TITULO';
const SET_BRAND = 'alertasPage/SET_BRAND';
const SET_BRAND_LIST = 'alertasPage/SET_BRAND_LIST';
const SET_START_DATE = 'alertasPage/SET_START_DATE';
const SET_END_DATE = 'alertasPage/SET_END_DATE';
const SET_FILTERS = 'alertasPage/SET_FILTERS';
const CLEAR_FILTERS = 'alertasPage/CLEAR_FILTERS';
const SET_SORTING_ORDER = 'alertasPage/SET_SORTING_ORDER';

const getAlertasStart = () => ({
  type: GET_ALERTAS_START,
});

const getAlertasError = () => ({
  type: GET_ALERTAS_ERROR,
});

const getAlertasSuccess = (alertas, pageParams) => ({
  type: GET_ALERTAS_SUCCESS,
  payload: { pageParams, alertas },
});

const deleteAlertaStart = () => ({
  type: DELETE_ALERTA_START,
});

const deleteAlertaError = () => ({
  type: DELETE_ALERTA_ERROR,
});

const deleteAlertaSuccess = () => ({
  type: DELETE_ALERTA_SUCCESS,
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setAlertaId = (id) => ({
  type: SET_ALERTA_ID,
  payload: { id },
});

const setTitulo = (texto) => ({
  type: SET_TITULO,
  payload: { texto },
});

const setBrand = (brand) => ({
  type: SET_BRAND,
  payload: { brand },
});

const setBrandList = (brandList) => ({
  type: SET_BRAND_LIST,
  payload: { brandList },
});

const setStartDate = (dataInicio) => ({
  type: SET_START_DATE,
  payload: { dataInicio },
});

const setEndDate = (dataFim) => ({
  type: SET_END_DATE,
  payload: { dataFim },
});

const setFilters = (isFilterSelected) => ({
  type: SET_FILTERS,
  payload: { isFilterSelected },
});

const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => ({
  type: SET_SORTING_ORDER,
  payload: { nomeColuna, sentidoOrdenacao },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {

    PREFIX_GET_ALERTAS,
    GET_ALERTAS_START,
    GET_ALERTAS_SUCCESS,
    GET_ALERTAS_ERROR,

    PREFIX_DELETE_ALERTA,
    DELETE_ALERTA_START,
    DELETE_ALERTA_SUCCESS,
    DELETE_ALERTA_ERROR,

    SET_PAGE,
    SET_IPP,
    RESET_STORE,
    SET_ALERTA_ID,

    SET_TITULO,
    SET_BRAND,
    SET_BRAND_LIST,
    SET_START_DATE,
    SET_END_DATE,
    SET_FILTERS,
    CLEAR_FILTERS,
    SET_SORTING_ORDER,
  },

  getAlertasError,
  getAlertasStart,
  getAlertasSuccess,

  deleteAlertaError,
  deleteAlertaStart,
  deleteAlertaSuccess,

  setPage,
  setIpp,
  resetStore,
  setAlertaId,

  setTitulo,
  setBrand,
  setBrandList,
  setStartDate,
  setEndDate,
  setFilters,
  clearFilters,
  setSortingOrder,
};
