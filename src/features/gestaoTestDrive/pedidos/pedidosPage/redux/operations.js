/* eslint-disable no-tabs */
import logger from 'utils/logger';

import _ from 'lodash';
import { saveAs } from 'file-saver';
import { camelFormat } from 'utils/format';
import { getUserRegions, hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';
import snackbarOperations from 'modules/snackbar/redux/operations';
import service from './service';
import actions from './actions';
import { defaultModalidade } from '../../pedidosUtils';

function mapModalidade(arrayModalidade) {
  if (arrayModalidade.length === 4) {
    return [];
  }
  return arrayModalidade.map((m) => m.value);
}

function mapArray(array) {
  return array.map((item) => item.value);
}

function hasValue(key, v) {
  if (v === null || v === undefined) return false;
  if (Array.isArray(v)) {
    if (key === 'modalidade') return v.length > 0 && v.length < 4;
    return v.length > 0;
  }
  if (typeof v === 'string') return v.trim() !== '';
  return true;
}

function notEmptyFilters(state, currentValue, currentName) {
  if (hasValue(currentName, currentValue)) return true;

  const keys = [
    'regiao',
    'modalidade',
    'marca',
    'status',
    'produto',
    'veiculo',
    'concessionaria',
    'texto',
    'dataInicioPedido',
    'dataFimPedido',
    'dataFaturamento',
  ];

  return keys
    .filter((k) => k !== currentName)
    .some((k) => hasValue(k, state[k]));
}

function shouldMarkFilterAsSelected(state, currentValue, currentName, isFirstPageLoad) {
  if (isFirstPageLoad) return false;
  return notEmptyFilters(state, currentValue, currentName);
}

const shouldFilterRegioes = (user) => {
  const hasListarRegionalPermission = hasPermission(user, permissions.pedidos.listarRegional);
  const hasListarTodosPermission = hasPermission(user, permissions.pedidos.listarTodos);
  return hasListarRegionalPermission && !hasListarTodosPermission;
};

const getRegioesFiltradas = (user, responseRegioes) => {
  if (shouldFilterRegioes(user, permissions)) {
    const regioesPermitidas = getUserRegions(user).map((r) => r.id);
    return responseRegioes.filter((regiao) => regioesPermitidas.includes(regiao.codigo));
  }
  return responseRegioes;
};

const getPedidos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getPedidosStart());

    const { user } = getState().auth;
    const { filters, pedidosList } = getState().pedidos.page;
    let { produtos, brands } = filters;
    const allowedBrands = service.getMarca(user, filters)
      .filter((brand) => brand !== undefined && brand !== null)
      .map((brand) => brand.toLowerCase());

    const response = await service.getPedidos(user, {
      texto: filters.texto,
      dataInicioPedido: filters.dataInicioPedido,
      dataFimPedido: filters.dataFimPedido,
      dataFaturamento: filters.dataFaturamento,
      concessionaria: mapArray(filters.concessionaria),
      veiculo: mapArray(filters.veiculo),
      marca: mapArray(filters.marca),
      produto: mapArray(filters.produto),
      page: pedidosList.page,
      ipp: pedidosList.ipp,
      regiaoFiltro: filters.regiao && filters.regiao.length > 0 ? mapArray(filters.regiao) : null,
      status: mapArray(filters.status),
      modalidade: mapModalidade(filters.modalidade),
      isAscSort: filters.isAscSort,
    });

    if (_.isEmpty(brands)) {
      brands = response.brands.filter(
        (brand) => allowedBrands.includes(brand.toLowerCase()),
      );
    }

    if (_.isEmpty(produtos)) produtos = await service.getProdutos();

    const pageParams = {
      page: response.pagina,
      totalItems: response.itensTotal,
    };
    if (_.isEmpty(filters.regiao) && _.isEmpty(filters.produto)
      && filters.dataInicioPedido === null && filters.dataFimPedido === null
      && filters.texto === null && _.isEmpty(filters.status)
      && filters.dataFaturamento === null && _.isEmpty(mapModalidade(filters.modalidade))) {
      const regioesFiltradas = getRegioesFiltradas(user, response.regioes);
      dispatch(actions.setRegioes(regioesFiltradas));
      dispatch(actions.setRegioes(response.regioes));
      dispatch(actions.setStatusList(response.statusList));
      dispatch(actions.setModalidade(defaultModalidade, false));
      dispatch(actions.setRegiao(regioesFiltradas.map((item) => ({
        value: item.codigo,
        text: `${item.codigo} - ${camelFormat(item.name)}`,
      })), false));
      dispatch(actions.setStatus(response.statusList.map((item) => ({
        value: item.value,
        text: `${camelFormat(item.text)}`,
      })), false));
    }

    const brandsToDispatch = brands.length === 0 ? Object.values(response.brands) : brands;

    dispatch(actions.getPedidosSuccess(response.pedidos, pageParams, produtos, brandsToDispatch));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getPedidosError());
  }
};

