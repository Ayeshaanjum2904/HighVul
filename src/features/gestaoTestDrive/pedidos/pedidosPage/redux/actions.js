const PREFIX_FILTERS = 'pedidosPage/FILTERS';
const SET_TEXTO = `${PREFIX_FILTERS}/SET_TEXTO`;
const SET_DATA_INICIO_PEDIDO = `${PREFIX_FILTERS}/SET_DATA_INICIO_PEDIDO`;
const SET_DATA_FIM_PEDIDO = `${PREFIX_FILTERS}/SET_DATA_FIM_PEDIDO`;
const SET_DATA_FATURAMENTO = `${PREFIX_FILTERS}/SET_DATA_FATURAMENTO`;
const SET_MARCA = `${PREFIX_FILTERS}/SET_MARCA`;
const SET_PRODUTO = `${PREFIX_FILTERS}/SET_PRODUTO`;
const SET_REGIAO = `${PREFIX_FILTERS}/SET_REGIAO`;
const SET_STATUS = `${PREFIX_FILTERS}/SET_STATUS`;
const SET_MODALIDADE = `${PREFIX_FILTERS}/SET_MODALIDADE`;
const SET_VEICULO = `${PREFIX_FILTERS}/SET_VEICULO`;
const SET_CONCESSIONARIA = `${PREFIX_FILTERS}/SET_CONCESSIONARIA`;
const SET_SORTING = `${PREFIX_FILTERS}/SET_SORTING`;
const CLEAR_FILTERS = `${PREFIX_FILTERS}/CLEAR_FILTERS`;

const PREFIX_GET_PEDIDOS = 'pedidosPage/GET_PEDIDOS';
const GET_PEDIDOS_START = `${PREFIX_GET_PEDIDOS}/START`;
const GET_PEDIDOS_SUCCESS = `${PREFIX_GET_PEDIDOS}/SUCCESS`;
const GET_PEDIDOS_ERROR = `${PREFIX_GET_PEDIDOS}/ERROR`;
const SET_REGIOES = `${PREFIX_GET_PEDIDOS}/SET_REGIOES`;
const SET_STATUS_LIST = `${PREFIX_GET_PEDIDOS}/SET_STATUS_LIST`;

const SET_PEDIDO_VISUALIZADO = 'pedidosPage/SET_PEDIDO_VISUALIZADO';

const PREFIX_SELECTED_PEDIDOS = 'pedidosPage/SELECTED_PEDIDOS';
const SELECT_PEDIDO = `${PREFIX_SELECTED_PEDIDOS}/SELECT_PEDIDO`;
const UNSELECT_PEDIDO = `${PREFIX_SELECTED_PEDIDOS}/UNSELECT_PEDIDO`;
const CLEAR_SELECTED = `${PREFIX_SELECTED_PEDIDOS}/CLEAR_SELECTED`;
const SELECT_ALL_PAGE = `${PREFIX_SELECTED_PEDIDOS}/SELECT_ALL_PAGE`;

const SET_PAGE = 'pedidosPage/SET_PAGE';
const SET_IPP = 'pedidosPage/SET_IPP';
const RESET_STORE = 'pedidosPage/RESET_STORE';

const SET_IS_FIRST_PAGE_LOAD = 'pedidosPage/SET_IS_FIRST_PAGE_LOAD';

const PREFIX_EXPORT_RELATORIO = 'pedidosPage/EXPORT_RELATORIO';
const EXPORT_RELATORIO_START = `${PREFIX_EXPORT_RELATORIO}/START`;
const EXPORT_RELATORIO_SUCCESS = `${PREFIX_EXPORT_RELATORIO}/SUCCESS`;
const EXPORT_RELATORIO_ERROR = `${PREFIX_EXPORT_RELATORIO}/ERROR`;

