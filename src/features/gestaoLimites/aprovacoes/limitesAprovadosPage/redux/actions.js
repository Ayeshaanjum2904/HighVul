const DISMISS_SNACKBAR = 'analistasPage/DISMISS_SNACKBAR';
const ADD_SNACKBAR = 'analistasPage/ADD_SNACKBAR';

const SET_PAGE_PARAMS = 'limitesAprovadosPage/SET_PAGE_PARAMS';
const SET_UPDATE_CONDICAO = 'limitesAprovadosPage/SET_UPDATE_CONDICAO';
const SET_OPEN_POPPER_SAVE = 'limitesAprovadosPage/SET_OPEN_POPPER_SAVE';
const SET_IS_MODIFIED = 'limitesAprovadosPage/SET_IS_MODIFIED';
const SET_MOTIVO = 'limitesAprovadosPage/SET_MOTIVO';
const SET_IS_FILTER_SELECTED = 'limitesAprovadosPage/SET_IS_FILTER_SELECTED';
const SET_CADASTRO_PAGE = 'limitesAprovadosPage/SET_CADASTRO_PAGE';
const UPDATE_LIMITE_STATUS = 'limitesAprovadosPage/UPDATE_LIMITE_STATUS';

const PREFIX_LIMITES_APROVADOS_SISGAR = 'limitesAprovadosPage/GET_LIMITES_APROVADOS_SISGAR';
const PREFIX_LIMITES_APROVADOS = 'limitesAprovadosPage/GET_LIMITES_APROVADOS';
const PREFIX_LIMITES_APROVADOS_DETALHES = 'limitesAprovadosPage/GET_DETALHE_LIMITE';
const PREFIX_LIMITES_APROVADOS_FILTERS = 'limitesAprovadosPage/GET_LIMITES_FILTERS';
const GET_LIMITES_APROVADOS_START = `${PREFIX_LIMITES_APROVADOS}/START`;
const GET_LIMITES_APROVADOS_ERROR = `${PREFIX_LIMITES_APROVADOS}/ERROR`;
const GET_LIMITES_APROVADOS_SUCCESS = `${PREFIX_LIMITES_APROVADOS}/SUCCESS`;
const GET_LIMITES_APROVADOS_SISGAR_START = `${PREFIX_LIMITES_APROVADOS_SISGAR}/START`;
const GET_LIMITES_APROVADOS_SISGAR_ERROR = `${PREFIX_LIMITES_APROVADOS_SISGAR}/ERROR`;
const GET_LIMITES_APROVADOS_SISGAR_SUCCESS = `${PREFIX_LIMITES_APROVADOS_SISGAR}/SUCCESS`;
const GET_DETALHE_LIMITE_START = `${PREFIX_LIMITES_APROVADOS_DETALHES}/START`;
const GET_DETALHE_LIMITE_ERROR = `${PREFIX_LIMITES_APROVADOS_DETALHES}/ERROR`;
const GET_DETALHE_LIMITE_SUCCESS = `${PREFIX_LIMITES_APROVADOS_DETALHES}/SUCCESS`;
const SET_ALTERAR_STATUS_LIST = `${PREFIX_LIMITES_APROVADOS_DETALHES}/SET_ALTERAR_STATUS_LIST`;
const SET_CONDICAO = `${PREFIX_LIMITES_APROVADOS_DETALHES}/SET_CONDICAO`;
const GET_LIMITES_FILTERS_START = `${PREFIX_LIMITES_APROVADOS_FILTERS}/START`;
const GET_LIMITES_FILTERS_ERROR = `${PREFIX_LIMITES_APROVADOS_FILTERS}/ERROR`;
const GET_LIMITES_FILTERS_SUCCESS = `${PREFIX_LIMITES_APROVADOS_FILTERS}/SUCCESS`;
const SET_STATUS_LIST = `${PREFIX_LIMITES_APROVADOS}/SET_STATUS_LIST`;
const SET_REGIONAL_LIST = `${PREFIX_LIMITES_APROVADOS}/SET_REGIONAL_LIST`;
const SET_PRODUTO_LIST = `${PREFIX_LIMITES_APROVADOS}/SET_PRODUTO_LIST`;
const SET_BRAND_LIST = `${PREFIX_LIMITES_APROVADOS}/SET_BRAND_LIST`;
const SET_MATRIZ_LIST = `${PREFIX_LIMITES_APROVADOS}/SET_MATRIZ_LIST`;
const SET_STATUS = `${PREFIX_LIMITES_APROVADOS}/SET_STATUS`;
const SET_REGIONAL = `${PREFIX_LIMITES_APROVADOS}/SET_REGIONAL`;
const SET_PRODUTO = `${PREFIX_LIMITES_APROVADOS}/SET_PRODUTO`;
const SET_BRAND = `${PREFIX_LIMITES_APROVADOS}/SET_BRAND`;
const SET_MATRIZ = `${PREFIX_LIMITES_APROVADOS}/SET_MATRIZ`;
const SET_ID_LIMITE = `${PREFIX_LIMITES_APROVADOS}/SET_ID_LIMITE`;
const SET_START_DATE = `${PREFIX_LIMITES_APROVADOS}/SET_START_DATE`;
const SET_END_DATE = `${PREFIX_LIMITES_APROVADOS}/SET_END_DATE`;
const SET_START_DATE_VENC = `${PREFIX_LIMITES_APROVADOS}/SET_START_DATE_VENC`;
const SET_END_DATE_VENC = `${PREFIX_LIMITES_APROVADOS}/SET_END_DATE_VENC`;
const SET_SORTING_ORDER = `${PREFIX_LIMITES_APROVADOS}/SET_SORTING_ORDER`;
const CLEAR_FILTERS = `${PREFIX_LIMITES_APROVADOS}/CLEAR_FILTERS`;
const CANCELAMENTO_SISGAR_START = `${PREFIX_LIMITES_APROVADOS}/CANCELAMENTO_SISGAR_START`;
const CANCELAMENTO_SISGAR_SUCCESS = `${PREFIX_LIMITES_APROVADOS}/CANCELAMENTO_SISGAR_SUCCESS`;
const CANCELAMENTO_SISGAR_ERROR = `${PREFIX_LIMITES_APROVADOS}/CANCELAMENTO_SISGAR_ERROR`;
const SET_SELECTED_IDS = 'limitesAprovadosPage/SET_SELECTED_IDS';

