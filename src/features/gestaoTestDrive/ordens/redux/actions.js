const PREFIX = 'ordens';

const SET_ID_ORDEM = `${PREFIX}/SET_ID_ORDEM`;
const SET_STATUS = `${PREFIX}/SET_STATUS`;
const SET_PRODUTO = `${PREFIX}/SET_PRODUTO`;
const SET_USUARIO = `${PREFIX}/SET_USUARIO`;

const GET_STATUS_OPTIONS = `${PREFIX}/GET_STATUS_OPTIONS`;
const GET_PRODUTOS_OPTIONS = `${PREFIX}/GET_PRODUTOS_OPTIONS`;

const GET_ORDENS_START = `${PREFIX}/GET_ORDENS_START`;
const GET_ORDENS_SUCCESS = `${PREFIX}/GET_ORDENS_SUCCESS`;
const GET_ORDENS_ERROR = `${PREFIX}/GET_ORDENS_ERROR`;

const GET_RELATORIO_ORDENS_START = `${PREFIX}/GET_RELATORIO_ORDENS_START`;
const GET_RELATORIO_ORDENS_SUCCESS = `${PREFIX}/GET_RELATORIO_ORDENS_SUCCESS`;
const GET_RELATORIO_ORDENS_ERROR = `${PREFIX}/GET_RELATORIO_ORDENS_ERROR`;

const CANCEL_ORDER_START = `${PREFIX}/CANCEL_ORDER_START`;
const CANCEL_ORDER_SUCCESS = `${PREFIX}/CANCEL_ORDER_SUCCESS`;
const CANCEL_ORDER_ERROR = `${PREFIX}/CANCEL_ORDER_ERROR`;

const DOWNLOAD_TEMPLATE_START = 'modalNovaOrdem/DOWNLOAD_TEMPLATE_START';
const DOWNLOAD_TEMPLATE_SUCCESS = 'modalNovaOrdem/DOWNLOAD_TEMPLATE_SUCCESS';
const DOWNLOAD_TEMPLATE_ERROR = 'modalNovaOrdem/DOWNLOAD_TEMPLATE_ERROR';

const GET_FERIADOS = `${PREFIX}/GET_FERIADOS`;

const CREATE_NOVA_ORDEM_START = `${PREFIX}/CREATE_NOVA_ORDEM_START`;
const CREATE_NOVA_ORDEM_SUCCESS = `${PREFIX}/CREATE_NOVA_ORDEM_SUCCESS`;
const CREATE_NOVA_ORDEM_ERROR = `${PREFIX}/CREATE_NOVA_ORDEM_ERROR`;

const RESET_STORE = `${PREFIX}/RESET_STORE`;
const CLEAR_FILTERS = `${PREFIX}/CLEAR_FILTERS`;
const CLEAR_NOVA_ORDEM_ERRORS = `${PREFIX}/CLEAR_NOVA_ORDEM_ERRORS`;

const SET_PAGE = `${PREFIX}/SET_PAGE`;
const SET_IPP = `${PREFIX}/SET_IPP`;
const SET_SORTING_ORDER = `${PREFIX}/SET_SORTING_ORDER`;

const SET_MODAL_ORDEM_OPEN = `${PREFIX}/SET_MODAL_ORDEM_OPEN`;
const SET_MODAL_ORDEM_CLOSE = `${PREFIX}/SET_MODAL_ORDEM_CLOSE`;

const SET_MODAL_VINCULAR_CONDICAO_OPEN = `${PREFIX}/SET_MODAL_VINCULAR_CONDICAO_OPEN`;
const SET_MODAL_VINCULAR_CONDICAO_CLOSE = `${PREFIX}/SET_MODAL_VINCULAR_CONDICAO_CLOSE`;

const SET_MODAL_VINCULAR_CONDICAO_AVISTA_OPEN = `${PREFIX}/SET_MODAL_VINCULAR_CONDICAO_AVISTA_OPEN`;
const SET_MODAL_VINCULAR_CONDICAO_AVISTA_CLOSE = `${PREFIX}/SET_MODAL_VINCULAR_CONDICAO_AVISTA_CLOSE`;