const PREFIX_CANCELAR_PEDIDOS = 'pedidosPage/CANCELAR_PEDIDOS';
const CANCELAR_PEDIDOS_START = `${PREFIX_CANCELAR_PEDIDOS}/START`;
const CANCELAR_PEDIDOS_SUCCESS = `${PREFIX_CANCELAR_PEDIDOS}/SUCCESS`;
const CANCELAR_PEDIDOS_ERROR = `${PREFIX_CANCELAR_PEDIDOS}/ERROR`;

const OPEN_MODAL_CONFIRMACAO = 'pedidosPage/OPEN_MODAL_CONFIRMACAO';
const CLOSE_MODAL_CONFIRMACAO = 'pedidosPage/CLOSE_MODAL_CONFIRMACAO';
const OPEN_MODAL_AVISO = 'pedidosPage/OPEN_MODAL_AVISO';
const CLOSE_MODAL_AVISO = 'pedidosPage/CLOSE_MODAL_AVISO';
const OPEN_MODAL_MISTO = 'pedidosPage/OPEN_MODAL_MISTO';
const CLOSE_MODAL_MISTO = 'pedidosPage/CLOSE_MODAL_MISTO';

const SET_JUSTIFICATIVA_CANCELAMENTO = 'pedidosPage/SET_JUSTIFICATIVA_CANCELAMENTO';

const PREFIX_ANALISE_CREDITO = 'pedidosPage/ANALISE_CREDITO';
const ANALISE_CREDITO_START = `${PREFIX_ANALISE_CREDITO}/START`;
const ANALISE_CREDITO_SUCCESS = `${PREFIX_ANALISE_CREDITO}/SUCCESS`;
const ANALISE_CREDITO_ERROR = `${PREFIX_ANALISE_CREDITO}/ERROR`;

const OPEN_MODAL_ANALISE_CONFIRMACAO = 'pedidosPage/OPEN_MODAL_ANALISE_CONFIRMACAO';
const CLOSE_MODAL_ANALISE_CONFIRMACAO = 'pedidosPage/CLOSE_MODAL_ANALISE_CONFIRMACAO';
const OPEN_MODAL_ANALISE_AVISO = 'pedidosPage/OPEN_MODAL_ANALISE_AVISO';
const CLOSE_MODAL_ANALISE_AVISO = 'pedidosPage/CLOSE_MODAL_ANALISE_AVISO';
const OPEN_MODAL_ANALISE_MISTO = 'pedidosPage/OPEN_MODAL_ANALISE_MISTO';
const CLOSE_MODAL_ANALISE_MISTO = 'pedidosPage/CLOSE_MODAL_ANALISE_MISTO';

const SET_TIPO_ACAO_ANALISE_CREDITO = 'pedidosPage/SET_TIPO_ACAO_ANALISE_CREDITO';

const setTexto = (texto, isFilterSelected) => ({
  type: SET_TEXTO,
  payload: { texto, isFilterSelected },
});

const setDataInicioPedido = (dataInicioPedido, isFilterSelected) => ({
  type: SET_DATA_INICIO_PEDIDO,
  payload: { dataInicioPedido, isFilterSelected },
});

const setDataFimPedido = (dataFimPedido, isFilterSelected) => ({
  type: SET_DATA_FIM_PEDIDO,
  payload: { dataFimPedido, isFilterSelected },
});

const setDataFaturamento = (dataFaturamento, isFilterSelected) => ({
  type: SET_DATA_FATURAMENTO,
  payload: { dataFaturamento, isFilterSelected },
});

const setMarca = (marca, isFilterSelected) => ({
  type: SET_MARCA,
  payload: { marca, isFilterSelected },
});

const setProduto = (produto, isFilterSelected) => ({
  type: SET_PRODUTO,
  payload: { produto, isFilterSelected },
});

const setRegiao = (regiao, isFilterSelected) => ({
  type: SET_REGIAO,
  payload: { regiao, isFilterSelected },
});

const setRegioes = (regioes, isFilterSelected) => ({
  type: SET_REGIOES,
  payload: { regioes, isFilterSelected },
});

const setStatus = (status, isFilterSelected) => ({
  type: SET_STATUS,
  payload: { status, isFilterSelected },
});

