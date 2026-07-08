const RESET_MODAL_CADASTRO_FORM = 'contasCorrentesPage/RESET_MODAL_CADASTRO_FORM';
const GET_CONTASCORRENTES_START = 'contasCorrentesPage/GET_CONTASCORRENTES/START';
const GET_CONTASCORRENTES_SUCCESS = 'contasCorrentesPage/GET_CONTASCORRENTES/SUCCESS';
const GET_CONTASCORRENTES_ERROR = 'contasCorrentesPage/GET_CONTASCORRENTES/ERROR';
const GET_CONCESSIONARIA_DADOS_START = 'contasCorrentesPage/GET_CONCESSIONARIA_DADOS/START';
const GET_CONCESSIONARIA_DADOS_SUCCESS = 'contasCorrentesPage/GET_CONCESSIONARIA_DADOS/SUCCESS';
const GET_CONCESSIONARIA_DADOS_ERROR = 'contasCorrentesPage/GET_CONCESSIONARIA_DADOS/ERROR';
const CREATE_CONTACORRENTE_START = 'contasCorrentesPage/CREATE_CONTACORRENTE/START';
const CREATE_CONTACORRENTE_SUCCESS = 'contasCorrentesPage/CREATE_CONTACORRENTE/SUCCESS';
const CREATE_CONTACORRENTE_ERROR = 'contasCorrentesPage/CREATE_CONTACORRENTE/ERROR';
const SET_CNPJ = 'contasCorrentesPage/SET_CNPJ';
const SET_MODAL_CADASTRO_FORM_FIELD = 'contasCorrentesPage/SET_MODAL_CADASTRO_FORM_FIELD';
const RESET_STORE = 'contasCorrentesPage/RESET_STORE';
const SET_PAGE = 'contasCorrentesPage/SET_PAGE';
const SET_IPP = 'contasCorrentesPage/SET_IPP';

const getContasCorrentesStart = () => ({
  type: GET_CONTASCORRENTES_START,
});

const getContasCorrentesError = () => ({
  type: GET_CONTASCORRENTES_ERROR,
});

const getContasCorrentesSuccess = (pageParams, contasCorrentes) => ({
  type: GET_CONTASCORRENTES_SUCCESS,
  payload: { pageParams, contasCorrentes },
});

const getConcessionariaDadosStart = () => ({
  type: GET_CONCESSIONARIA_DADOS_START,
});

const getConcessionariaDadosSuccess = (concessionariaDados) => ({
  type: GET_CONCESSIONARIA_DADOS_SUCCESS,
  payload: { concessionariaDados },
});

const getConcessionariaDadosError = () => ({
  type: GET_CONCESSIONARIA_DADOS_ERROR,
});

const createContaCorrenteStart = () => ({
  type: CREATE_CONTACORRENTE_START,
});

const createContaCorrenteSuccess = () => ({
  type: CREATE_CONTACORRENTE_SUCCESS,
});

const createContaCorrenteError = () => ({
  type: CREATE_CONTACORRENTE_ERROR,
});

const setModalCadastroFormField = (field, value) => ({
  type: SET_MODAL_CADASTRO_FORM_FIELD,
  payload: { field, value },
});

const resetModalCadastroForm = () => ({
  type: RESET_MODAL_CADASTRO_FORM,
});

const setCnpj = (cnpj) => ({
  type: SET_CNPJ,
  payload: { cnpj },
});
const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    RESET_STORE,
    GET_CONTASCORRENTES_ERROR,
    GET_CONTASCORRENTES_START,
    GET_CONTASCORRENTES_SUCCESS,
    GET_CONCESSIONARIA_DADOS_START,
    GET_CONCESSIONARIA_DADOS_SUCCESS,
    GET_CONCESSIONARIA_DADOS_ERROR,
    CREATE_CONTACORRENTE_START,
    CREATE_CONTACORRENTE_SUCCESS,
    CREATE_CONTACORRENTE_ERROR,
    SET_CNPJ,
    SET_PAGE,
    SET_IPP,
    SET_MODAL_CADASTRO_FORM_FIELD,
    RESET_MODAL_CADASTRO_FORM,
  },

  resetStore,
  getContasCorrentesError,
  getContasCorrentesStart,
  getContasCorrentesSuccess,
  getConcessionariaDadosStart,
  getConcessionariaDadosSuccess,
  getConcessionariaDadosError,
  createContaCorrenteStart,
  createContaCorrenteSuccess,
  createContaCorrenteError,
  setCnpj,
  setPage,
  setIpp,
  setModalCadastroFormField,
  resetModalCadastroForm,
};
