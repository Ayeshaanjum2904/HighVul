const SET_SELECTED_ITEMS = 'limitesAprovadosCadastro/SET_SELECTED_ITEMS';
const INSERT_TIPO_RELACIONAMENTO_START = 'limitesAprovadosCadastro/INSERT_TIPO_RELACIONAMENTO_START';
const INSERT_TIPO_RELACIONAMENTO_SUCCESS = 'limitesAprovadosCadastro/INSERT_TIPO_RELACIONAMENTO_SUCCESS';
const INSERT_TIPO_RELACIONAMENTO_ERROR = 'limitesAprovadosCadastro/INSERT_TIPO_RELACIONAMENTO_ERROR';

const INSERT_TIPO_DOCUMENTO_START = 'limitesAprovadosCadastro/INSERT_TIPO_DOCUMENTO_START';
const INSERT_TIPO_DOCUMENTO_SUCCESS = 'limitesAprovadosCadastro/INSERT_TIPO_DOCUMENTO_SUCCESS';
const INSERT_TIPO_DOCUMENTO_ERROR = 'limitesAprovadosCadastro/INSERT_TIPO_DOCUMENTO_ERROR';

const INSERT_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosCadastro/INSERT_PESSOA_DOCUMENTACAO_START';
const INSERT_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosCadastro/INSERT_PESSOA_DOCUMENTACAO_SUCCESS';
const INSERT_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosCadastro/INSERT_PESSOA_DOCUMENTACAO_ERROR';

const GET_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosCadastro/GET_PESSOA_DOCUMENTACAO_START';
const GET_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosCadastro/GET_PESSOA_DOCUMENTACAO_SUCCESS';
const GET_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosCadastro/GET_PESSOA_DOCUMENTACAO_ERROR';

const DELETE_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosCadastro/DELETE_PESSOA_DOCUMENTACAO_START';
const DELETE_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosCadastro/DELETE_PESSOA_DOCUMENTACAO_SUCCESS';
const DELETE_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosCadastro/DELETE_PESSOA_DOCUMENTACAO_ERROR';

const UPDATE_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosCadastro/UPDATE_PESSOA_DOCUMENTACAO_START';
const UPDATE_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosCadastro/UPDATE_PESSOA_DOCUMENTACAO_SUCCESS';
const UPDATE_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosCadastro/UPDATE_PESSOA_DOCUMENTACAO_ERROR';

const GET_TIPO_DOCUMENTO_LIST_START = 'limitesAprovadosCadastro/GET_TIPO_DOCUMENTO_LIST_START';
const GET_TIPO_DOCUMENTO_LIST_SUCCESS = 'limitesAprovadosCadastro/GET_TIPO_DOCUMENTO_LIST_SUCCESS';
const GET_TIPO_DOCUMENTO_LIST_ERROR = 'limitesAprovadosCadastro/GET_TIPO_DOCUMENTO_LIST_ERROR';

const GET_TIPO_RELACIONAMENTO_LIST_START = 'limitesAprovadosCadastro/GET_TIPO_RELACIONAMENTO_LIST_START';
const GET_TIPO_RELACIONAMENTO_LIST_SUCCESS = 'limitesAprovadosCadastro/GET_TIPO_RELACIONAMENTO_LIST_SUCCESS';
const GET_TIPO_RELACIONAMENTO_LIST_ERROR = 'limitesAprovadosCadastro/GET_TIPO_RELACIONAMENTO_LIST_ERROR';

const DELETE_DOCUMENTO = 'limitesAprovadosCadastro/DELETE_DOCUMENTO';
const UPDATE_DOCUMENTO_VALIDAR = 'limitesAprovadosCadastro/UPDATE_DOCUMENTO_VALIDAR';
const UPDATE_DOCUMENTO_DESFAZER_VALIDACAO = 'limitesAprovadosCadastro/UPDATE_DOCUMENTO_DESFAZER_VALIDACAO';
const DELETE_TIPO_DOCUMENTO = 'limitesAprovadosCadastro/DELETE_TIPO_DOCUMENTO';
const DELETE_TIPO_RELACIONAMENTO = 'limitesAprovadosCadastro/DELETE_TIPO_RELACIONAMENTO';