const GET_CONDICOES_COMERCIAIS_START = `${PREFIX}/GET_CONDICOES_COMERCIAIS_START`;
const GET_CONDICOES_COMERCIAIS_SUCCESS = `${PREFIX}/GET_CONDICOES_COMERCIAIS_SUCCESS`;
const GET_CONDICOES_COMERCIAIS_ERROR = `${PREFIX}/GET_CONDICOES_COMERCIAIS_ERROR`;

const GET_CONDICOES_AVISTA_START = `${PREFIX}/GET_CONDICOES_AVISTA_START`;
const GET_CONDICOES_AVISTA_SUCCESS = `${PREFIX}/GET_CONDICOES_AVISTA_SUCCESS`;
const GET_CONDICOES_AVISTA_ERROR = `${PREFIX}/GET_CONDICOES_AVISTA_ERROR`;

const VINCULAR_CONDICAO_START = `${PREFIX}/VINCULAR_CONDICAO_START`;
const VINCULAR_CONDICAO_SUCCESS = `${PREFIX}/VINCULAR_CONDICAO_SUCCESS`;
const VINCULAR_CONDICAO_ERROR = `${PREFIX}/VINCULAR_CONDICAO_ERROR`;

const VINCULAR_CONDICAO_AVISTA_START = `${PREFIX}/VINCULAR_CONDICAO_AVISTA_START`;
const VINCULAR_CONDICAO_AVISTA_SUCCESS = `${PREFIX}/VINCULAR_CONDICAO_AVISTA_SUCCESS`;
const VINCULAR_CONDICAO_AVISTA_ERROR = `${PREFIX}/VINCULAR_CONDICAO_AVISTA_ERROR`;

const GET_VEICULOS_SEM_CONDICAO_COMERCIAL_START = `${PREFIX}/GET_VEICULOS_SEM_CONDICAO_COMERCIAL_START`;
const GET_VEICULOS_SEM_CONDICAO_COMERCIAL_SUCCESS = `${PREFIX}/GET_VEICULOS_SEM_CONDICAO_COMERCIAL_SUCCESS`;
const GET_VEICULOS_SEM_CONDICAO_COMERCIAL_ERROR = `${PREFIX}/GET_VEICULOS_SEM_CONDICAO_COMERCIAL_ERROR`;

const GET_VEICULOS_SEM_CONDICAO_AVISTA_START = `${PREFIX}/GET_VEICULOS_SEM_CONDICAO_AVISTA_START`;
const GET_VEICULOS_SEM_CONDICAO_AVISTA_SUCCESS = `${PREFIX}/GET_VEICULOS_SEM_CONDICAO_AVISTA_SUCCESS`;
const GET_VEICULOS_SEM_CONDICAO_AVISTA_ERROR = `${PREFIX}/GET_VEICULOS_SEM_CONDICAO_AVISTA_ERROR`;

const TOGGLE_VEICULOS_SEM_CONDICAO_COMERCIAL_VISIBILITY = `${PREFIX}/TOGGLE_VEICULOS_SEM_CONDICAO_COMERCIAL_VISIBILITY`;
const TOGGLE_VEICULOS_SEM_CONDICAO_AVISTA_VISIBILITY = `${PREFIX}/TOGGLE_VEICULOS_SEM_CONDICAO_AVISTA_VISIBILITY`;

const VALIDAR_ORDEM_START = `${PREFIX}/VALIDAR_ORDEM_START`;
const VALIDAR_ORDEM_SUCCESS = `${PREFIX}/VALIDAR_ORDEM_SUCCESS`;
const VALIDAR_ORDEM_ERROR = `${PREFIX}/VALIDAR_ORDEM_ERROR`;

