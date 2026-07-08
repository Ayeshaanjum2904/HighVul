export const SET_MARCAS = 'ofertas/SET_BRAND';
export const SET_PRODUTO = 'ofertas/SET_PRODUTO';
export const SET_TEXTO = 'ofertas/SET_TEXTO';
export const SET_DATA = 'ofertas/SET_DATA';
export const SET_PAGINA = 'ofertas/SET_PAGINA';
export const SET_STATUS = 'ofertas/SET_STATUS';

export const GET_OFERTAS_START = 'ofertas/GET_OFERTAS_START';
export const GET_OFERTAS_SUCCESS = 'ofertas/GET_OFERTAS_SUCCESS';
export const GET_OFERTAS_ERROR = 'ofertas/GET_OFERTAS_ERROR';

export const RESET_STORE = 'ofertas/RESET_STORE';

const setMarcas = (marcas) => ({
  type: SET_MARCAS,
  payload: { marcas },
});

const setProduto = (produto) => ({
  type: SET_PRODUTO,
  payload: { produto },
});

const setTexto = (texto) => ({
  type: SET_TEXTO,
  payload: { texto },
});

const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});

const setStatus = (status) => ({
  type: SET_STATUS,
  payload: { status },
});

const setPagina = (pagina) => ({
  type: SET_PAGINA,
  payload: { pagina },
});

const getOfertasStart = () => ({
  type: GET_OFERTAS_START,
});

const getOfertasError = () => ({
  type: GET_OFERTAS_ERROR,
});

const getOfertasSuccess = (gruposOfertas, marcasComOfertas, produtos) => ({
  type: GET_OFERTAS_SUCCESS,
  payload: { gruposOfertas, marcasComOfertas, produtos },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    SET_MARCAS,
    SET_PRODUTO,
    SET_TEXTO,
    SET_DATA,
    SET_STATUS,

    GET_OFERTAS_START,
    GET_OFERTAS_SUCCESS,
    GET_OFERTAS_ERROR,
    SET_PAGINA,
    RESET_STORE,
  },

  setTexto,
  setData,
  setMarcas,
  setProduto,
  setPagina,
  setStatus,

  getOfertasError,
  getOfertasStart,
  getOfertasSuccess,
  resetStore,
};