const RESET_STORE = 'limitesAprovadosPage/RESET_STORE';

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const setPageParams = (propertyName, value) => ({
  type: SET_PAGE_PARAMS,
  payload: { propertyName, value },
});

const setCondicao = (idVersao, condicao) => ({
  type: SET_CONDICAO,
  payload: { idVersao, condicao },
});

const setUpdateCondicao = (updateCondicao) => ({
  type: SET_UPDATE_CONDICAO,
  payload: { updateCondicao },
});

const setOpenPopperSave = (openPopperSave) => ({
  type: SET_OPEN_POPPER_SAVE,
  payload: { openPopperSave },
});

const setIsModified = (modified) => ({
  type: SET_IS_MODIFIED,
  payload: { modified },
});

const setMotivo = (motivo) => ({
  type: SET_MOTIVO,
  payload: { motivo },
});

const setStatus = (status) => ({
  type: SET_STATUS,
  payload: { status },
});

const setStatusList = (statusList) => ({
  type: SET_STATUS_LIST,
  payload: { statusList },
});

const setRegional = (regional) => ({
  type: SET_REGIONAL,
  payload: { regional },
});

const setRegionalList = (regionalList) => ({
  type: SET_REGIONAL_LIST,
  payload: { regionalList },
});

const setProduto = (produto) => ({
  type: SET_PRODUTO,
  payload: { produto },
});

const setProdutoList = (produtoList) => ({
  type: SET_PRODUTO_LIST,
  payload: { produtoList },
});

const setBrand = (brand) => ({
  type: SET_BRAND,
  payload: { brand },
});

const setBrandList = (brandList) => ({
  type: SET_BRAND_LIST,
  payload: { brandList },
});

const setMatriz = (matriz) => ({
  type: SET_MATRIZ,
  payload: { matriz },
});

const setMatrizList = (matrizList) => ({
  type: SET_MATRIZ_LIST,
  payload: { matrizList },
});

const setIsFilterSelected = (isFilterSelected) => ({
  type: SET_IS_FILTER_SELECTED,
  payload: { isFilterSelected },
});

const getLimitesAprovadosStart = () => ({
  type: GET_LIMITES_APROVADOS_START,
});

const getLimitesAprovadosError = () => ({
  type: GET_LIMITES_APROVADOS_ERROR,
});

const getLimitesAprovadosSuccess = (limites) => ({
  type: GET_LIMITES_APROVADOS_SUCCESS,
  payload: { limites },
});

const getDetalheLimiteStart = () => ({
  type: GET_DETALHE_LIMITE_START,
});

const getDetalheLimiteError = () => ({
  type: GET_DETALHE_LIMITE_ERROR,
});

const getDetalheLimiteSuccess = (detalhes, historico) => ({
  type: GET_DETALHE_LIMITE_SUCCESS,
  payload: { detalhes, historico },
});

const getLimitesAprovadosSisgarStart = () => ({
  type: GET_LIMITES_APROVADOS_SISGAR_START,
});

const getLimitesAprovadosSisgarError = () => ({
  type: GET_LIMITES_APROVADOS_SISGAR_ERROR,
});

const getLimitesAprovadosSisgarSuccess = (limiteAprovadoSisgar) => ({
  type: GET_LIMITES_APROVADOS_SISGAR_SUCCESS,
  payload: { limiteAprovadoSisgar },
});

const setIdLimite = (texto) => ({
  type: SET_ID_LIMITE,
  payload: { texto },
});

const resetStore = () => ({ type: RESET_STORE });

const setStartDate = (dataInicioAprovacao) => ({
  type: SET_START_DATE,
  payload: { dataInicioAprovacao },
});

const setEndDate = (dataFimAprovacao) => ({
  type: SET_END_DATE,
  payload: { dataFimAprovacao },
});

const setStartDateVenc = (dataInicioVencimento) => ({
  type: SET_START_DATE_VENC,
  payload: { dataInicioVencimento },
});