const setModalidade = (modalidade, isFilterSelected) => ({
  type: SET_MODALIDADE,
  payload: { modalidade, isFilterSelected },
});

const setVeiculo = (veiculo, isFilterSelected) => ({
  type: SET_VEICULO,
  payload: { veiculo, isFilterSelected },
});

const setConcessionaria = (concessionaria, isFilterSelected) => ({
  type: SET_CONCESSIONARIA,
  payload: { concessionaria, isFilterSelected },
});

const setStatusList = (statusList) => ({
  type: SET_STATUS_LIST,
  payload: { statusList },
});

const setSorting = (isAscSort) => ({
  type: SET_SORTING,
  payload: { isAscSort },
});

const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

const getPedidosStart = () => ({
  type: GET_PEDIDOS_START,
});

const getPedidosError = () => ({
  type: GET_PEDIDOS_ERROR,
});

const getPedidosSuccess = (pedidos, pageParams, produtos, brands) => ({
  type: GET_PEDIDOS_SUCCESS,
  payload: {
    pedidos, pageParams, produtos, brands,
  },
});

const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

const setIpp = (ipp) => ({
  type: SET_IPP,
  payload: { ipp },
});

const setPedidoVisualizado = (idPedido) => ({
  type: SET_PEDIDO_VISUALIZADO,
  payload: { idPedido },
});

const resetStore = () => ({ type: RESET_STORE });

