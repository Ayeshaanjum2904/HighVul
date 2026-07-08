const SET_OPEN = 'detalhePedidos/SET_OPEN';
const SET_OPEN_MODAL_ALTERAR = 'detalhePedidos/SET_OPEN_MODAL_ALTERAR';
const SET_CREDITO_APROVADO = 'detalhePedidos/SET_CREDITO_APROVADO';
const UPDATE_MESSAGE = 'detalhePedidos/UPDATE_MESSAGE';
const UPDATE_MOTIVO = 'detalhePedidos/UPDATE_MOTIVO';
const SET_MODAL_CANCEL_PEDIDO_OPEN = 'detalhePedidos/SET_MODAL_CANCEL_PEDIDO_OPEN';
const SET_ETAPA_DESEJADA = 'detalhePedidos/SET_ETAPA_DESEJADA';

const PREFIX_SEND_COMENTARIO = 'detalhePedidos/SEND_COMENTARIO';
const SEND_COMENTARIO_START = `${PREFIX_SEND_COMENTARIO}/START`;
const SEND_COMENTARIO_SUCCESS = `${PREFIX_SEND_COMENTARIO}/SUCCESS`;
const SEND_COMENTARIO_ERROR = `${PREFIX_SEND_COMENTARIO}/ERROR`;

const PREFIX_GET_DETALHE_PEDIDO = 'detalhePedidos/GET_DETALHE_PEDIDO';
const GET_DETALHE_PEDIDO_START = `${PREFIX_GET_DETALHE_PEDIDO}/START`;
const GET_DETALHE_PEDIDO_SUCCESS = `${PREFIX_GET_DETALHE_PEDIDO}/SUCCESS`;
const GET_DETALHE_PEDIDO_ERROR = `${PREFIX_GET_DETALHE_PEDIDO}/ERROR`;

const PREFIX_SEND_DETALHE_PEDIDO = 'detalhePedidos/SEND_DETALHE_PEDIDO';
const SEND_DETALHE_PEDIDO_START = `${PREFIX_SEND_DETALHE_PEDIDO}/START`;
const SEND_DETALHE_PEDIDO_SUCCESS = `${PREFIX_SEND_DETALHE_PEDIDO}/SUCCESS`;
const SEND_DETALHE_PEDIDO_ERROR = `${PREFIX_SEND_DETALHE_PEDIDO}/ERROR`;

const PREFIX_UPDATE_STATUS_PEDIDO = 'detalhePedidos/UPDATE_STATUS_PEDIDO';
const UPDATE_STATUS_PEDIDO_START = `${PREFIX_UPDATE_STATUS_PEDIDO}/START`;
const UPDATE_STATUS_PEDIDO_SUCCESS = `${PREFIX_UPDATE_STATUS_PEDIDO}/SUCCESS`;
const UPDATE_STATUS_PEDIDO_ERROR = `${PREFIX_UPDATE_STATUS_PEDIDO}/ERROR`;
const CLOSE_STATUS_PEDIDO_ERROR_MODAL = `${PREFIX_UPDATE_STATUS_PEDIDO}/CLOSE_MODAL`;

const PREFIX_CANCEL_PEDIDO = 'detalhePedidos/CANCEL_PEDIDO';
const CANCEL_PEDIDO_START = `${PREFIX_CANCEL_PEDIDO}/START`;
const CANCEL_PEDIDO_SUCCESS = `${PREFIX_CANCEL_PEDIDO}/SUCCESS`;
const CANCEL_PEDIDO_ERROR = `${PREFIX_CANCEL_PEDIDO}/ERROR`;

const PREFIX_UPLOAD_FATURA_PEDIDO = 'detalhePedidos/UPLOAD_FATURA_PEDIDO';
const UPLOAD_FATURA_PEDIDO_START = `${PREFIX_UPLOAD_FATURA_PEDIDO}/START`;
const UPLOAD_FATURA_PEDIDO_SUCCESS = `${PREFIX_UPLOAD_FATURA_PEDIDO}/SUCCESS`;
const UPLOAD_FATURA_PEDIDO_ERROR = `${PREFIX_UPLOAD_FATURA_PEDIDO}/ERROR`;