const setSelectedItems = (idTipo) => ({
  type: SET_SELECTED_ITEMS,
  payload: { idTipo },
});

const insertTipoRelacionamentoStart = () => ({
  type: INSERT_TIPO_RELACIONAMENTO_START,
});

const insertTipoRelacionamentoSuccess = (relacionamentoList) => ({
  type: INSERT_TIPO_RELACIONAMENTO_SUCCESS,
  payload: { relacionamentoList },
});

const insertTipoRelacionamentoError = () => ({
  type: INSERT_TIPO_RELACIONAMENTO_ERROR,
});

const insertTipoDocumentoStart = () => ({
  type: INSERT_TIPO_DOCUMENTO_START,
});

const insertTipoDocumentoSuccess = (documentoList) => ({
  type: INSERT_TIPO_DOCUMENTO_SUCCESS,
  payload: { documentoList },
});

const insertTipoDocumentoError = () => ({
  type: INSERT_TIPO_DOCUMENTO_ERROR,
});

const insertPessoaDocumentacaoStart = () => ({
  type: INSERT_PESSOA_DOCUMENTACAO_START,
});

const insertPessoaDocumentacaoSuccess = () => ({
  type: INSERT_PESSOA_DOCUMENTACAO_SUCCESS,
});

const insertPessoaDocumentacaoError = () => ({
  type: INSERT_PESSOA_DOCUMENTACAO_ERROR,
});

const getPessoaDocumentacaoStart = () => ({
  type: GET_PESSOA_DOCUMENTACAO_START,
});

const getPessoaDocumentacaoSuccess = (listaPessoaDocumentacao) => ({
  type: GET_PESSOA_DOCUMENTACAO_SUCCESS,
  payload: { listaPessoaDocumentacao },
});

const getPessoaDocumentacaoError = () => ({
  type: GET_PESSOA_DOCUMENTACAO_ERROR,
});

const deletePessoaDocumentacaoStart = () => ({
  type: DELETE_PESSOA_DOCUMENTACAO_START,
});

const deletePessoaDocumentacaoSuccess = () => ({
  type: DELETE_PESSOA_DOCUMENTACAO_SUCCESS,
});

const deletePessoaDocumentacaoError = () => ({
  type: DELETE_PESSOA_DOCUMENTACAO_ERROR,
});

const updatePessoaDocumentacaoStart = () => ({
  type: UPDATE_PESSOA_DOCUMENTACAO_START,
});

const updatePessoaDocumentacaoSuccess = () => ({
  type: UPDATE_PESSOA_DOCUMENTACAO_SUCCESS,
});

const updatePessoaDocumentacaoError = () => ({
  type: UPDATE_PESSOA_DOCUMENTACAO_ERROR,
});

const deleteDocumento = (documento) => ({
  type: DELETE_DOCUMENTO,
  payload: { documento },
});

const deleteTipoDocumento = (documentoList) => ({
  type: DELETE_TIPO_DOCUMENTO,
  payload: { documentoList },
});

const deleteTipoRelacionamento = (relacionamentoList) => ({
  type: DELETE_TIPO_RELACIONAMENTO,
  payload: { relacionamentoList },
});

const updateDocumentoValidar = (documento) => ({
  type: UPDATE_DOCUMENTO_VALIDAR,
  payload: { documento },
});

const updateDocumentoDesfazerValidacao = (documento) => ({
  type: UPDATE_DOCUMENTO_DESFAZER_VALIDACAO,
  payload: { documento },
});

const getTipoDocumentoListStart = () => ({
  type: GET_TIPO_DOCUMENTO_LIST_START,
});

const getTipoDocumentoListSuccess = (documentoList) => ({
  type: GET_TIPO_DOCUMENTO_LIST_SUCCESS,
  payload: { documentoList },
});

