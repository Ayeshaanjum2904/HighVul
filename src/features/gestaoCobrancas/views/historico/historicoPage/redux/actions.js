const PREFIX_GET_HISTORICO = 'historicoPage/GET_HISTORICO';
const PREFIX = 'historicoPage';

const GET_HISTORICO_START = `${PREFIX_GET_HISTORICO}/START`;
const GET_HISTORICO_SUCCESS = `${PREFIX_GET_HISTORICO}/UCCESS`;
const GET_HISTORICO_ERROR = `${PREFIX_GET_HISTORICO}/ERROR`;

const RESET_STORE = `${PREFIX}/RESET_STORE`;

const SET_FILTER = `${PREFIX}/SET_FILTER`;

const SET_PAGE = `${PREFIX}/SET_PAGE`;

const SET_IPP = `${PREFIX}/SET_IPP`;

const getHistoricoStart = () => ({
  type: GET_HISTORICO_START,
});

const getHistoricoFail = () => ({
  type: GET_HISTORICO_ERROR,
});

const getHistoricoSuccess = (response) => ({
  type: GET_HISTORICO_SUCCESS,
  payload: { response },
});

const resetStore = () => ({
  type: RESET_STORE,
});

const setFilter = (filterName, value) => ({
  type: SET_FILTER,
  payload: { filterName, value },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

export default {
  types: {
    PREFIX_GET_HISTORICO,
    GET_HISTORICO_ERROR,
    GET_HISTORICO_START,
    GET_HISTORICO_SUCCESS,
    RESET_STORE,
    SET_FILTER,
    SET_PAGE,
    SET_IPP,
  },
  setPage,
  setIpp,
  getHistoricoFail,
  getHistoricoStart,
  getHistoricoSuccess,
  resetStore,
  setFilter,
};
