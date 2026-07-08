const GET_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosJuridico/GET_PESSOA_DOCUMENTACAO_START';
const GET_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosJuridico/GET_PESSOA_DOCUMENTACAO_SUCCESS';
const GET_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosJuridico/GET_PESSOA_DOCUMENTACAO_ERROR';
const DELETE_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosJuridico/DELETE_PESSOA_DOCUMENTACAO_START';
const DELETE_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosJuridico/DELETE_PESSOA_DOCUMENTACAO_SUCCESS';
const DELETE_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosJuridico/DELETE_PESSOA_DOCUMENTACAO_ERROR';

const INSERT_TIPO_DOCUMENTO_START = 'limitesAprovadosJuridico/INSERT_TIPO_DOCUMENTO_START';
const INSERT_TIPO_DOCUMENTO_SUCCESS = 'limitesAprovadosJuridico/INSERT_TIPO_DOCUMENTO_SUCCESS';
const INSERT_TIPO_DOCUMENTO_ERROR = 'limitesAprovadosJuridico/INSERT_TIPO_DOCUMENTO_ERROR';

const GET_TIPO_DOCUMENTO_START = 'limitesAprovadosJuridico/GET_TIPO_DOCUMENTO_START';
const GET_TIPO_DOCUMENTO_SUCCESS = 'limitesAprovadosJuridico/GET_TIPO_DOCUMENTO_SUCCESS';
const GET_TIPO_DOCUMENTO_ERROR = 'limitesAprovadosJuridico/GET_TIPO_DOCUMENTO_ERROR';

const INSERT_PESSOA_DOCUMENTACAO_START = 'limitesAprovadosJuridico/INSERT_PESSOA_DOCUMENTACAO_START';
const INSERT_PESSOA_DOCUMENTACAO_SUCCESS = 'limitesAprovadosJuridico/INSERT_PESSOA_DOCUMENTACAO_SUCCESS';
const INSERT_PESSOA_DOCUMENTACAO_ERROR = 'limitesAprovadosJuridico/INSERT_PESSOA_DOCUMENTACAO_ERROR';

const INSERT_TIPO_DOCUMENTO_FORMALIZAR_START = 'limitesAprovadosJuridico/INSERT_TIPO_DOCUMENTO_FORMALIZAR_START';
const INSERT_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS = 'limitesAprovadosJuridico/INSERT_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS';
const INSERT_TIPO_DOCUMENTO_FORMALIZAR_ERROR = 'limitesAprovadosJuridico/INSERT_TIPO_DOCUMENTO_FORMALIZAR_ERROR';

const DELETE_TIPO_DOCUMENTO_FORMALIZAR_START = 'limitesAprovadosJuridico/DELETE_TIPO_DOCUMENTO_FORMALIZAR_START';
const DELETE_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS = 'limitesAprovadosJuridico/DELETE_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS';
const DELETE_TIPO_DOCUMENTO_FORMALIZAR_ERROR = 'limitesAprovadosJuridico/DELETE_TIPO_DOCUMENTO_FORMALIZAR_ERROR';

const GET_TIPO_DOCUMENTO_FORMALIZAR_START = 'limitesAprovadosJuridico/GET_TIPO_DOCUMENTO_FORMALIZAR_START';
const GET_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS = 'limitesAprovadosJuridico/GET_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS';
const GET_TIPO_DOCUMENTO_FORMALIZAR_ERROR = 'limitesAprovadosJuridico/GET_TIPO_DOCUMENTO_FORMALIZAR_ERROR';

const INSERT_DOCUMENTO_FORMALIZAR_START = 'limitesAprovadosJuridico/INSERT_DOCUMENTO_FORMALIZAR_START';
const INSERT_DOCUMENTO_FORMALIZAR_SUCCESS = 'limitesAprovadosJuridico/INSERT_DOCUMENTO_FORMALIZAR_SUCCESS';
const INSERT_DOCUMENTO_FORMALIZAR_ERROR = 'limitesAprovadosJuridico/INSERT_DOCUMENTO_FORMALIZAR_ERROR';