const getTipoDocumentoListError = () => ({
  type: GET_TIPO_DOCUMENTO_LIST_ERROR,
});

const getTipoRelacionamentoListStart = () => ({
  type: GET_TIPO_RELACIONAMENTO_LIST_START,
});

const getTipoRelacionamentoListSuccess = (relacionamentoList) => ({
  type: GET_TIPO_RELACIONAMENTO_LIST_SUCCESS,
  payload: { relacionamentoList },
});

const getTipoRelacionamentoListError = () => ({
  type: GET_TIPO_RELACIONAMENTO_LIST_ERROR,
});

export default {
  types: {
    SET_SELECTED_ITEMS,
    INSERT_TIPO_RELACIONAMENTO_START,
    INSERT_TIPO_RELACIONAMENTO_SUCCESS,
    INSERT_TIPO_RELACIONAMENTO_ERROR,
    INSERT_TIPO_DOCUMENTO_START,
    INSERT_TIPO_DOCUMENTO_SUCCESS,
    INSERT_TIPO_DOCUMENTO_ERROR,
    INSERT_PESSOA_DOCUMENTACAO_START,
    INSERT_PESSOA_DOCUMENTACAO_SUCCESS,
    INSERT_PESSOA_DOCUMENTACAO_ERROR,
    GET_PESSOA_DOCUMENTACAO_START,
    GET_PESSOA_DOCUMENTACAO_SUCCESS,
    GET_PESSOA_DOCUMENTACAO_ERROR,
    DELETE_PESSOA_DOCUMENTACAO_START,
    DELETE_PESSOA_DOCUMENTACAO_SUCCESS,
    DELETE_PESSOA_DOCUMENTACAO_ERROR,
    UPDATE_PESSOA_DOCUMENTACAO_START,
    UPDATE_PESSOA_DOCUMENTACAO_SUCCESS,
    UPDATE_PESSOA_DOCUMENTACAO_ERROR,
    DELETE_DOCUMENTO,
    UPDATE_DOCUMENTO_VALIDAR,
    UPDATE_DOCUMENTO_DESFAZER_VALIDACAO,
    DELETE_TIPO_DOCUMENTO,
    DELETE_TIPO_RELACIONAMENTO,
    GET_TIPO_DOCUMENTO_LIST_START,
    GET_TIPO_DOCUMENTO_LIST_SUCCESS,
    GET_TIPO_DOCUMENTO_LIST_ERROR,
    GET_TIPO_RELACIONAMENTO_LIST_START,
    GET_TIPO_RELACIONAMENTO_LIST_SUCCESS,
    GET_TIPO_RELACIONAMENTO_LIST_ERROR,
  },
  insertTipoRelacionamentoStart,
  insertTipoRelacionamentoSuccess,
  insertTipoRelacionamentoError,
  insertTipoDocumentoStart,
  insertTipoDocumentoSuccess,
  insertTipoDocumentoError,
  insertPessoaDocumentacaoStart,
  insertPessoaDocumentacaoSuccess,
  insertPessoaDocumentacaoError,
  setSelectedItems,
  getPessoaDocumentacaoStart,
  getPessoaDocumentacaoSuccess,
  getPessoaDocumentacaoError,
  deletePessoaDocumentacaoStart,
  deletePessoaDocumentacaoSuccess,
  deletePessoaDocumentacaoError,
  updatePessoaDocumentacaoStart,
  updatePessoaDocumentacaoSuccess,
  updatePessoaDocumentacaoError,
  deleteDocumento,
  updateDocumentoValidar,
  updateDocumentoDesfazerValidacao,
  deleteTipoDocumento,
  deleteTipoRelacionamento,
  getTipoDocumentoListStart,
  getTipoDocumentoListSuccess,
  getTipoDocumentoListError,
  getTipoRelacionamentoListStart,
  getTipoRelacionamentoListSuccess,
  getTipoRelacionamentoListError,
};