const GERAR_RELATORIO_ERROS_START = `${PREFIX}/GERAR_RELATORIO_ERROS_START`;
const GERAR_RELATORIO_ERROS_SUCCESS = `${PREFIX}/GERAR_RELATORIO_ERROS_SUCCESS`;
const GERAR_RELATORIO_ERROS_ERROR = `${PREFIX}/GERAR_RELATORIO_ERROS_ERROR`;

const RESET_VALIDACAO_ORDEM = `${PREFIX}/RESET_VALIDACAO_ORDEM`;

const setOrdem = (ordem) => ({
  type: SET_ID_ORDEM,
  payload: { ordem },
});

const setStatus = (status) => ({
  type: SET_STATUS,
  payload: { status },
});

const setProduto = (produto) => ({
  type: SET_PRODUTO,
  payload: { produto },
});

const setUsuario = (usuario) => ({
  type: SET_USUARIO,
  payload: { usuario },
});

const setModalOrdemOpen = (modalOrdem) => ({
  type: SET_MODAL_ORDEM_OPEN,
  payload: { modalOrdem },
});

const setModalOrdemClose = () => ({
  type: SET_MODAL_ORDEM_CLOSE,
});

const setModalVincularCondicaoOpen = (selectedOrdem) => ({
  type: SET_MODAL_VINCULAR_CONDICAO_OPEN,
  payload: { selectedOrdem },
});

const setModalVincularCondicaoClose = () => ({
  type: SET_MODAL_VINCULAR_CONDICAO_CLOSE,
});

const setModalVincularCondicaoAVistaOpen = (selectedOrdem) => ({
  type: SET_MODAL_VINCULAR_CONDICAO_AVISTA_OPEN,
  payload: { selectedOrdem },
});

const setModalVincularCondicaoAVistaClose = () => ({
  type: SET_MODAL_VINCULAR_CONDICAO_AVISTA_CLOSE,
});

const getStatusOptions = (statusList) => ({
  type: GET_STATUS_OPTIONS,
  payload: { statusList },
});

const getProdutosOptions = (produtosList) => ({
  type: GET_PRODUTOS_OPTIONS,
  payload: { produtosList },
});

const getOrdensStart = () => ({
  type: GET_ORDENS_START,
});

const getOrdensSuccess = (pageParams, ordens) => ({
  type: GET_ORDENS_SUCCESS,
  payload: { pageParams, ordens },
});

const getOrdensError = () => ({
  type: GET_ORDENS_ERROR,
});

const getRelatorioOrdensStart = () => ({
  type: GET_RELATORIO_ORDENS_START,
});
const getRelatorioOrdensSuccess = () => ({
  type: GET_RELATORIO_ORDENS_SUCCESS,
});
const getRelatorioOrdensError = () => ({
  type: GET_RELATORIO_ORDENS_ERROR,
});

const downloadTemplateStart = () => ({
  type: DOWNLOAD_TEMPLATE_START,
});

const downloadTemplateSuccess = () => ({
  type: DOWNLOAD_TEMPLATE_SUCCESS,
});

const downloadTemplateError = (error) => ({
  type: DOWNLOAD_TEMPLATE_ERROR,
  payload: { error },
});

const getFeriados = (feriadosList) => ({
  type: GET_FERIADOS,
  payload: { feriadosList },
});

const createNovaOrdemStart = () => ({
  type: CREATE_NOVA_ORDEM_START,
});

const createNovaOrdemSuccess = () => ({
  type: CREATE_NOVA_ORDEM_SUCCESS,
});

const createNovaOrdemError = (error) => ({
  type: CREATE_NOVA_ORDEM_ERROR,
  payload: error,
});

const resetStore = () => ({
  type: RESET_STORE,
});

const cancelOrderStart = (ordemId, justificativa) => ({
  type: CANCEL_ORDER_START,
  payload: { ordemId, justificativa },
});

const cancelOrderSuccess = (ordemId) => ({
  type: CANCEL_ORDER_SUCCESS,
  payload: ordemId,
});
const cancelOrderError = (error) => ({
  type: CANCEL_ORDER_ERROR,
  payload: error,
});

