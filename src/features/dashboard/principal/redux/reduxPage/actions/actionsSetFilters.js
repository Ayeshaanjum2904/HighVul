const PREFIX_SET_FILTERS = 'dashboardPage/SET_FILTERS';
const SET_DATA_INICIO = `${PREFIX_SET_FILTERS}/SET_DATA_INICIO`;
const SET_DATA_FIM = `${PREFIX_SET_FILTERS}/SET_DATA_FIM`;
const SET_FILTER_TYPE = `${PREFIX_SET_FILTERS}/SET_FILTER_TYPE`;
const SET_SELECTED_BRANDS = `${PREFIX_SET_FILTERS}/SET_SELECTED_BRANDS`;
const SET_CODIGO_BUC = `${PREFIX_SET_FILTERS}/SET_CODIGO_BUC`;
const SET_SELECTED_GRUPO = `${PREFIX_SET_FILTERS}/SET_SELECTED_GRUPO`;
const SET_SELECTED_REGIONAL = `${PREFIX_SET_FILTERS}/SET_SELECTED_REGIONAL`;
const SET_SELECTED_MODELOS = `${PREFIX_SET_FILTERS}/SET_SELECTED_MODELOS`;
const GET_CONCESSIONARIA = `${PREFIX_SET_FILTERS}/GET_CONCESSIONARIA`;
const SET_CONCESSIONARIA = `${PREFIX_SET_FILTERS}/SET_CONCESSIONARIA`;
const SET_DISABLED_BUTTON = `${PREFIX_SET_FILTERS}/SET_DISABLED_BUTTON`;
const SET_SELECTED_PONTOS = `${PREFIX_SET_FILTERS}/SET_SELECTED_PONTOS`;

const setSelectedBrands = (brands) => ({
  type: SET_SELECTED_BRANDS,
  payload: { brands },
});

const setCodigoBuc = (codigoBuc) => ({
  type: SET_CODIGO_BUC,
  payload: { codigoBuc },
});

const setSelectedGrupo = (grupo) => ({
  type: SET_SELECTED_GRUPO,
  payload: { grupo },
});

const setSelectedModelos = (modelos) => ({
  type: SET_SELECTED_MODELOS,
  payload: { modelos },
});

const setSelectedRegional = (regional) => ({
  type: SET_SELECTED_REGIONAL,
  payload: { regional },
});

const setFilterType = (type) => ({
  type: SET_FILTER_TYPE,
  payload: { type },
});

const setStartDate = (data) => ({
  type: SET_DATA_INICIO,
  payload: { data },
});

const setEndDate = (data) => ({
  type: SET_DATA_FIM,
  payload: { data },
});

const getConcessionaria = () => ({
  type: GET_CONCESSIONARIA,
});

const setConcessionaria = (concessionaria) => ({
  type: SET_CONCESSIONARIA,
  payload: { concessionaria },
});

const setDisabledButton = () => ({
  type: SET_DISABLED_BUTTON,
});

const setSelectedPontos = (pontos) => ({
  type: SET_SELECTED_PONTOS,
  payload: { pontos },
});

export default {
  types: {
    PREFIX_SET_FILTERS,
    SET_DATA_INICIO,
    SET_DATA_FIM,
    SET_FILTER_TYPE,
    SET_SELECTED_BRANDS,
    SET_CODIGO_BUC,
    SET_SELECTED_GRUPO,
    SET_SELECTED_REGIONAL,
    SET_SELECTED_MODELOS,
    GET_CONCESSIONARIA,
    SET_CONCESSIONARIA,
    SET_DISABLED_BUTTON,
    SET_SELECTED_PONTOS,
  },
  actions: {
    setStartDate,
    setEndDate,
    setFilterType,
    setSelectedBrands,
    setCodigoBuc,
    setSelectedGrupo,
    setSelectedModelos,
    setSelectedRegional,
    setSelectedPontos,

    setConcessionaria,
    getConcessionaria,

    setDisabledButton,

  },

};
