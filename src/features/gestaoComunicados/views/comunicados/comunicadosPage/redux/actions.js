const PREFIX = 'comunicadosPage';
const PREFIX_GET_COMUNICADOS = `${PREFIX}/GET_COMUNICADOS`;
const PREFIX_DELETE_COMUNICADO = `${PREFIX}/DELETE_COMUNICADO`;

const SET_PAGE = `${PREFIX}/SET_PAGE`;
const SET_IPP = `${PREFIX}/SET_IPP`;
const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_COMUNICADO_ID = `${PREFIX}/SET_COMUNICADO_ID`;
const DISMISS_SNACKBARS = `${PREFIX}/DISMISS_SNACKBARS`;
const SET_SNACKBARS = `${PREFIX}/SET_SNACKBARS`;
const SET_TITULO = `${PREFIX}/SET_TITULO`;
const SET_BRAND = `${PREFIX}/SET_BRAND`;
const SET_BRAND_LIST = `${PREFIX}/SET_BRAND_LIST`;
const SET_START_DATE = `${PREFIX}/SET_START_DATE`;
const SET_END_DATE = `${PREFIX}/SET_END_DATE`;
const SET_FILTERS = `${PREFIX}/SET_FILTERS`;
const CLEAR_FILTERS = `${PREFIX}/CLEAR_FILTERS`;
const SET_SORTING_ORDER = `${PREFIX}/SET_SORTING_ORDER`;

const GET_COMUNICADOS_START = `${PREFIX_GET_COMUNICADOS}/START`;
const GET_COMUNICADOS_SUCCESS = `${PREFIX_GET_COMUNICADOS}/SUCCESS`;
const GET_COMUNICADOS_ERROR = `${PREFIX_GET_COMUNICADOS}/ERROR`;

const DELETE_COMUNICADO_START = `${PREFIX_DELETE_COMUNICADO}/DELETE_COMUNICADO_START`;
const DELETE_COMUNICADO_SUCCESS = `${PREFIX_DELETE_COMUNICADO}/DELETE_COMUNICADO_SUCCESS`;
const DELETE_COMUNICADO_ERROR = `${PREFIX_DELETE_COMUNICADO}/DELETE_COMUNICADO_ERROR`;

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setComunicadoId = (idArquivo) => ({
  type: SET_COMUNICADO_ID,
  payload: { idArquivo },
});

const getComunicadosStart = () => ({
  type: GET_COMUNICADOS_START,
});

const getComunicadosError = () => ({
  type: GET_COMUNICADOS_ERROR,
});

const getComunicadosSuccess = (pageParams, comunicados) => ({
  type: GET_COMUNICADOS_SUCCESS,
  payload: { pageParams, comunicados },
});

const deleteComunicadoStart = () => ({
  type: DELETE_COMUNICADO_START,
});

const deleteComunicadoSuccess = () => ({
  type: DELETE_COMUNICADO_SUCCESS,
});

const deleteComunicadoError = () => ({
  type: DELETE_COMUNICADO_ERROR,
});

const dismissSnackbars = (id) => ({
  type: DISMISS_SNACKBARS,
  payload: { id },
});

const setSnackbars = (menssagem, tipo) => ({
  type: SET_SNACKBARS,
  payload: { menssagem, tipo },
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
    SET_PAGE,
    SET_IPP,
    SET_COMUNICADO_ID,
    RESET_STORE,
    GET_COMUNICADOS_ERROR,
    GET_COMUNICADOS_START,
    GET_COMUNICADOS_SUCCESS,
    PREFIX_GET_COMUNICADOS,
    PREFIX_DELETE_COMUNICADO,
    DELETE_COMUNICADO_START,
    DELETE_COMUNICADO_SUCCESS,
    DELETE_COMUNICADO_ERROR,
    DISMISS_SNACKBARS,
    SET_SNACKBARS,
    SET_TITULO,
    SET_BRAND,
    SET_BRAND_LIST,
    SET_START_DATE,
    SET_END_DATE,
    SET_FILTERS,
    CLEAR_FILTERS,
    SET_SORTING_ORDER,
  },

  resetStore,
  setPage,
  setSnackbars,
  setIpp,
  setComunicadoId,
  getComunicadosError,
  getComunicadosStart,
  getComunicadosSuccess,
  deleteComunicadoError,
  deleteComunicadoStart,
  deleteComunicadoSuccess,
  dismissSnackbars,
  setTitulo,
  setBrand,
  setBrandList,
  setStartDate,
  setEndDate,
  setFilters,
  clearFilters,
  setSortingOrder,
};