const setIsFirstPageLoad = (value) => ({
  type: SET_IS_FIRST_PAGE_LOAD,
  payload: { value },
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

const cancelarPedidosStart = () => ({
  type: CANCELAR_PEDIDOS_START,
});

const cancelarPedidosSuccess = () => ({
  type: CANCELAR_PEDIDOS_SUCCESS,
});

const cancelarPedidosError = (error) => ({
  type: CANCELAR_PEDIDOS_ERROR,
  payload: { error },
});

const openModalConfirmacao = () => ({
  type: OPEN_MODAL_CONFIRMACAO,
});

const closeModalConfirmacao = () => ({
  type: CLOSE_MODAL_CONFIRMACAO,
});

const openModalAviso = () => ({
  type: OPEN_MODAL_AVISO,
});

const closeModalAviso = () => ({
  type: CLOSE_MODAL_AVISO,
});

const openModalMisto = () => ({
  type: OPEN_MODAL_MISTO,
});

const closeModalMisto = () => ({
  type: CLOSE_MODAL_MISTO,
});

export const setTipoAcaoAnaliseCredito = (tipo) => ({
  type: SET_TIPO_ACAO_ANALISE_CREDITO,
  payload: tipo,
});

const setJustificativaCancelamento = (justificativa) => ({
  type: SET_JUSTIFICATIVA_CANCELAMENTO,
  payload: { justificativa },
});

const analiseCreditoStart = () => ({
  type: ANALISE_CREDITO_START,
});

const analiseCreditoSuccess = () => ({
  type: ANALISE_CREDITO_SUCCESS,
});

const analiseCreditoError = (error) => ({
  type: ANALISE_CREDITO_ERROR,
  payload: { error },
});

const openModalAnaliseConfirmacao = () => ({
  type: OPEN_MODAL_ANALISE_CONFIRMACAO,
});

const closeModalAnaliseConfirmacao = () => ({
  type: CLOSE_MODAL_ANALISE_CONFIRMACAO,
});

const openModalAnaliseAviso = () => ({
  type: OPEN_MODAL_ANALISE_AVISO,
});

const closeModalAnaliseAviso = () => ({
  type: CLOSE_MODAL_ANALISE_AVISO,
});

const openModalAnaliseMisto = () => ({
  type: OPEN_MODAL_ANALISE_MISTO,
});

const closeModalAnaliseMisto = () => ({
  type: CLOSE_MODAL_ANALISE_MISTO,
});

const selectPedido = (pedido) => ({
  type: SELECT_PEDIDO,
  payload: { pedido },
});

const unselectPedido = (pedidoId) => ({
  type: UNSELECT_PEDIDO,
  payload: { pedidoId },
});

const clearSelected = () => ({
  type: CLEAR_SELECTED,
});

const selectAllPage = (pedidos) => ({
  type: SELECT_ALL_PAGE,
  payload: { pedidos },
});

export default {
  types: {
    PREFIX_FILTERS,
    SET_MARCA,
    SET_PRODUTO,
    SET_TEXTO,
    SET_DATA_INICIO_PEDIDO,
    SET_DATA_FIM_PEDIDO,
    SET_DATA_FATURAMENTO,
    SET_REGIAO,
    SET_STATUS,
    SET_MODALIDADE,
    SET_VEICULO,
    SET_CONCESSIONARIA,
    SET_SORTING,
    CLEAR_FILTERS,

    SET_PEDIDO_VISUALIZADO,

    PREFIX_SELECTED_PEDIDOS,
    SELECT_PEDIDO,
    UNSELECT_PEDIDO,
    CLEAR_SELECTED,
    SELECT_ALL_PAGE,

    PREFIX_GET_PEDIDOS,
    SET_REGIOES,
    GET_PEDIDOS_START,
    GET_PEDIDOS_SUCCESS,
    GET_PEDIDOS_ERROR,
    SET_STATUS_LIST,

    SET_PAGE,
    SET_IPP,
    RESET_STORE,

    SET_IS_FIRST_PAGE_LOAD,

    EXPORT_RELATORIO_START,
    EXPORT_RELATORIO_SUCCESS,
    EXPORT_RELATORIO_ERROR,

    CANCELAR_PEDIDOS_START,
    CANCELAR_PEDIDOS_SUCCESS,
    CANCELAR_PEDIDOS_ERROR,

    ANALISE_CREDITO_START,
    ANALISE_CREDITO_SUCCESS,
    ANALISE_CREDITO_ERROR,

    OPEN_MODAL_CONFIRMACAO,
    CLOSE_MODAL_CONFIRMACAO,
    OPEN_MODAL_AVISO,
    CLOSE_MODAL_AVISO,
    OPEN_MODAL_MISTO,
    CLOSE_MODAL_MISTO,

    OPEN_MODAL_ANALISE_CONFIRMACAO,
    CLOSE_MODAL_ANALISE_CONFIRMACAO,
    OPEN_MODAL_ANALISE_AVISO,
    CLOSE_MODAL_ANALISE_AVISO,
    OPEN_MODAL_ANALISE_MISTO,
    CLOSE_MODAL_ANALISE_MISTO,

    SET_TIPO_ACAO_ANALISE_CREDITO,

    SET_JUSTIFICATIVA_CANCELAMENTO,
  },

  setTexto,
  setDataInicioPedido,
  setDataFimPedido,
  setDataFaturamento,
  setMarca,
  setProduto,
  setModalidade,
  setVeiculo,
  setConcessionaria,
  setSorting,
  clearFilters,

  setPedidoVisualizado,

  selectPedido,
  unselectPedido,
  clearSelected,
  selectAllPage,

  setRegiao,
  setRegioes,

  setStatus,
  setStatusList,

  getPedidosError,
  getPedidosStart,
  getPedidosSuccess,

  setPage,
  setIpp,
  resetStore,

  setIsFirstPageLoad,

  exportRelatorioStart,
  exportRelatorioSuccess,
  exportRelatorioError,

  cancelarPedidosStart,
  cancelarPedidosSuccess,
  cancelarPedidosError,

  analiseCreditoStart,
  analiseCreditoSuccess,
  analiseCreditoError,

  openModalConfirmacao,
  closeModalConfirmacao,
  openModalAviso,
  closeModalAviso,
  openModalMisto,
  closeModalMisto,

  openModalAnaliseConfirmacao,
  closeModalAnaliseConfirmacao,
  openModalAnaliseAviso,
  closeModalAnaliseAviso,
  openModalAnaliseMisto,
  closeModalAnaliseMisto,

  setJustificativaCancelamento,
};