const PREFIX_DELETE_FATURA_PEDIDO = 'detalhePedidos/UPLOAD_DELETE_PEDIDO';
const DELETE_FATURA_PEDIDO_START = `${PREFIX_DELETE_FATURA_PEDIDO}/START`;
const DELETE_FATURA_PEDIDO_SUCCESS = `${PREFIX_DELETE_FATURA_PEDIDO}/SUCCESS`;
const DELETE_FATURA_PEDIDO_ERROR = `${PREFIX_DELETE_FATURA_PEDIDO}/ERROR`;

const UPDATE_DETALHE_PROPERTY = 'pedidosDetalhes/UPDATE_DETALHE_PROPERTY';
const UPDATE_CONDICAO_PROPERTY = 'pedidosDetalhes/UPDATE_CONDICAO_PROPERTY';
const UPDATE_CONDICAO_SELECIONADA = 'pedidosDetalhes/UPDATE_CONDICAO_SELECIONADA';

const PREFIX_UPLOAD_CONTRATO = 'detalhePedidos/UPLOAD_CONTRATO';
const UPLOAD_CONTRATO_START = `${PREFIX_UPLOAD_CONTRATO}/START`;
const UPLOAD_CONTRATO_SUCCESS = `${PREFIX_UPLOAD_CONTRATO}/SUCCESS`;
const UPLOAD_CONTRATO_ERROR = `${PREFIX_UPLOAD_CONTRATO}/ERROR`;

const PREFIX_UPDATE_DETALHES_VEICULO = 'detalhePedidos/UPDATE_DETALHES_VEICULO';
const UPDATE_DETALHES_VEICULO_START = `${PREFIX_UPDATE_DETALHES_VEICULO}/START`;
const UPDATE_DETALHES_VEICULO_SUCCESS = `${PREFIX_UPDATE_DETALHES_VEICULO}/SUCCESS`;
const UPDATE_DETALHES_VEICULO_ERROR = `${PREFIX_UPDATE_DETALHES_VEICULO}/ERROR`;

const DISMISS_SNACKBAR = 'detalhePedidos/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'detalhePedidos/ADD_SNACKBAR';

const PREFIX_GET_REGRESSAO_STATUS = 'detalhePedidos/GET_REGRESSAO_STATUS';
const GET_REGRESSAO_STATUS_START = `${PREFIX_GET_REGRESSAO_STATUS}/START`;
const GET_REGRESSAO_STATUS_SUCCESS = `${PREFIX_GET_REGRESSAO_STATUS}/SUCCESS`;
const GET_REGRESSAO_STATUS_ERROR = `${PREFIX_GET_REGRESSAO_STATUS}/ERROR`;

const PREFIX_INTEGRACAOB2B = 'detalhePedidos/INTEGRACAOB2B';
const INTEGRACAOB2B_START = `${PREFIX_INTEGRACAOB2B}/START`;
const INTEGRACAOB2B_SUCCESS = `${PREFIX_INTEGRACAOB2B}/SUCCESS`;
const INTEGRACAOB2B_ERROR = `${PREFIX_INTEGRACAOB2B}/ERROR`;

const PREFIX_SEND_DADOS_MONTADORA = 'detalhePedidos/SEND_DADOS_MONTADORA';
const SEND_DADOS_MONTADORA_START = `${PREFIX_SEND_DADOS_MONTADORA}/START`;
const SEND_DADOS_MONTADORA_SUCCESS = `${PREFIX_SEND_DADOS_MONTADORA}/SUCCESS`;
const SEND_DADOS_MONTADORA_ERROR = `${PREFIX_SEND_DADOS_MONTADORA}/ERROR`;

