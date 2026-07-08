const GET_OBSERVACOES_START = 'limitesAprovadosObservacao/GET_OBSERVACOES_START';
const GET_OBSERVACOES_SUCCESS = 'limitesAprovadosObservacao/GET_OBSERVACOES_SUCCESS';
const GET_OBSERVACOES_ERROR = 'limitesAprovadosObservacao/GET_OBSERVACOES_ERROR';

const INSERT_OBSERVACAO_START = 'limitesAprovadosObservacao/INSERT_OBSERVACOES_START';
const INSERT_OBSERVACAO_SUCCESS = 'limitesAprovadosObservacao/INSERT_OBSERVACOES_SUCCESS';
const INSERT_OBSERVACAO_ERROR = 'limitesAprovadosObservacao/INSERT_OBSERVACOES_ERROR';
const INSERT_CONTROLE_OBSERVACAO = 'limitesAprovadosObservacao/INSERT_CONTROLE_OBSERVACAO';
const RESET_STORE = 'limitesAprovadosObservacao/RESET_STORE';

const getObservacoesStart = () => ({
  type: GET_OBSERVACOES_START,
});

const getObservacoesSuccess = (
  observacoes,
) => ({
  type: GET_OBSERVACOES_SUCCESS,
  payload: {
    observacoes,
  },
});

const getObservacoesError = () => ({
  type: GET_OBSERVACOES_ERROR,
});

const insertObservacaoStart = () => ({
  type: INSERT_OBSERVACAO_START,
});

const insertObservacaoSuccess = () => ({
  type: INSERT_OBSERVACAO_SUCCESS,
});

const insertObservacaoError = () => ({
  type: INSERT_OBSERVACAO_ERROR,
});

const insertControleObservacao = () => ({
  type: INSERT_CONTROLE_OBSERVACAO,
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    GET_OBSERVACOES_START,
    GET_OBSERVACOES_SUCCESS,
    GET_OBSERVACOES_ERROR,
    INSERT_OBSERVACAO_START,
    INSERT_OBSERVACAO_SUCCESS,
    INSERT_OBSERVACAO_ERROR,
    INSERT_CONTROLE_OBSERVACAO,
    RESET_STORE,
  },
  getObservacoesStart,
  getObservacoesSuccess,
  getObservacoesError,
  insertObservacaoStart,
  insertObservacaoSuccess,
  insertObservacaoError,
  insertControleObservacao,
  resetStore,
};
