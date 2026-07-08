import logger from 'utils/logger';
import _ from 'lodash';
import { formatDate } from 'utils/format';
import { saveAs } from 'file-saver';
import { SnackbarActions } from 'modules/snackbar';
import service from './service';
import actions from './actions';
import getInitialStatus from '../helpers/filterStatus';
import selectors from './selectors';

function mapStatus(arrayStatus) {
  return arrayStatus.map((s) => s.value);
}

function mapRegional(arrayRegional) {
  return arrayRegional.map((r) => r.value);
}

function mapProduto(arrayProduto) {
  return arrayProduto.map((p) => p.value);
}

function mapBrand(arrayBrand) {
  return arrayBrand.map((b) => b.value.toUpperCase());
}

function mapMatriz(arrayMatriz) {
  return arrayMatriz.map((m) => m.value);
}

const getFilters = () => async (dispatch, getState) => {
  try {
    const response = await service.getFilters();
    const { auth } = getState();
    const { filters } = getState().limitesAprovados;

    dispatch(actions.setStatusList(response.statusList));

    const permissions = selectors.permissionList(auth);
    const initialStatus = getInitialStatus(filters.status, permissions, response.statusList);
    dispatch(actions.setStatus(initialStatus));

    dispatch(actions.setRegionalList(response.regionaisList));
    dispatch(actions.setProdutoList(response.produtosList));
    dispatch(actions.setBrandList(response.brandsList));
    dispatch(actions.setMatrizList(response.matrizesList));
  } catch (e) {
    logger.error(e);
  }
};

const getLimitesAprovados = (tipoUsuario) => async (dispatch, getState) => {
  try {
    const { filters, pageParams } = getState().limitesAprovados;

    dispatch(actions.getLimitesAprovadosStart());

    const response = await service.getLimitesAprovados({
      pagina: pageParams.page,
      itensPorPagina: pageParams.ipp,
      idLimite: filters.idLimite ?? null,
      dataInicioAprovacao: filters.dataInicioAprovacao ? formatDate(filters.dataInicioAprovacao, 'YYYY-MM-DDTHH:mm:ss') : null,
      dataFimAprovacao: filters.dataFimAprovacao ? formatDate(filters.dataFimAprovacao, 'YYYY-MM-DDTHH:mm:ss') : null,
      dataInicioVencimento: filters.dataInicioVencimento ? formatDate(filters.dataInicioVencimento, 'YYYY-MM-DDTHH:mm:ss') : null,
      dataFimVencimento: filters.dataFimVencimento ? formatDate(filters.dataFimVencimento, 'YYYY-MM-DDTHH:mm:ss') : null,
      regional: !_.isEmpty(filters.regional) ? mapRegional(filters.regional) : [],
      codigoBuc: !_.isEmpty(filters.matriz) ? mapMatriz(filters.matriz) : [],
      status: !_.isEmpty(filters.status) ? mapStatus(filters.status) : [],
      produto: !_.isEmpty(filters.produto) ? mapProduto(filters.produto) : [],
      brand: !_.isEmpty(filters.brand) ? mapBrand(filters.brand) : [],
      nomeColuna: filters.nomeColuna,
      sentidoOrdenacao: filters.sentidoOrdenacao.toUpperCase(),
      tipoUsuario,
    });

    dispatch(actions.getLimitesAprovadosSuccess(response ?? []));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getLimitesAprovadosError());
  }
};

const getRelatorioAprovacoes = () => async (dispatch, getState) => {
  try {
    const { filters } = getState().limitesAprovados;
    const response = await service.getRelatorioAprovacoes({
      idLimite: filters.idLimite ?? null,
      dataInicioAprovacao: filters.dataInicioAprovacao ? formatDate(filters.dataInicioAprovacao, 'YYYY-MM-DDTHH:mm:ss') : null,
      dataFimAprovacao: filters.dataFimAprovacao ? formatDate(filters.dataFimAprovacao, 'YYYY-MM-DDTHH:mm:ss') : null,
      dataInicioVencimento: filters.dataInicioVencimento ? formatDate(filters.dataInicioVencimento, 'YYYY-MM-DDTHH:mm:ss') : null,
      dataFimVencimento: filters.dataFimVencimento ? formatDate(filters.dataFimVencimento, 'YYYY-MM-DDTHH:mm:ss') : null,
      regional: !_.isEmpty(filters.regional) ? mapRegional(filters.regional) : [],
      codigoBuc: !_.isEmpty(filters.matriz) ? mapMatriz(filters.matriz) : [],
      status: !_.isEmpty(filters.status) ? mapStatus(filters.status) : [],
      produto: !_.isEmpty(filters.produto) ? mapProduto(filters.produto) : [],
      brand: !_.isEmpty(filters.brand) ? mapBrand(filters.brand) : [],
    });

    const url = window.URL.createObjectURL(new Blob([response.fileContent]));
    saveAs(url, response.fileName);
  } catch (e) {
    logger.error(e);
  }
};