const PREFIX_GET_CODIGO_EMPRESA_REGIONAL = 'detalhePedidos/GET_CODIGO_EMPRESA_REGIONAL';
const GET_CODIGO_EMPRESA_REGIONAL_START = `${PREFIX_GET_CODIGO_EMPRESA_REGIONAL}/START`;
const GET_CODIGO_EMPRESA_REGIONAL_SUCCESS = `${PREFIX_GET_CODIGO_EMPRESA_REGIONAL}/SUCCESS`;
const GET_CODIGO_EMPRESA_REGIONAL_ERROR = `${PREFIX_GET_CODIGO_EMPRESA_REGIONAL}/ERROR`;

const SET_TAGLIST_ERROR = 'detalhePedidos/SET_TAGLIST_ERROR';

const setOpen = (isOpen) => ({
  type: SET_OPEN,
  payload: { isOpen },
});

const setEtapaDesejada = (etapa) => ({
  type: SET_ETAPA_DESEJADA,
  payload: { etapa },
});

const setOpenModalAlterar = (open) => ({
  type: SET_OPEN_MODAL_ALTERAR,
  payload: { open },
});

const getDetalhePedidoStart = () => ({
  type: GET_DETALHE_PEDIDO_START,
});

const getDetalhePedidoSuccess = (detalhePedido) => ({
  type: GET_DETALHE_PEDIDO_SUCCESS,
  payload: { detalhePedido },
});

const getDetalhePedidoError = () => ({
  type: GET_DETALHE_PEDIDO_ERROR,
});

const getCodigoEmpresaRegionalStart = () => ({
  type: GET_CODIGO_EMPRESA_REGIONAL_START,
});

const getCodigoEmpresaRegionalSuccess = (options) => ({
  type: GET_CODIGO_EMPRESA_REGIONAL_SUCCESS,
  payload: { options },
});

const getCodigoEmpresaRegionalError = () => ({
  type: GET_CODIGO_EMPRESA_REGIONAL_ERROR,
});

const updateDetalheProperty = (propertyName, value) => ({
  type: UPDATE_DETALHE_PROPERTY,
  payload: {
    propertyName,
    value,
  },
});

const sendDetalhePedidoStart = () => ({
  type: SEND_DETALHE_PEDIDO_START,
});

const sendDetalhePedidoSuccess = () => ({
  type: SEND_DETALHE_PEDIDO_SUCCESS,
});

const sendDetalhePedidoError = () => ({
  type: SEND_DETALHE_PEDIDO_ERROR,
});

const updateCondicaoProperty = (propertyName, value) => ({
  type: UPDATE_CONDICAO_PROPERTY,
  payload: {
    propertyName,
    value,
  },
});

const updateStatusPedidoStart = () => ({
  type: UPDATE_STATUS_PEDIDO_START,
});

const updateStatusPedidoSuccess = () => ({
  type: UPDATE_STATUS_PEDIDO_SUCCESS,
});

const updateStatusPedidoError = (errors) => ({
  type: UPDATE_STATUS_PEDIDO_ERROR,
  payload: { errors },
});

const closeStatusErrorModal = () => ({
  type: CLOSE_STATUS_PEDIDO_ERROR_MODAL,
});

const cancelPedidoStart = () => ({
  type: CANCEL_PEDIDO_START,
});

const cancelPedidoSuccess = () => ({
  type: CANCEL_PEDIDO_SUCCESS,
});

const cancelPedidoError = () => ({
  type: CANCEL_PEDIDO_ERROR,
});

const updateCondicaoSelecionada = (condicao) => ({
  type: UPDATE_CONDICAO_SELECIONADA,
  payload: { condicao },
});

const uploadFaturaPedidoStart = (tamanhoFatura, nomeFatura) => ({
  type: UPLOAD_FATURA_PEDIDO_START,
  payload: { tamanhoFatura, nomeFatura },
});

const uploadFaturaPedidoSuccess = (urlFatura) => ({
  type: UPLOAD_FATURA_PEDIDO_SUCCESS,
  payload: { urlFatura },
});

const uploadFaturaPedidoError = () => ({
  type: UPLOAD_FATURA_PEDIDO_ERROR,
});

const deleteFaturaPedidoStart = () => ({
  type: DELETE_FATURA_PEDIDO_START,
});

const deleteFaturaPedidoSuccess = () => ({
  type: DELETE_FATURA_PEDIDO_SUCCESS,
});

