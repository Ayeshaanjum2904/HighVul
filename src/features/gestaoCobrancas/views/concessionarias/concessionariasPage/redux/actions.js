const SET_CONCESSIONARIAS_PAGE = 'concessionariasPage/SET_CONCESSIONARIAS_PAGE';

const PREFIX_GET_CONCESSIONARIAS = 'concessionariasPage/GET_CONCESSIONARIAS';
const GET_CONCESSIONARIAS_START = `${PREFIX_GET_CONCESSIONARIAS}/START`;
const GET_CONCESSIONARIAS_SUCCESS = `${PREFIX_GET_CONCESSIONARIAS}/SUCCESS`;
const GET_CONCESSIONARIAS_ERROR = `${PREFIX_GET_CONCESSIONARIAS}/ERROR`;

const PREFIX_EXPORT_RELATORIO = 'concessionariasPage/EXPORT_RELATORIO';
const EXPORT_RELATORIO_START = `${PREFIX_EXPORT_RELATORIO}/START`;
const EXPORT_RELATORIO_SUCCESS = `${PREFIX_EXPORT_RELATORIO}/SUCCESS`;
const EXPORT_RELATORIO_ERROR = `${PREFIX_EXPORT_RELATORIO}/ERROR`;

const SET_PAGE = 'concessionariasPage/SET_PAGE';
const SET_IPP = 'concessionariasPage/SET_IPP';
const SET_FILTER = 'concessionariasPage/SET_FILTER';
const RESET_STORE = 'concessionariasPage/RESET_STORE';

const getConcessionariasStart = () => ({
  type: GET_CONCESSIONARIAS_START,
});

const getConcessionariasError = () => ({
  type: GET_CONCESSIONARIAS_ERROR,
});

const getConcessionariasSuccess = (response) => ({
  type: GET_CONCESSIONARIAS_SUCCESS,
  payload: response,

});

const setConcessionariasPage = (page) => ({
  type: SET_CONCESSIONARIAS_PAGE,
  payload: { page },
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

const resetStore = () => ({
  type: RESET_STORE,
});

const exportRelatorioStart = () => ({
  type: EXPORT_RELATORIO_START,
});

const exportRelatorioSuccess = () => ({
  type: EXPORT_RELATORIO_SUCCESS,
});

const exportRelatorioError = () => ({
  type: EXPORT_RELATORIO_ERROR,
});

export default {
  types: {
    PREFIX_GET_CONCESSIONARIAS,
    GET_CONCESSIONARIAS_START,
    GET_CONCESSIONARIAS_SUCCESS,
    GET_CONCESSIONARIAS_ERROR,

    EXPORT_RELATORIO_START,
    EXPORT_RELATORIO_SUCCESS,
    EXPORT_RELATORIO_ERROR,

    SET_CONCESSIONARIAS_PAGE,
    SET_FILTER,
    RESET_STORE,
    SET_PAGE,
    SET_IPP,
  },
  getConcessionariasStart,
  getConcessionariasError,
  getConcessionariasSuccess,

  exportRelatorioStart,
  exportRelatorioSuccess,
  exportRelatorioError,

  setConcessionariasPage,
  setFilter,
  setPage,
  setIpp,
  resetStore,
};