const DELETE_DOCUMENTO_FORMALIZAR_START = 'limitesAprovadosJuridico/DELETE_DOCUMENTO_FORMALIZAR_START';
const DELETE_DOCUMENTO_FORMALIZAR_SUCCESS = 'limitesAprovadosJuridico/DELETE_DOCUMENTO_FORMALIZAR_SUCCESS';
const DELETE_DOCUMENTO_FORMALIZAR_ERROR = 'limitesAprovadosJuridico/DELETE_DOCUMENTO_FORMALIZAR_ERROR';

const GET_DOCUMENTO_FORMALIZAR_START = 'limitesAprovadosJuridico/GET_DOCUMENTO_FORMALIZAR_START';
const GET_DOCUMENTO_FORMALIZAR_SUCCESS = 'limitesAprovadosJuridico/GET_DOCUMENTO_FORMALIZAR_SUCCESS';
const GET_DOCUMENTO_FORMALIZAR_ERROR = 'limitesAprovadosJuridico/GET_DOCUMENTO_FORMALIZAR_ERROR';

const UPDATE_DOCUMENTO_VALIDADO = 'limitesAprovadosJuridico/UPDATE_DOCUMENTO_VALIDADO';
const UPDATE_DOCUMENTO_DESVALIDADO = 'limitesAprovadosJuridico/UPDATE_DOCUMENTO_DESVALIDADO';
const UPDATE_DOCUMENTO_INVALIDADO = 'limitesAprovadosJuridico/UPDATE_DOCUMENTO_INVALIDADO';

const UPDATE_STATUS_PENDENTE_ANEXO = 'limitesAprovadosJuridico/UPDATE_STATUS_PENDENTE_ANEXO';
const UPDATE_STATUS_VALIDADO = 'limitesAprovadosJuridico/UPDATE_STATUS_VALIDADO';

const GET_DADOS_ENVELOPE_DOCUSIGN_START = 'dadosModalDocusign/GET_DADOS_ENVELOPE_DOCUSIGN_START';
const GET_DADOS_ENVELOPE_DOCUSIGN_SUCCESS = 'dadosModalDocusign/GET_DADOS_ENVELOPE_DOCUSIGN_SUCCESS';
const GET_DADOS_ENVELOPE_DOCUSIGN_ERROR = 'dadosModalDocusign/GET_DADOS_ENVELOPE_DOCUSIGN_ERROR';

const RESET_STORE = 'limitesAprovadosJuridico/RESET_STORE';

const getPessoaDocumentacaoStart = () => ({
  type: GET_PESSOA_DOCUMENTACAO_START,
});

