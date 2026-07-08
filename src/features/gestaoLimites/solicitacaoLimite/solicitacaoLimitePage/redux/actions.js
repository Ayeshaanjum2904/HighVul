const PREFIX_GET_SOLICITACOES = 'solicitacoLimitePage/GET_SOLICITACOES';
const GET_SOLICITACOES_START = `${PREFIX_GET_SOLICITACOES}/START`;
const GET_SOLICITACOES_SUCCESS = `${PREFIX_GET_SOLICITACOES}/SUCCESS`;
const GET_SOLICITACOES_ERROR = `${PREFIX_GET_SOLICITACOES}/ERROR`;
const SET_REGIAO_FILTER = `${PREFIX_GET_SOLICITACOES}/SET_REGIAO_FILTER`;
const SET_STATUS_FILTER = `${PREFIX_GET_SOLICITACOES}/SET_STATUS_FILTER`;

const RESET_STORE = 'solicitacoLimitePage/RESET_STORE';
const SET_PAGE = 'solicitacoLimitePage/SET_PAGE';
const SET_TEXTO = 'solicitacoLimitePage/SET_TEXTO';
const SET_IPP = 'solicitacoLimitePage/SET_IPP';
const SET_REGIAO = 'solicitacoLimitePage/SET_REGIAO';
const SET_SOLICITACAO_VISUALIZADA = 'solicitacoLimitePage/SET_SOLICITACAO_VISUALIZADA';
const SET_STATUS = 'solicitacaoLimitePage/SET_STATUS';

const setTexto = (texto) => ({
  type: SET_TEXTO,
  payload: { texto },
});

const getSolicitacoesStart = () => ({
  type: GET_SOLICITACOES_START,
});

const getSolicitacoesError = () => ({
  type: GET_SOLICITACOES_ERROR,
});

const getSolicitacoesSuccess = (solicitacoes) => ({
  type: GET_SOLICITACOES_SUCCESS,
  payload: solicitacoes,
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setRegiao = (regiao) => ({
  type: SET_REGIAO,
  payload: { regiao },
});

const setRegiaoFilter = (regiao) => ({
  type: SET_REGIAO_FILTER,
  payload: { regiao },
});

const setStatus = (status) => ({
  type: SET_STATUS,
  payload: { status },
});
const setStatusFilter = (status) => ({
  type: SET_STATUS_FILTER,
  payload: { status },
});

const setSolicitacaoVisualizada = (solicitacaoId) => ({
  type: SET_SOLICITACAO_VISUALIZADA,
  payload: { solicitacaoId },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    SET_TEXTO,
    SET_IPP,
    SET_PAGE,
    RESET_STORE,
    SET_SOLICITACAO_VISUALIZADA,

    SET_REGIAO,
    SET_REGIAO_FILTER,
    SET_STATUS,
    SET_STATUS_FILTER,

    PREFIX_GET_SOLICITACOES,
    GET_SOLICITACOES_START,
    GET_SOLICITACOES_SUCCESS,
    GET_SOLICITACOES_ERROR,
  },

  setTexto,
  setIpp,
  setPage,
  resetStore,
  setSolicitacaoVisualizada,

  setRegiao,
  setRegiaoFilter,
  setStatus,
  setStatusFilter,

  getSolicitacoesError,
  getSolicitacoesStart,
  getSolicitacoesSuccess,
};