const getDetalheLimite = (idLimite, detalhesLimite) => async (dispatch) => {
  try {
    dispatch(actions.getDetalheLimiteStart());

    const historicoLimite = await service.getHistoricoLimite(idLimite);

    dispatch(actions.getDetalheLimiteSuccess(detalhesLimite, historicoLimite));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getDetalheLimiteError());
  }
};

const getLimitesAprovadosSisgar = (idLimite) => async (dispatch) => {
  try {
    dispatch(actions.getLimitesAprovadosSisgarStart());

    const LimiteSisgar = await service.getLimitesAprovadosSisgar(idLimite);

    dispatch(actions.getLimitesAprovadosSisgarSuccess(LimiteSisgar));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getLimitesAprovadosSisgarError());
  }
};

const setUpdateCondicao = (updateCondicao) => (dispatch) => {
  dispatch(actions.setUpdateCondicao(updateCondicao));
};

const setOpenPopperSave = (openPopperSave) => (dispatch) => {
  dispatch(actions.setOpenPopperSave(openPopperSave));
};

const setIsModified = (modified) => (dispatch) => {
  dispatch(actions.setIsModified(modified));
};

const updateLimiteCondicao = (idLimite) => async (dispatch, getState) => {
  const { condicao } = getState().limitesAprovados.limiteDetails;
  const novaCondicao = condicao[0].condicao;
  try {
    await service.updateCondicao({
      idLimite,
      condicao: novaCondicao,
    });
    dispatch(setUpdateCondicao(false));
    dispatch(getLimitesAprovados());
    return true;
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao enviar condição.', 'error'));
    return false;
  }
};

const updateCondicaoVersoes = (idLimite, idVersao) => async (dispatch, getState) => {
  const { condicao } = getState().limitesAprovados.limiteDetails;
  const condicaoVersao = condicao.find((item) => item.idVersao === idVersao)?.condicao;
  try {
    await service.updateCondicaoVersoes({
      idLimite,
      idVersao,
      condicao: condicaoVersao,
    });
    dispatch(SnackbarActions.addSnackbar('As condições foram alteradas.', 'success'));
    dispatch(setUpdateCondicao(false));
    dispatch(getLimitesAprovados());
    return true;
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao enviar condição.', 'error'));
    return false;
  }
};

const updateAndSaveStatus = (idLimite, status, motivo = null) => async (dispatch, getState) => {
  const { selectedIds } = getState().limitesAprovados;

  try {
    await service.updateAndSaveStatus({
      status,
      idLimiteList: idLimite ? [idLimite] : selectedIds,
      MotivoCancelamento: motivo,
    });
    dispatch(SnackbarActions.addSnackbar('Aprovação enviada com sucesso.', 'success'));
    dispatch(getLimitesAprovados());
    return true;
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao atualizar a aprovação.', 'error'));
    return false;
  }
};

const updateComJustificativa = (idLimite, status, motivo) => async (dispatch) => {
  try {
    await service.updateAndSaveJustificativa({
      status: status?.statusValue,
      idLimiteList: [idLimite],
      Observacao: {
        Observacao: motivo,
        Perfil: 'financiamento',
        EnviarDealer: false,
        IdLimitesAprovadosHub: idLimite,
        Anexos: [],
        Detalhes: `Ação "${status?.statusLabel}" realizada na aprovação sem aceite do dealer`,
        AnexoRemovido: false,
        NotificacaoSistema: true,
        Justificativa: 'Justificativa - Aprovação sem aceite do dealer',
      },
    });
    dispatch(SnackbarActions.addSnackbar('Aprovação enviada com sucesso.', 'success'));
    dispatch(getLimitesAprovados());
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao atualizar a aprovação.', 'error'));
  }
};

const updateAndSaveStatusCancelamento = (
  idLimite,
  status,
) => async (dispatch) => {
  try {
    await service.updateAndSaveStatus({
      status,
      idLimiteList: [idLimite],
    });
    dispatch(getLimitesAprovados());
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao alterar o status'));
  }
};

const salvarCancelamentoMotivo = (idLimite, documento, motivo) => async (dispatch) => {
  try {
    dispatch(actions.cancelamentoSisgarStart());

    const urlUpload = await service.postCancelamentoSisgar({
      nameFile: documento?.nome,
      type: documento?.file?.type,
      tamanhoEmBytes: documento?.file?.size,
      motivo,
      idLimite,
    });

    if (documento?.file && urlUpload) {
      await service.uploadDocumento(urlUpload, documento.file);
    }

    dispatch(actions.cancelamentoSisgarSuccess());
    dispatch(updateAndSaveStatusCancelamento(idLimite, 'aprovacao_cancelada'));
    dispatch(SnackbarActions.addSnackbar('Aprovação cancelada com sucesso', 'success'));
    return true;
  } catch (e) {
    logger.error(e);
    dispatch(SnackbarActions.addSnackbar('Erro ao enviar arquivo'));
    return false;
  }
};

