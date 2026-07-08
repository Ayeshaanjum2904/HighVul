const PREFIX_GET_FILTERS = 'dashboardPage/GET_FILTERS';
const GET_GRUPOS_START = `${PREFIX_GET_FILTERS}/GET_GRUPOS_START`;
const GET_GRUPOS_FILTER_START = `${PREFIX_GET_FILTERS}/GET_GRUPOS_FILTER_START`;
const GET_MODELOS_START = `${PREFIX_GET_FILTERS}/GET_MODELOS_START`;
const GET_MODELOS_FILTER_START = `${PREFIX_GET_FILTERS}/GET_MODELOS_FILTER_START`;
const GET_BRANDS_START = `${PREFIX_GET_FILTERS}/GET_BRANDS_START`;
const GET_REGIONAIS_START = `${PREFIX_GET_FILTERS}/GET_REGIONAIS_START`;
const SET_REGIONAIS = `${PREFIX_GET_FILTERS}/SET_REGIONAIS`;
const SET_MODELOS = `${PREFIX_GET_FILTERS}/SET_MODELOS`;
const SET_MODELOS_FILTER = `${PREFIX_GET_FILTERS}/SET_MODELOS_FILTER`;
const SET_GRUPOS = `${PREFIX_GET_FILTERS}/SET_GRUPOS`;
const SET_GRUPOS_FILTER = `${PREFIX_GET_FILTERS}/SET_GRUPOS_FILTER`;
const SET_BRANDS = `${PREFIX_GET_FILTERS}/SET_BRANDS`;
const GET_PONTOS_START = `${PREFIX_GET_FILTERS}/GET_PONTOS_START`;
const GET_PONTOS_FILTER_START = `${PREFIX_GET_FILTERS}/GET_PONTOS_FILTER_START`;
const SET_PONTOS = `${PREFIX_GET_FILTERS}/SET_PONTOS`;
const SET_PONTOS_FILTER = `${PREFIX_GET_FILTERS}/SET_PONTOS_FILTER`;

const setGrupos = (grupos, isError) => ({
  type: SET_GRUPOS,
  payload: { grupos, isError },
});

const setFilterGrupos = (grupos) => ({
  type: SET_GRUPOS_FILTER,
  payload: { grupos },
});

const setModelos = (modelos, isError) => ({
  type: SET_MODELOS,
  payload: { modelos, isError },
});

const setFilterModelos = (modelos) => ({
  type: SET_MODELOS_FILTER,
  payload: { modelos },
});

const setRegionais = (regionais, isError) => ({
  type: SET_REGIONAIS,
  payload: { regionais, isError },
});

const setBrands = (brands) => ({
  type: SET_BRANDS,
  payload: { brands },
});

const setPontos = (pontos, isError) => ({
  type: SET_PONTOS,
  payload: { pontos, isError },
});

const setFilterPontos = (pontos) => ({
  type: SET_PONTOS_FILTER,
  payload: { pontos },
});

const getGruposStart = () => ({
  type: GET_GRUPOS_START,
});

const getGruposFilterStart = () => ({
  type: GET_GRUPOS_FILTER_START,
});

const getModelosStart = () => ({
  type: GET_MODELOS_START,
});

const getModelosFilterStart = () => ({
  type: GET_MODELOS_FILTER_START,
});

const getRegionaisStart = () => ({
  type: GET_REGIONAIS_START,
});

const getBrandsStart = () => ({
  type: GET_BRANDS_START,
});

const getPontosStart = () => ({
  type: GET_PONTOS_START,
});

const getPontosFilterStart = () => ({
  type: GET_PONTOS_FILTER_START,
});

export default {
  types: {
    PREFIX_GET_FILTERS,
    GET_GRUPOS_START,
    GET_MODELOS_START,
    GET_BRANDS_START,
    GET_REGIONAIS_START,
    GET_PONTOS_START,

    SET_PONTOS,
    SET_GRUPOS,
    SET_MODELOS,
    SET_REGIONAIS,
    SET_BRANDS,

    GET_GRUPOS_FILTER_START,
    GET_PONTOS_FILTER_START,
    GET_MODELOS_FILTER_START,

    SET_GRUPOS_FILTER,
    SET_PONTOS_FILTER,
    SET_MODELOS_FILTER,
  },
  actions: {
    setGrupos,
    setModelos,
    setRegionais,
    setBrands,
    setPontos,

    setFilterGrupos,
    setFilterPontos,
    setFilterModelos,

    getPontosStart,
    getGruposStart,
    getRegionaisStart,
    getModelosStart,
    getBrandsStart,

    getGruposFilterStart,
    getPontosFilterStart,
    getModelosFilterStart,
  },

};