const getStatusList = () => async (dispatch, getState) => {
  const { user } = getState().auth;

  const statusList = await service.getStatusList(user);

  dispatch(actions.setStatusList(statusList));
};

const setTexto = (texto) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, texto, 'texto', isFirstPageLoad);
  dispatch(actions.setTexto(texto, isFilterSelected));
};

const setRegiao = (regiao) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, regiao, 'regiao', isFirstPageLoad);
  dispatch(actions.setRegiao(regiao, isFilterSelected));
};

const setStatus = (status) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, status, 'status', isFirstPageLoad);
  dispatch(actions.setStatus(status, isFilterSelected));
};

const setDataInicioPedido = (dataInicioPedido) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, dataInicioPedido, 'dataInicioPedido', isFirstPageLoad);
  dispatch(actions.setDataInicioPedido(dataInicioPedido, isFilterSelected));
};

const setDataFimPedido = (dataFimPedido) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, dataFimPedido, 'dataFimPedido', isFirstPageLoad);
  dispatch(actions.setDataFimPedido(dataFimPedido, isFilterSelected));
};

const setDataFaturamento = (dataFaturamento) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, dataFaturamento, 'dataFaturamento', isFirstPageLoad);
  dispatch(actions.setDataFaturamento(dataFaturamento, isFilterSelected));
};

const setMarca = (marca) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, marca, 'marca', isFirstPageLoad);
  dispatch(actions.setMarca(marca, isFilterSelected));
};

const setProduto = (produto) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, produto, 'produto', isFirstPageLoad);
  dispatch(actions.setProduto(produto, isFilterSelected));
};

const setModalidade = (modalidade) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, modalidade, 'modalidade', isFirstPageLoad);
  dispatch(actions.setModalidade(modalidade, isFilterSelected));
};

const setVeiculo = (veiculo) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, veiculo, 'veiculo', isFirstPageLoad);
  dispatch(actions.setVeiculo(veiculo, isFilterSelected));
};

const setConcessionaria = (concessionaria) => (dispatch, getState) => {
  const { filters, isFirstPageLoad } = getState().pedidos.page;
  const isFilterSelected = shouldMarkFilterAsSelected(filters, concessionaria, 'concessionaria', isFirstPageLoad);
  dispatch(actions.setConcessionaria(concessionaria, isFilterSelected));
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.clearSelected());
  dispatch(actions.setPage(page));
  dispatch(getPedidos());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.clearSelected());
  dispatch(actions.setIpp(ipp));
};

const setSorting = (isAscSort) => (dispatch) => {
  dispatch(actions.setSorting(isAscSort));
  dispatch(setPage(0));
};

const clearFilters = () => (dispatch) => {
  dispatch(actions.clearFilters());
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setPedidoVisualizado = (idPedido) => (dispatch) => {
  dispatch(actions.setPedidoVisualizado(idPedido));
};

const setIsFirstPageLoad = (value) => (dispatch) => {
  dispatch(actions.setIsFirstPageLoad(value));
};

const selectPedido = (pedido) => (dispatch) => {
  dispatch(actions.selectPedido(pedido));
};

const unselectPedido = (pedidoId) => (dispatch) => {
  dispatch(actions.unselectPedido(pedidoId));
};

const togglePedidoSelection = (pedido, isSelected) => (dispatch) => {
  if (isSelected) {
    dispatch(actions.unselectPedido(pedido.id));
  } else {
    dispatch(actions.selectPedido(pedido));
  }
};

const clearSelectedPedidos = () => (dispatch) => {
  dispatch(actions.clearSelected());
};

const selectAllCurrentPage = () => (dispatch, getState) => {
  const { pedidosList } = getState().pedidos.page;
  const currentPagePedidos = pedidosList?.pedidos || [];
  dispatch(actions.selectAllPage(currentPagePedidos));
};

const unselectAllCurrentPage = () => (dispatch, getState) => {
  const { pedidosList, selectedPedidos } = getState().pedidos.page;
  const currentPagePedidos = pedidosList?.pedidos || [];
  const currentPageIds = currentPagePedidos.map((p) => p.id);

  const remainingSelected = selectedPedidos.filter((p) => !currentPageIds.includes(p.id));

  dispatch(actions.clearSelected());
  if (remainingSelected.length > 0) {
    remainingSelected.forEach((pedido) => {
      dispatch(actions.selectPedido(pedido));
    });
  }
};

const toggleSelectAllCurrentPage = (shouldSelectAll) => (dispatch) => {
  if (shouldSelectAll) {
    dispatch(selectAllCurrentPage());
  } else {
    dispatch(unselectAllCurrentPage());
  }
};

const exportarRelatorio = () => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    const { filters } = getState().pedidos.page;

    dispatch(actions.exportRelatorioStart());

    const body = {
      tipo: service.getListType(user),
      texto: filters.texto,
      dataInicioPedido: filters.dataInicioPedido,
      dataFimPedido: filters.dataFimPedido,
      dataFaturamento: filters.dataFaturamento,
      produtos: mapArray(filters.produto),
      regions: service.getRegions(
        user,
        filters.regiao && filters.regiao.length > 0 ? mapArray(filters.regiao) : null,
      ),
      brands: mapArray(filters.marca),
      statusList: mapArray(filters.status),
      modalidades: mapModalidade(filters.modalidade),
      concessionarias: mapArray(filters.concessionaria),
      veiculos: mapArray(filters.veiculo),
    };

    const xlsxResponse = await service.exportarRelatorio(body);

    const url = window.URL.createObjectURL(new Blob([xlsxResponse]));
    saveAs(url, 'pedidos_test_drive.xlsx');
    dispatch(actions.exportRelatorioSuccess());
  } catch (error) {
    logger.error('Erro ao exportar relatório:', error);
    dispatch(actions.exportRelatorioError());
  }
};