const changeStatusSisgar = () => async (dispatch, getState) => {
  const { alterarStatusList } = getState().limitesAprovados.limiteDetails;
  try {
    dispatch(SnackbarActions.addSnackbar('Aprovação enviada com sucesso', 'success'));
    await service.changeStatusSisgar({ changeStatusSisgarDtos: alterarStatusList });
    dispatch(getLimitesAprovados());
  } catch (e) {
    logger.error(e);
  }
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const enviarProposta = (teste) => (dispatch) => {
  if (teste === true) {
    dispatch(actions.addSnackbar('Aprovação enviada com sucesso.', 'success'));
  } else {
    dispatch(actions.addSnackbar('Erro ao enviar aprovação.', 'error'));
  }
};

const recusarProposta = (teste) => (dispatch) => {
  if (teste === true) {
    dispatch(actions.addSnackbar('Aprovação recusada com sucesso.', 'success'));
  } else {
    dispatch(actions.addSnackbar('Erro ao recusar aprovação.', 'error'));
  }
};

const setPageParams = (propertyName, value, tipoUsuario, getList = true) => async (dispatch) => {
  dispatch(actions.setPageParams(propertyName, value));
  if (getList) dispatch(getLimitesAprovados(tipoUsuario));
};

const setCondicao = (idVersao, condicao) => (dispatch) => {
  dispatch(actions.setCondicao(idVersao, condicao));
};

const setIsFilterSelected = (isFilterSelected) => (dispatch) => {
  dispatch(actions.setIsFilterSelected(isFilterSelected));
};
const setMotivo = (motivo) => (dispatch) => {
  dispatch(actions.setMotivo(motivo));
};

const setStatus = (status) => (dispatch) => {
  dispatch(actions.setStatus(status));
};

const setRegional = (regional) => (dispatch) => {
  dispatch(actions.setRegional(regional));
};

const setProduto = (produto) => (dispatch) => {
  dispatch(actions.setProduto(produto));
};

const setBrand = (brand) => (dispatch) => {
  dispatch(actions.setBrand(brand));
};

const setMatriz = (matriz) => (dispatch) => {
  dispatch(actions.setMatriz(matriz));
};

const setIdLimite = (idLimite) => (dispatch) => {
  dispatch(actions.setIdLimite(idLimite));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setStartDate = (startDate) => (dispatch) => {
  dispatch(actions.setStartDate(startDate));
};

const setEndDate = (endDate) => (dispatch) => {
  dispatch(actions.setEndDate(endDate));
};

const setStartDateVenc = (startDateVenc) => (dispatch) => {
  dispatch(actions.setStartDateVenc(startDateVenc));
};

const setEndDateVenc = (endDateVenc) => (dispatch) => {
  dispatch(actions.setEndDateVenc(endDateVenc));
};

const clearFilters = () => (dispatch) => {
  dispatch(actions.clearFilters());
};

const setSelectedIds = (idLimite) => (dispatch) => {
  dispatch(actions.setSelectedIds(idLimite));
};

const setCadastroPage = (cadastroPage) => (dispatch) => {
  dispatch(actions.setCadastroPage(cadastroPage));
};
const setAlterarStatusList = (alterarStatusList) => (dispatch) => {
  dispatch(actions.setAlterarStatusList(alterarStatusList));
};
const closeAlertModal = () => async (dispatch) => {
  dispatch(actions.cancelamentoSisgarSuccess());
};

const setSortingOrder = (nomeColuna, sentidoOrdenacao, tipoUsuario = null) => async (dispatch) => {
  dispatch(actions.setSortingOrder(nomeColuna, sentidoOrdenacao));
  dispatch(getLimitesAprovados(tipoUsuario));
};

export default {
  getLimitesAprovados,
  getRelatorioAprovacoes,
  dismissSnackbar,
  enviarProposta,
  recusarProposta,
  addSnackbar,
  setPageParams,
  setCondicao,
  setUpdateCondicao,
  setMotivo,
  setStatus,
  setRegional,
  setProduto,
  setBrand,
  setMatriz,
  resetStore,
  getDetalheLimite,
  getLimitesAprovadosSisgar,
  getFilters,
  setIdLimite,
  setStartDate,
  setEndDate,
  setStartDateVenc,
  setEndDateVenc,
  clearFilters,
  setSelectedIds,
  changeStatusSisgar,
  setAlterarStatusList,
  setOpenPopperSave,
  setIsModified,
  setIsFilterSelected,
  setCadastroPage,
  salvarCancelamentoMotivo,
  updateAndSaveStatus,
  closeAlertModal,
  setSortingOrder,
  updateLimiteCondicao,
  updateCondicaoVersoes,
  updateComJustificativa,
};
