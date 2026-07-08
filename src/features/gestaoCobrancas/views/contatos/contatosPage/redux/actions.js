const PREFIX_FILTERS = 'contatosPage/FILTERS';
const SET_TEXTO_CONTATO = `${PREFIX_FILTERS}/SET_TEXTO_CONTATO`;

const PREFIX_GET_CONTATOS = 'contatosPage/GET_CONTATOS';
const GET_CONTATOS_START = `${PREFIX_GET_CONTATOS}/START`;
const GET_CONTATOS_SUCCESS = `${PREFIX_GET_CONTATOS}/SUCCESS`;
const GET_CONTATOS_ERROR = `${PREFIX_GET_CONTATOS}/ERROR`;

const PREFIX_DELETE_CONTATO = 'contatosPage/DELETE_CONTATO';
const DELETE_CONTATO_START = `${PREFIX_DELETE_CONTATO}/START`;
const DELETE_CONTATO_SUCCESS = `${PREFIX_DELETE_CONTATO}/SUCCESS`;
const DELETE_CONTATO_ERROR = `${PREFIX_DELETE_CONTATO}/ERROR`;

const PREFIX_EXPORT_RELATORIO = 'contatosPage/EXPORT_RELATORIO';
const EXPORT_RELATORIO_START = `${PREFIX_EXPORT_RELATORIO}/START`;
const EXPORT_RELATORIO_SUCCESS = `${PREFIX_EXPORT_RELATORIO}/SUCCESS`;
const EXPORT_RELATORIO_ERROR = `${PREFIX_EXPORT_RELATORIO}/ERROR`;

const SET_CONTATO_ID = 'contatosPage/SET_CONTATO_ID';
const SET_PAGE = 'contatosPage/SET_PAGE';
const SET_IPP = 'contatosPage/SET_IPP';
const RESET_STORE = 'contatosPage/RESET_STORE';
const DISMISS_SNACKBAR = 'contatosPage/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'contatosPage/ADD_SNACKBAR';

const getContatosStart = () => ({
  type: GET_CONTATOS_START,
});

const getContatosError = () => ({
  type: GET_CONTATOS_ERROR,
});

const getContatosSuccess = (contatos, pageParams) => ({
  type: GET_CONTATOS_SUCCESS,
  payload: { pageParams, contatos },
});

const deleteContatoStart = () => ({
  type: DELETE_CONTATO_START,
});

const deleteContatoError = () => ({
  type: DELETE_CONTATO_ERROR,
});

const deleteContatoSuccess = () => ({
  type: DELETE_CONTATO_SUCCESS,
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

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setTextoContato = (texto) => ({
  type: SET_TEXTO_CONTATO,
  payload: { texto },
});

const setContatoId = (id) => ({
  type: SET_CONTATO_ID,
  payload: { id },
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {

    PREFIX_GET_CONTATOS,
    GET_CONTATOS_START,
    GET_CONTATOS_SUCCESS,
    GET_CONTATOS_ERROR,

    PREFIX_DELETE_CONTATO,
    DELETE_CONTATO_START,
    DELETE_CONTATO_SUCCESS,
    DELETE_CONTATO_ERROR,

    PREFIX_EXPORT_RELATORIO,
    EXPORT_RELATORIO_START,
    EXPORT_RELATORIO_SUCCESS,
    EXPORT_RELATORIO_ERROR,

    SET_PAGE,
    SET_IPP,
    RESET_STORE,
    SET_TEXTO_CONTATO,
    SET_CONTATO_ID,
    DISMISS_SNACKBAR,
    ADD_SNACKBAR,
  },

  getContatosError,
  getContatosStart,
  getContatosSuccess,

  deleteContatoError,
  deleteContatoStart,
  deleteContatoSuccess,

  exportRelatorioError,
  exportRelatorioStart,
  exportRelatorioSuccess,

  setPage,
  setIpp,
  setTextoContato,
  resetStore,
  setContatoId,
  dismissSnackbar,
  addSnackbar,
};