const cancelarPedidos = (pedidosId) => async (dispatch, getState) => {
  try {
    if (!pedidosId || !Array.isArray(pedidosId) || pedidosId.length === 0) {
      throw new Error('Lista de pedidos é obrigatória');
    }

    const state = getState();
    const { justificativa } = state.pedidos.page.cancelarPedidos;

    if (!justificativa || justificativa.trim() === '') {
      throw new Error('Justificativa é obrigatória');
    }

    dispatch(actions.cancelarPedidosStart());

    await service.cancelarPedidos(pedidosId, justificativa.trim());

    dispatch(actions.cancelarPedidosSuccess());

    dispatch(snackbarOperations.addSnackbar('Pedidos cancelados com sucesso', 'success'));

    dispatch(getPedidos());

    logger.info('Pedidos cancelados com sucesso', { pedidosId, justificativa });
  } catch (error) {
    logger.error('Erro ao cancelar pedidos:', error);
    dispatch(actions.cancelarPedidosError(error.message || 'Erro ao cancelar pedidos'));
    dispatch(snackbarOperations.addSnackbar('Erro ao cancelar pedidos', 'error'));
  }
};

const processarAnaliseCreditoPedidos = (pedidosId, aprovacao) => async (dispatch) => {
  try {
    dispatch(actions.analiseCreditoStart());

    await service.processarAnaliseCreditoPedidos(pedidosId, aprovacao);

    dispatch(actions.analiseCreditoSuccess());

    const acao = aprovacao ? 'aprovados' : 'reprovados';
    dispatch(snackbarOperations.addSnackbar(`Pedidos ${acao} com sucesso!`, 'success'));

    dispatch(getPedidos());

    logger.info(`Pedidos ${acao} com sucesso`, { pedidosId, aprovacao });
  } catch (error) {
    const acao = aprovacao ? 'aprovar' : 'reprovar';
    logger.error(`Erro ao ${acao} pedidos:`, error);
    dispatch(actions.analiseCreditoError(error.message || `Erro ao ${acao} pedidos`));
    dispatch(snackbarOperations.addSnackbar(`Erro ao ${acao} pedidos`, 'error'));
  }
};

const setDateInvalid = (isDateInvalid) => (dispatch) => {
  dispatch(actions.setDateInvalid(isDateInvalid));
};

export default {
  getPedidos,
  setTexto,
  setDataInicioPedido,
  setDataFimPedido,
  setDataFaturamento,
  setMarca,
  setProduto,
  setPage,
  setRegiao,
  setIpp,
  setModalidade,
  setSorting,
  clearFilters,
  resetStore,
  setPedidoVisualizado,
  setStatus,
  getStatusList,
  setIsFirstPageLoad,
  setVeiculo,
  setConcessionaria,
  selectPedido,
  unselectPedido,
  togglePedidoSelection,
  clearSelectedPedidos,
  selectAllCurrentPage,
  unselectAllCurrentPage,
  toggleSelectAllCurrentPage,
  exportarRelatorio,
  cancelarPedidos,
  processarAnaliseCreditoPedidos,
  setDateInvalid,
};