const deleteFaturaPedidoError = () => ({
  type: DELETE_FATURA_PEDIDO_ERROR,
});

const updateMessage = (value) => ({
  type: UPDATE_MESSAGE,
  payload: { value },
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

const setCreditoAprovado = (isCreditoAprovado) => ({
  type: SET_CREDITO_APROVADO,
  payload: { isCreditoAprovado },
});

const updateMotivo = (value) => ({
  type: UPDATE_MOTIVO,
  payload: { value },
});

const setCancelPedidoModal = (value) => ({
  type: SET_MODAL_CANCEL_PEDIDO_OPEN,
  payload: { value },
});

const uploadContratoStart = () => ({
  type: UPLOAD_CONTRATO_START,
});

const uploadContratoSuccess = (urlContrato) => ({
  type: UPLOAD_CONTRATO_SUCCESS,
  payload: { urlContrato },
});

const uploadContratoError = () => ({
  type: UPLOAD_CONTRATO_ERROR,
});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const getRegressaoStatusStart = () => ({
  type: GET_REGRESSAO_STATUS_START,
});

const getRegressaoStatusSuccess = (data) => ({
  type: GET_REGRESSAO_STATUS_SUCCESS,
  payload: { data },
});

const getRegressaoStatusError = () => ({
  type: GET_REGRESSAO_STATUS_ERROR,
});

const updateDetalhesVeiculoStart = () => ({
  type: UPDATE_DETALHES_VEICULO_START,
});

const updateDetalhesVeiculoSuccess = () => ({
  type: UPDATE_DETALHES_VEICULO_SUCCESS,
});

const updateDetalhesVeiculoError = () => ({
  type: UPDATE_DETALHES_VEICULO_ERROR,
});

const IntegracaoB2BStart = () => ({
  type: INTEGRACAOB2B_START,
});

const IntegracaoB2BSuccess = () => ({
  type: INTEGRACAOB2B_SUCCESS,
});

const IntegracaoB2BError = () => ({
  type: INTEGRACAOB2B_ERROR,
});

const sendDadosMontadoraStart = () => ({
  type: SEND_DADOS_MONTADORA_START,
});

const sendDadosMontadoraSuccess = () => ({
  type: SEND_DADOS_MONTADORA_SUCCESS,
});

const sendDadosMontadoraError = () => ({
  type: SEND_DADOS_MONTADORA_ERROR,
});

const setTaglistError = (hasError) => ({
  type: SET_TAGLIST_ERROR,
  payload: { hasError },
});

export default {
  types: {
    SET_OPEN,
    SET_ETAPA_DESEJADA,
    SET_OPEN_MODAL_ALTERAR,
    SET_CREDITO_APROVADO,
    UPDATE_MESSAGE,
    UPDATE_MOTIVO,
    SET_MODAL_CANCEL_PEDIDO_OPEN,

    PREFIX_SEND_DETALHE_PEDIDO,
    SEND_DETALHE_PEDIDO_START,
    SEND_DETALHE_PEDIDO_SUCCESS,
    SEND_DETALHE_PEDIDO_ERROR,

    PREFIX_GET_DETALHE_PEDIDO,
    GET_DETALHE_PEDIDO_START,
    GET_DETALHE_PEDIDO_SUCCESS,
    GET_DETALHE_PEDIDO_ERROR,

    PREFIX_UPDATE_STATUS_PEDIDO,
    UPDATE_STATUS_PEDIDO_START,
    UPDATE_STATUS_PEDIDO_SUCCESS,
    UPDATE_STATUS_PEDIDO_ERROR,
    CLOSE_STATUS_PEDIDO_ERROR_MODAL,

    PREFIX_CANCEL_PEDIDO,
    CANCEL_PEDIDO_START,
    CANCEL_PEDIDO_SUCCESS,
    CANCEL_PEDIDO_ERROR,

    PREFIX_UPLOAD_FATURA_PEDIDO,
    UPLOAD_FATURA_PEDIDO_START,
    UPLOAD_FATURA_PEDIDO_SUCCESS,
    UPLOAD_FATURA_PEDIDO_ERROR,

    PREFIX_DELETE_FATURA_PEDIDO,
    DELETE_FATURA_PEDIDO_START,
    DELETE_FATURA_PEDIDO_SUCCESS,
    DELETE_FATURA_PEDIDO_ERROR,

    UPDATE_DETALHE_PROPERTY,
    UPDATE_CONDICAO_PROPERTY,
    UPDATE_CONDICAO_SELECIONADA,

    PREFIX_SEND_COMENTARIO,
    SEND_COMENTARIO_START,
    SEND_COMENTARIO_SUCCESS,
    SEND_COMENTARIO_ERROR,

    PREFIX_UPLOAD_CONTRATO,
    UPLOAD_CONTRATO_START,
    UPLOAD_CONTRATO_SUCCESS,
    UPLOAD_CONTRATO_ERROR,

    PREFIX_UPDATE_DETALHES_VEICULO,
    UPDATE_DETALHES_VEICULO_START,
    UPDATE_DETALHES_VEICULO_SUCCESS,
    UPDATE_DETALHES_VEICULO_ERROR,

    ADD_SNACKBAR,
    DISMISS_SNACKBAR,

    PREFIX_GET_REGRESSAO_STATUS,
    GET_REGRESSAO_STATUS_START,
    GET_REGRESSAO_STATUS_ERROR,
    GET_REGRESSAO_STATUS_SUCCESS,

    PREFIX_INTEGRACAOB2B,
    INTEGRACAOB2B_START,
    INTEGRACAOB2B_SUCCESS,
    INTEGRACAOB2B_ERROR,

    PREFIX_SEND_DADOS_MONTADORA,
    SEND_DADOS_MONTADORA_START,
    SEND_DADOS_MONTADORA_SUCCESS,
    SEND_DADOS_MONTADORA_ERROR,

    PREFIX_GET_CODIGO_EMPRESA_REGIONAL,
    GET_CODIGO_EMPRESA_REGIONAL_START,
    GET_CODIGO_EMPRESA_REGIONAL_SUCCESS,
    GET_CODIGO_EMPRESA_REGIONAL_ERROR,

    SET_TAGLIST_ERROR,
  },

  setOpen,
  setOpenModalAlterar,
  setCreditoAprovado,
  updateMessage,
  updateMotivo,
  setCancelPedidoModal,

  sendDetalhePedidoStart,
  sendDetalhePedidoSuccess,
  sendDetalhePedidoError,

  getDetalhePedidoStart,
  getDetalhePedidoSuccess,
  getDetalhePedidoError,

  getCodigoEmpresaRegionalStart,
  getCodigoEmpresaRegionalSuccess,
  getCodigoEmpresaRegionalError,

  updateStatusPedidoStart,
  updateStatusPedidoSuccess,
  updateStatusPedidoError,
  closeStatusErrorModal,

  cancelPedidoStart,
  cancelPedidoSuccess,
  cancelPedidoError,

  uploadFaturaPedidoStart,
  uploadFaturaPedidoSuccess,
  uploadFaturaPedidoError,

  deleteFaturaPedidoStart,
  deleteFaturaPedidoSuccess,
  deleteFaturaPedidoError,

  updateDetalheProperty,
  updateCondicaoProperty,
  updateCondicaoSelecionada,

  sendComentarioStart,
  sendComentarioSuccess,
  sendComentarioError,

  uploadContratoStart,
  uploadContratoSuccess,
  uploadContratoError,

  updateDetalhesVeiculoStart,
  updateDetalhesVeiculoSuccess,
  updateDetalhesVeiculoError,

  addSnackbar,
  dismissSnackbar,

  getRegressaoStatusStart,
  getRegressaoStatusError,
  getRegressaoStatusSuccess,
  setEtapaDesejada,

  IntegracaoB2BStart,
  IntegracaoB2BSuccess,
  IntegracaoB2BError,

  sendDadosMontadoraStart,
  sendDadosMontadoraSuccess,
  sendDadosMontadoraError,

  setTaglistError,
};