const setEndDateVenc = (dataFimVencimento) => ({
  type: SET_END_DATE_VENC,
  payload: { dataFimVencimento },
});

const getLimitesFiltersStart = () => ({
  type: GET_LIMITES_FILTERS_START,
});

const getLimitesFiltersError = () => ({
  type: GET_LIMITES_FILTERS_ERROR,
});

const getLimitesFiltersSuccess = (filters) => ({
  type: GET_LIMITES_FILTERS_SUCCESS,
  payload: { filters },
});

const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

const setSelectedIds = (idLimite) => ({
  type: SET_SELECTED_IDS,
  payload: { idLimite },
});

const setCadastroPage = (cadastroPage) => ({
  type: SET_CADASTRO_PAGE,
  payload: { cadastroPage },
});

const setAlterarStatusList = (alterarStatusList) => ({
  type: SET_ALTERAR_STATUS_LIST,
  payload: { alterarStatusList },
});

const cancelamentoSisgarStart = () => ({
  type: CANCELAMENTO_SISGAR_START,
});

const cancelamentoSisgarSuccess = () => ({
  type: CANCELAMENTO_SISGAR_SUCCESS,
});

const cancelamentoSisgarError = (errorMessage) => ({
  type: CANCELAMENTO_SISGAR_ERROR,
  payload: { errorMessage },
});

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => ({
  type: SET_SORTING_ORDER,
  payload: { nomeColuna, sentidoOrdenacao },
});

const updateLimiteStatus = (statusLimite) => ({
  type: UPDATE_LIMITE_STATUS,
  payload: { statusLimite },
});

export default {
  types: {
    DISMISS_SNACKBAR,
    ADD_SNACKBAR,
    SET_PAGE_PARAMS,
    SET_CONDICAO,
    SET_UPDATE_CONDICAO,
    SET_MOTIVO,
    SET_STATUS,
    SET_STATUS_LIST,
    SET_REGIONAL,
    SET_REGIONAL_LIST,
    SET_PRODUTO,
    SET_PRODUTO_LIST,
    SET_BRAND,
    SET_BRAND_LIST,
    SET_MATRIZ,
    SET_MATRIZ_LIST,
    GET_LIMITES_APROVADOS_START,
    GET_LIMITES_APROVADOS_ERROR,
    GET_LIMITES_APROVADOS_SUCCESS,
    RESET_STORE,
    GET_DETALHE_LIMITE_START,
    GET_DETALHE_LIMITE_SUCCESS,
    GET_DETALHE_LIMITE_ERROR,
    GET_LIMITES_APROVADOS_SISGAR_START,
    GET_LIMITES_APROVADOS_SISGAR_SUCCESS,
    GET_LIMITES_APROVADOS_SISGAR_ERROR,
    PREFIX_LIMITES_APROVADOS_DETALHES,
    PREFIX_LIMITES_APROVADOS_FILTERS,
    GET_LIMITES_FILTERS_START,
    GET_LIMITES_FILTERS_SUCCESS,
    GET_LIMITES_FILTERS_ERROR,
    SET_ID_LIMITE,
    SET_START_DATE,
    SET_END_DATE,
    SET_START_DATE_VENC,
    SET_END_DATE_VENC,
    CLEAR_FILTERS,
    SET_SELECTED_IDS,
    SET_ALTERAR_STATUS_LIST,
    SET_OPEN_POPPER_SAVE,
    SET_CADASTRO_PAGE,
    SET_IS_MODIFIED,
    SET_IS_FILTER_SELECTED,
    CANCELAMENTO_SISGAR_START,
    CANCELAMENTO_SISGAR_SUCCESS,
    CANCELAMENTO_SISGAR_ERROR,
    SET_SORTING_ORDER,
    UPDATE_LIMITE_STATUS,
  },
  addSnackbar,
  dismissSnackbar,
  setPageParams,
  setCondicao,
  setUpdateCondicao,
  setMotivo,
  setStatus,
  setStatusList,
  setRegional,
  setRegionalList,
  setProduto,
  setProdutoList,
  setBrand,
  setBrandList,
  setMatriz,
  setMatrizList,
  getLimitesAprovadosStart,
  getLimitesAprovadosError,
  getLimitesAprovadosSuccess,
  resetStore,
  getDetalheLimiteStart,
  getDetalheLimiteSuccess,
  getDetalheLimiteError,
  getLimitesAprovadosSisgarStart,
  getLimitesAprovadosSisgarSuccess,
  getLimitesAprovadosSisgarError,
  setIdLimite,
  setEndDate,
  setStartDate,
  setStartDateVenc,
  setEndDateVenc,
  getLimitesFiltersStart,
  getLimitesFiltersSuccess,
  getLimitesFiltersError,
  clearFilters,
  setSelectedIds,
  setCadastroPage,
  setAlterarStatusList,
  setOpenPopperSave,
  setIsModified,
  setIsFilterSelected,
  cancelamentoSisgarStart,
  cancelamentoSisgarSuccess,
  cancelamentoSisgarError,
  setSortingOrder,
  updateLimiteStatus,
};
