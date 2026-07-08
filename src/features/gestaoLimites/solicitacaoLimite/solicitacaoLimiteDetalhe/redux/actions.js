const PREFIX_GET_DETALHE_SOLICITACAO = 'solicitacoLimiteDetalhe/GET_DETALHE_SOLICITACAO';
const GET_DETALHE_SOLICITACAO_START = `${PREFIX_GET_DETALHE_SOLICITACAO}/START`;
const GET_DETALHE_SOLICITACAO_SUCCESS = `${PREFIX_GET_DETALHE_SOLICITACAO}/SUCCESS`;
const GET_DETALHE_SOLICITACAO_ERROR = `${PREFIX_GET_DETALHE_SOLICITACAO}/ERROR`;

const PREFIX_UPDATE_STATUS = 'solicitacoLimiteDetalhe/UPDATE_STATUS';
const UPDATE_STATUS_START = `${PREFIX_UPDATE_STATUS}/START`;
const UPDATE_STATUS_SUCCESS = `${PREFIX_UPDATE_STATUS}/SUCCESS`;
const UPDATE_STATUS_ERROR = `${PREFIX_UPDATE_STATUS}/ERROR`;
const CLOSE_STATUS_ERROR_MODAL = `${PREFIX_UPDATE_STATUS}/CLOSE_STATUS_ERROR_MODAL`;

const PREFIX_SEND_COMENTARIO = 'solicitacoLimiteDetalhe/SEND_COMENTARIO';
const SEND_COMENTARIO_START = `${PREFIX_SEND_COMENTARIO}/START`;
const SEND_COMENTARIO_SUCCESS = `${PREFIX_SEND_COMENTARIO}/SUCCESS`;
const SEND_COMENTARIO_ERROR = `${PREFIX_SEND_COMENTARIO}/ERROR`;

const SET_OPEN = 'solicitacaoLimiteDetalhe/SET_OPEN';
const RESET_STORE = 'solicitacaoLimiteDetalhe/RESET_STORE';
const UPDATE_MESSAGE = 'solicitacaoLimiteDetalhe/UPDATE_MESSAGE';
const SET_ALTERACAO_VALOR = 'solicitacaoLimiteDetalhe/SET_ALTERACAO_VALOR';
const UPDATE_NOVO_VALOR = 'solicitacaoLimiteDetalhe/UPDATE_NOVO_VALOR';
const UPDATE_MOTIVO = 'solicitacaoLimiteDetalhe/UPDATE_MOTIVO';

const setOpen = (isOpen) => ({
  type: SET_OPEN,
  payload: { isOpen },
});

const getDetalheSolicitacaoStart = () => ({
  type: GET_DETALHE_SOLICITACAO_START,
});

const getDetalheSolicitacaoError = () => ({
  type: GET_DETALHE_SOLICITACAO_ERROR,
});

const getDetalheSolicitacaoSuccess = (detalheSolicitacao) => ({
  type: GET_DETALHE_SOLICITACAO_SUCCESS,
  payload: { detalheSolicitacao },
});

const updateStatusStart = (action) => ({
  type: UPDATE_STATUS_START,
  payload: { action },
});

const updateStatusError = (errors) => ({
  type: UPDATE_STATUS_ERROR,
  payload: { errors },
});

const updateStatusSuccess = () => ({
  type: UPDATE_STATUS_SUCCESS,
});

const sendComentarioStart = () => ({
  type: SEND_COMENTARIO_START,
});

const sendComentarioSuccess = (mensagem) => ({
  type: SEND_COMENTARIO_SUCCESS,
  payload: { mensagem },
});

const sendComentarioError = () => ({
  type: SEND_COMENTARIO_ERROR,
});

const updateMessage = (value) => ({
  type: UPDATE_MESSAGE,
  payload: { value },
});

const updateMotivo = (value) => ({
  type: UPDATE_MOTIVO,
  payload: { value },
});

const updateNovoValor = (value) => ({
  type: UPDATE_NOVO_VALOR,
  payload: { value },
});

const setAlteracaoValor = (value) => ({
  type: SET_ALTERACAO_VALOR,
  payload: { value },
});

const closeStatusErrorModal = () => ({
  type: CLOSE_STATUS_ERROR_MODAL,
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    PREFIX_GET_DETALHE_SOLICITACAO,
    GET_DETALHE_SOLICITACAO_START,
    GET_DETALHE_SOLICITACAO_SUCCESS,
    GET_DETALHE_SOLICITACAO_ERROR,

    PREFIX_UPDATE_STATUS,
    UPDATE_STATUS_START,
    UPDATE_STATUS_SUCCESS,
    UPDATE_STATUS_ERROR,
    CLOSE_STATUS_ERROR_MODAL,

    PREFIX_SEND_COMENTARIO,
    SEND_COMENTARIO_START,
    SEND_COMENTARIO_SUCCESS,
    SEND_COMENTARIO_ERROR,

    SET_OPEN,
    RESET_STORE,
    UPDATE_MESSAGE,
    UPDATE_MOTIVO,
    SET_ALTERACAO_VALOR,
    UPDATE_NOVO_VALOR,
  },

  getDetalheSolicitacaoStart,
  getDetalheSolicitacaoError,
  getDetalheSolicitacaoSuccess,

  updateStatusStart,
  updateStatusError,
  updateStatusSuccess,

  sendComentarioStart,
  sendComentarioSuccess,
  sendComentarioError,
  closeStatusErrorModal,

  setOpen,
  resetStore,
  updateMessage,
  updateMotivo,
  setAlteracaoValor,
  updateNovoValor,

};