const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => ({
  type: SET_SORTING_ORDER,
  payload: { nomeColuna, sentidoOrdenacao },
});

const getVeiculosSemCondicaoComercialStart = () => ({
  type: GET_VEICULOS_SEM_CONDICAO_COMERCIAL_START,
});

const getVeiculosSemCondicaoComercialSuccess = (veiculos) => ({
  type: GET_VEICULOS_SEM_CONDICAO_COMERCIAL_SUCCESS,
  payload: { veiculos },
});

const getVeiculosSemCondicaoComercialError = (error) => ({
  type: GET_VEICULOS_SEM_CONDICAO_COMERCIAL_ERROR,
  payload: { error },
});

const getVeiculosSemCondicaoAVistaStart = () => ({
  type: GET_VEICULOS_SEM_CONDICAO_AVISTA_START,
});

const getVeiculosSemCondicaoAVistaSuccess = (veiculos) => ({
  type: GET_VEICULOS_SEM_CONDICAO_AVISTA_SUCCESS,
  payload: { veiculos },
});

const getVeiculosSemCondicaoAVistaError = (error) => ({
  type: GET_VEICULOS_SEM_CONDICAO_AVISTA_ERROR,
  payload: { error },
});

const toggleVeiculosSemCondicaoComercialVisibility = () => ({
  type: TOGGLE_VEICULOS_SEM_CONDICAO_COMERCIAL_VISIBILITY,
});

const toggleVeiculosSemCondicaoAVistaVisibility = () => ({
  type: TOGGLE_VEICULOS_SEM_CONDICAO_AVISTA_VISIBILITY,
});

const validarOrdemStart = () => ({
  type: VALIDAR_ORDEM_START,
});

const validarOrdemSuccess = (resultado) => ({
  type: VALIDAR_ORDEM_SUCCESS,
  payload: { resultado },
});

const validarOrdemError = () => ({
  type: VALIDAR_ORDEM_ERROR,
});

const gerarRelatorioErrosStart = () => ({
  type: GERAR_RELATORIO_ERROS_START,
});

const gerarRelatorioErrosSuccess = () => ({
  type: GERAR_RELATORIO_ERROS_SUCCESS,
});

const gerarRelatorioErrosError = () => ({
  type: GERAR_RELATORIO_ERROS_ERROR,
});

export const resetValidacaoOrdem = () => ({
  type: RESET_VALIDACAO_ORDEM,
});

export const clearNovaOrdemErrors = () => ({
  type: CLEAR_NOVA_ORDEM_ERRORS,
});