const getPessoaDocumentacaoSuccess = (
  listaPessoaDocumentacao,
) => ({
  type: GET_PESSOA_DOCUMENTACAO_SUCCESS,
  payload: {
    listaPessoaDocumentacao,
  },
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

const getTipoDocumentoListStart = () => ({
  type: GET_TIPO_DOCUMENTO_START,
});

const getTipoDocumentoListSuccess = (documentoList) => ({
  type: GET_TIPO_DOCUMENTO_SUCCESS,
  payload: { documentoList },
});

const getTipoDocumentoListError = () => ({
  type: GET_TIPO_DOCUMENTO_ERROR,
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

const insertTipoDocumentoFormalizarStart = () => ({
  type: INSERT_TIPO_DOCUMENTO_FORMALIZAR_START,
});

const insertTipoDocumentoFormalizarSuccess = (tipoDocumentoList) => ({
  type: INSERT_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS,
  payload: { tipoDocumentoList },
});

const insertTipoDocumentoFormalizarError = () => ({
  type: INSERT_TIPO_DOCUMENTO_FORMALIZAR_ERROR,
});

const deleteTipoDocumentoFormalizarStart = () => ({
  type: DELETE_TIPO_DOCUMENTO_FORMALIZAR_START,
});

const deleteTipoDocumentoFormalizarSuccess = () => ({
  type: DELETE_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS,
});

const deleteTipoDocumentoFormalizarError = () => ({
  type: DELETE_TIPO_DOCUMENTO_FORMALIZAR_ERROR,
});

const getTipoDocumentoFormalizarListStart = () => ({
  type: GET_TIPO_DOCUMENTO_FORMALIZAR_START,
});

const getTipoDocumentoFormalizarListSuccess = (tipoDocumentoList) => ({
  type: GET_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS,
  payload: { tipoDocumentoList },
});

const getTipoDocumentoFormalizarListError = () => ({
  type: GET_TIPO_DOCUMENTO_FORMALIZAR_ERROR,
});

const insertDocumentoFormalizarStart = () => ({
  type: INSERT_DOCUMENTO_FORMALIZAR_START,
});

const insertDocumentoFormalizarSuccess = (documentosFormalizarList) => ({
  type: INSERT_DOCUMENTO_FORMALIZAR_SUCCESS,
  payload: { documentosFormalizarList },
});

const insertDocumentoFormalizarError = () => ({
  type: INSERT_DOCUMENTO_FORMALIZAR_ERROR,
});

const deleteDocumentoFormalizarStart = () => ({
  type: DELETE_DOCUMENTO_FORMALIZAR_START,
});

const deleteDocumentoFormalizarSuccess = (documentosFormalizarList) => ({
  type: DELETE_DOCUMENTO_FORMALIZAR_SUCCESS,
  payload: { documentosFormalizarList },
});

const deleteDocumentoFormalizarError = () => ({
  type: DELETE_DOCUMENTO_FORMALIZAR_ERROR,
});

const getDocumentoFormalizarListStart = () => ({
  type: GET_DOCUMENTO_FORMALIZAR_START,
});

const getDocumentoFormalizarListSuccess = (documentosFormalizarList) => ({
  type: GET_DOCUMENTO_FORMALIZAR_SUCCESS,
  payload: { documentosFormalizarList },
});

const getDocumentoFormalizarListError = () => ({
  type: GET_DOCUMENTO_FORMALIZAR_ERROR,
});

const updateDocumentoValidado = (documento) => ({
  type: UPDATE_DOCUMENTO_VALIDADO,
  payload: { documento },
});

const updateDocumentoDesValidado = (documento) => ({
  type: UPDATE_DOCUMENTO_DESVALIDADO,
  payload: { documento },
});

const updateDocumentoInvalidado = (documento) => ({
  type: UPDATE_DOCUMENTO_INVALIDADO,
  payload: { documento },
});

const updateStatusPendenteAnexo = (status, indexPessoa) => ({
  type: UPDATE_STATUS_PENDENTE_ANEXO,
  payload: { status, indexPessoa },
});

const updateStatusValidado = (status, indexPessoa) => ({
  type: UPDATE_STATUS_VALIDADO,
  payload: { status, indexPessoa },
});

const getDadosEnvelopeDocusignStart = () => ({
  type: GET_DADOS_ENVELOPE_DOCUSIGN_START,
});

const getDadosEnvelopeDocusignSuccess = (dadosEnvelopeDocusign) => ({
  type: GET_DADOS_ENVELOPE_DOCUSIGN_SUCCESS,
  payload: { dadosEnvelopeDocusign },
});

const getDadosEnvelopeDocusignError = () => ({
  type: GET_DADOS_ENVELOPE_DOCUSIGN_ERROR,
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    GET_PESSOA_DOCUMENTACAO_START,
    GET_PESSOA_DOCUMENTACAO_SUCCESS,
    GET_PESSOA_DOCUMENTACAO_ERROR,
    DELETE_PESSOA_DOCUMENTACAO_START,
    DELETE_PESSOA_DOCUMENTACAO_SUCCESS,
    DELETE_PESSOA_DOCUMENTACAO_ERROR,
    INSERT_TIPO_DOCUMENTO_START,
    INSERT_TIPO_DOCUMENTO_SUCCESS,
    INSERT_TIPO_DOCUMENTO_ERROR,
    GET_TIPO_DOCUMENTO_START,
    GET_TIPO_DOCUMENTO_SUCCESS,
    GET_TIPO_DOCUMENTO_ERROR,
    INSERT_PESSOA_DOCUMENTACAO_START,
    INSERT_PESSOA_DOCUMENTACAO_SUCCESS,
    INSERT_PESSOA_DOCUMENTACAO_ERROR,
    INSERT_TIPO_DOCUMENTO_FORMALIZAR_START,
    INSERT_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS,
    INSERT_TIPO_DOCUMENTO_FORMALIZAR_ERROR,
    GET_TIPO_DOCUMENTO_FORMALIZAR_START,
    GET_TIPO_DOCUMENTO_FORMALIZAR_SUCCESS,
    GET_TIPO_DOCUMENTO_FORMALIZAR_ERROR,
    INSERT_DOCUMENTO_FORMALIZAR_START,
    INSERT_DOCUMENTO_FORMALIZAR_SUCCESS,
    INSERT_DOCUMENTO_FORMALIZAR_ERROR,
    DELETE_DOCUMENTO_FORMALIZAR_START,
    DELETE_DOCUMENTO_FORMALIZAR_SUCCESS,
    DELETE_DOCUMENTO_FORMALIZAR_ERROR,
    GET_DOCUMENTO_FORMALIZAR_START,
    GET_DOCUMENTO_FORMALIZAR_SUCCESS,
    GET_DOCUMENTO_FORMALIZAR_ERROR,
    UPDATE_DOCUMENTO_VALIDADO,
    UPDATE_DOCUMENTO_DESVALIDADO,
    UPDATE_DOCUMENTO_INVALIDADO,
    RESET_STORE,
    UPDATE_STATUS_PENDENTE_ANEXO,
    UPDATE_STATUS_VALIDADO,
    GET_DADOS_ENVELOPE_DOCUSIGN_START,
    GET_DADOS_ENVELOPE_DOCUSIGN_SUCCESS,
    GET_DADOS_ENVELOPE_DOCUSIGN_ERROR,
  },
  getPessoaDocumentacaoStart,
  getPessoaDocumentacaoSuccess,
  getPessoaDocumentacaoError,
  deletePessoaDocumentacaoStart,
  deletePessoaDocumentacaoSuccess,
  deletePessoaDocumentacaoError,
  insertTipoDocumentoStart,
  insertTipoDocumentoSuccess,
  insertTipoDocumentoError,
  getTipoDocumentoListStart,
  getTipoDocumentoListSuccess,
  getTipoDocumentoListError,
  insertPessoaDocumentacaoStart,
  insertPessoaDocumentacaoSuccess,
  insertPessoaDocumentacaoError,
  insertTipoDocumentoFormalizarStart,
  insertTipoDocumentoFormalizarSuccess,
  insertTipoDocumentoFormalizarError,
  deleteTipoDocumentoFormalizarStart,
  deleteTipoDocumentoFormalizarSuccess,
  deleteTipoDocumentoFormalizarError,
  getTipoDocumentoFormalizarListStart,
  getTipoDocumentoFormalizarListSuccess,
  getTipoDocumentoFormalizarListError,
  insertDocumentoFormalizarStart,
  insertDocumentoFormalizarSuccess,
  insertDocumentoFormalizarError,
  deleteDocumentoFormalizarStart,
  deleteDocumentoFormalizarSuccess,
  deleteDocumentoFormalizarError,
  getDocumentoFormalizarListStart,
  getDocumentoFormalizarListSuccess,
  getDocumentoFormalizarListError,
  updateDocumentoValidado,
  updateDocumentoDesValidado,
  updateDocumentoInvalidado,
  resetStore,
  updateStatusPendenteAnexo,
  updateStatusValidado,
  getDadosEnvelopeDocusignStart,
  getDadosEnvelopeDocusignSuccess,
  getDadosEnvelopeDocusignError,
};