export default {
  types: {
    SET_ID_ORDEM,
    SET_STATUS,
    SET_PRODUTO,
    SET_USUARIO,
    SET_MODAL_ORDEM_OPEN,
    SET_MODAL_ORDEM_CLOSE,
    GET_STATUS_OPTIONS,
    GET_PRODUTOS_OPTIONS,
    GET_ORDENS_START,
    GET_ORDENS_SUCCESS,
    GET_ORDENS_ERROR,
    GET_RELATORIO_ORDENS_START,
    GET_RELATORIO_ORDENS_SUCCESS,
    GET_RELATORIO_ORDENS_ERROR,
    DOWNLOAD_TEMPLATE_START,
    DOWNLOAD_TEMPLATE_SUCCESS,
    DOWNLOAD_TEMPLATE_ERROR,
    GET_FERIADOS,
    CREATE_NOVA_ORDEM_START,
    CREATE_NOVA_ORDEM_SUCCESS,
    CREATE_NOVA_ORDEM_ERROR,
    RESET_STORE,
    CLEAR_FILTERS,
    CANCEL_ORDER_START,
    CANCEL_ORDER_SUCCESS,
    CANCEL_ORDER_ERROR,
    SET_PAGE,
    SET_IPP,
    SET_SORTING_ORDER,
    SET_MODAL_VINCULAR_CONDICAO_OPEN,
    SET_MODAL_VINCULAR_CONDICAO_CLOSE,
    SET_MODAL_VINCULAR_CONDICAO_AVISTA_OPEN,
    SET_MODAL_VINCULAR_CONDICAO_AVISTA_CLOSE,
    GET_CONDICOES_COMERCIAIS_START,
    GET_CONDICOES_COMERCIAIS_SUCCESS,
    GET_CONDICOES_COMERCIAIS_ERROR,
    GET_CONDICOES_AVISTA_START,
    GET_CONDICOES_AVISTA_SUCCESS,
    GET_CONDICOES_AVISTA_ERROR,
    VINCULAR_CONDICAO_START,
    VINCULAR_CONDICAO_SUCCESS,
    VINCULAR_CONDICAO_ERROR,
    VINCULAR_CONDICAO_AVISTA_START,
    VINCULAR_CONDICAO_AVISTA_SUCCESS,
    VINCULAR_CONDICAO_AVISTA_ERROR,
    GET_VEICULOS_SEM_CONDICAO_COMERCIAL_START,
    GET_VEICULOS_SEM_CONDICAO_COMERCIAL_SUCCESS,
    GET_VEICULOS_SEM_CONDICAO_COMERCIAL_ERROR,
    GET_VEICULOS_SEM_CONDICAO_AVISTA_START,
    GET_VEICULOS_SEM_CONDICAO_AVISTA_SUCCESS,
    GET_VEICULOS_SEM_CONDICAO_AVISTA_ERROR,
    TOGGLE_VEICULOS_SEM_CONDICAO_COMERCIAL_VISIBILITY,
    TOGGLE_VEICULOS_SEM_CONDICAO_AVISTA_VISIBILITY,
    CLEAR_NOVA_ORDEM_ERRORS,
    VALIDAR_ORDEM_START,
    VALIDAR_ORDEM_SUCCESS,
    VALIDAR_ORDEM_ERROR,
    GERAR_RELATORIO_ERROS_START,
    GERAR_RELATORIO_ERROS_SUCCESS,
    GERAR_RELATORIO_ERROS_ERROR,
    RESET_VALIDACAO_ORDEM,
  },

  setOrdem,
  setStatus,
  setProduto,
  setUsuario,
  setModalOrdemOpen,
  setModalOrdemClose,
  setModalVincularCondicaoOpen,
  setModalVincularCondicaoClose,
  setModalVincularCondicaoAVistaOpen,
  setModalVincularCondicaoAVistaClose,
  getStatusOptions,
  getProdutosOptions,
  getOrdensStart,
  getOrdensSuccess,
  getOrdensError,
  getRelatorioOrdensStart,
  getRelatorioOrdensSuccess,
  getRelatorioOrdensError,
  downloadTemplateStart,
  downloadTemplateSuccess,
  downloadTemplateError,
  getFeriados,
  createNovaOrdemStart,
  createNovaOrdemSuccess,
  createNovaOrdemError,
  resetStore,
  clearFilters,
  setPage,
  setIpp,
  setSortingOrder,
  cancelOrderStart,
  cancelOrderSuccess,
  cancelOrderError,
  getVeiculosSemCondicaoComercialStart,
  getVeiculosSemCondicaoComercialSuccess,
  getVeiculosSemCondicaoComercialError,
  getVeiculosSemCondicaoAVistaStart,
  getVeiculosSemCondicaoAVistaSuccess,
  getVeiculosSemCondicaoAVistaError,
  toggleVeiculosSemCondicaoComercialVisibility,
  toggleVeiculosSemCondicaoAVistaVisibility,
  clearNovaOrdemErrors,
  validarOrdemStart,
  validarOrdemSuccess,
  validarOrdemError,
  gerarRelatorioErrosStart,
  gerarRelatorioErrosSuccess,
  gerarRelatorioErrosError,
  resetValidacaoOrdem,
};
