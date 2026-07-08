import { saveAs } from 'file-saver';
import logger from 'utils/logger';
import snackbarOperations from 'modules/snackbar/redux/operations';
import { SnackbarActions } from 'modules/snackbar';
import Mixpanel from 'modules/tracking/Mixpanel';
import service from './service';
import { convertExcelToJson } from '../utils/excelConverter';
import actions from './actions';
import { mensagemDeErroFormatada } from '../utils/formatarMensagemErro';

const getStatusList = () => async (dispatch) => {
  try {
    const options = await service.getStatusList();
    dispatch(actions.getStatusOptions(options));
  } catch (e) {
    logger.error(e);
  }
};

const getProdutosList = () => async (dispatch) => {
  try {
    const options = await service.getProdutosList();
    dispatch(actions.getProdutosOptions(options));
  } catch (e) {
    logger.error(e);
  }
};

const getOrdens = () => async (dispatch, getState) => {
  dispatch(actions.getOrdensStart());
  try {
    const { filters, pageParams, ordenacao } = getState().ordens;
    const { user } = getState().auth;
    const response = await service.getOrdens(filters, pageParams, ordenacao, user.email);
    const page = {
      ipp: response.ipp,
      page: response.page,
      totalItems: response.total,
    };
    dispatch(actions.getOrdensSuccess(page, response.ordens));
  } catch (e) {
    dispatch(actions.getOrdensError());
  }
};

const getRelatorioOrdens = () => async (dispatch, getState) => {
  dispatch(actions.getRelatorioOrdensStart());
  try {
    const { filters, pageParams } = getState().ordens;
    const { user } = getState().auth;
    const response = await service.getRelatorioOrdens(
      filters,
      pageParams,
      user.email,
    );
    const url = window.URL.createObjectURL(new Blob([response.fileContent]));
    saveAs(url, response.fileName);
    dispatch(actions.getRelatorioOrdensSuccess());
  } catch (e) {
    logger.error(e);
    dispatch(actions.getRelatorioOrdensError());
  }
};

const setOrdem = (ordem) => (dispatch) => {
  dispatch(actions.setOrdem(ordem));
};

const setOpenModalOrdem = (modalOrdemOpen, selectedOrdem) => (dispatch) => {
  if (modalOrdemOpen) dispatch(actions.setModalOrdemOpen(selectedOrdem));
  else dispatch(actions.setModalOrdemClose());
};

const setOpenModalVincularCondicao = (modalOpen, selectedOrdem) => (dispatch) => {
  if (modalOpen) dispatch(actions.setModalVincularCondicaoOpen(selectedOrdem));
  else dispatch(actions.setModalVincularCondicaoClose());
};

const setOpenModalVincularCondicaoAVista = (modalOpen, selectedOrdem) => (dispatch) => {
  if (modalOpen) dispatch(actions.setModalVincularCondicaoAVistaOpen(selectedOrdem));
  else dispatch(actions.setModalVincularCondicaoAVistaClose());
};

const setStatus = (status) => (dispatch) => {
  dispatch(actions.setStatus(status));
};

const setProduto = (produto) => (dispatch) => {
  dispatch(actions.setProduto(produto));
};

const setUsuario = (usuario) => (dispatch) => {
  dispatch(actions.setUsuario(usuario));
};

const applyFilters = () => (dispatch) => {
  dispatch(getOrdens());
};

const resetOrdensStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};
const clearFilters = () => (dispatch) => {
  dispatch(actions.clearFilters());
  dispatch(getOrdens());
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getOrdens());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getOrdens());
};

const setSortingOrder = (nomeColuna, sentidoOrdenacao) => async (dispatch) => {
  dispatch(actions.setSortingOrder(nomeColuna, sentidoOrdenacao));
  dispatch(getOrdens());
};

const cancelOrder = (ordemId, justificativa) => async (dispatch, getState) => {
  const {
    auth: { user },
    ordens: {
      ordensList: { ordens },
    },
  } = getState();

  const order = ordens.find((o) => o.id === ordemId);

  if (order.status !== 'Aguardando condições e análise do crédito') {
    dispatch(snackbarOperations.addSnackbar('Cancelamento permitido apenas para ordens em "Aguardando condições e análise de crédito".', 'error'));
    return;
  }
  dispatch(actions.cancelOrderStart(ordemId, justificativa));
  try {
    await service.cancelOrder(ordemId, justificativa, user.email);
    dispatch(actions.cancelOrderSuccess(ordemId));
    dispatch(snackbarOperations.addSnackbar('Ordem cancelada com sucesso!', 'success'));
  } catch (error) {
    dispatch(actions.cancelOrderError(error.message));
    dispatch(snackbarOperations.addSnackbar('Erro ao cancelar ordem.', 'error'));
  }
};

const downloadTemplate = () => async (dispatch) => {
  try {
    dispatch(actions.downloadTemplateStart());

    const response = await service.downloadTemplate();
    const url = window.URL.createObjectURL(new Blob([response.fileContent]));
    saveAs(url, response.fileName);

    dispatch(actions.downloadTemplateSuccess());
    Mixpanel.trackButtonClick('baixar_template', 'ordens');
  } catch (error) {
    logger.error(error);
    const errorMessage = 'Erro ao baixar template';
    dispatch(SnackbarActions.addSnackbar(errorMessage, 'error'));
    dispatch(actions.downloadTemplateError(error.message));
  }
};

const validarOrdem = (arquivo) => async (dispatch, getState) => {
  dispatch(actions.validarOrdemStart());
  try {
    const { user } = getState().auth;
    const excelList = await convertExcelToJson(arquivo.file);
    const resultado = await service.validarOrdem(user.email, excelList);
    dispatch(actions.validarOrdemSuccess(resultado));
    Mixpanel.trackOrdemValidacaoResultado(
      resultado.totalLinhasCorretas + resultado.totalLinhasComErro,
      resultado.totalLinhasCorretas,
      resultado.totalLinhasComErro,
    );
  } catch (e) {
    logger.error('Erro ao validar ordem:', e);
    dispatch(actions.validarOrdemError());
    dispatch(SnackbarActions.addSnackbar('Erro ao validar o arquivo. Tente novamente.', 'error'));
  }
};

const gerarRelatorioErros = (arquivo) => async (dispatch) => {
  dispatch(actions.gerarRelatorioErrosStart());
  try {
    const excelList = await convertExcelToJson(arquivo.file);
    const response = await service.gerarRelatorioErros(excelList);
    const url = window.URL.createObjectURL(new Blob([response.fileContent]));
    saveAs(url, response.fileName);
    dispatch(actions.gerarRelatorioErrosSuccess());
    Mixpanel.trackButtonClick('baixar_relatorio_erros', 'modal_nova_ordem');
  } catch (e) {
    logger.error('Erro ao gerar relatório de erros:', e);
    dispatch(actions.gerarRelatorioErrosError());
    dispatch(SnackbarActions.addSnackbar('Erro ao gerar relatório de erros.', 'error'));
  }
};

const getFeriadosList = () => async (dispatch) => {
  try {
    const options = await service.getFeriados();
    dispatch(actions.getFeriados(options));
  } catch (e) {
    logger.error(e);
  }
};

const createOrdem = (formData, onSuccess) => async (dispatch, getState) => {
  try {
    dispatch(actions.createNovaOrdemStart());
    const { user } = getState().auth;
    const { resultado } = getState().ordens.validacaoOrdem;
    const excelData = await convertExcelToJson(formData.arquivo.file);
    const ordemData = {
      numCartaMes: formData.numCartaMes,
      prazoReversao: formData.prazoReversao,
      produtoId: formData.produto,
      excelData,
      ordemValidacaoAprovada: resultado !== null && resultado.totalLinhasComErro === 0,
    };

    const response = await service.createOrdem(user.email, ordemData);

    if (response.status === 200) {
      dispatch(getOrdens());
      onSuccess();
      dispatch(actions.createNovaOrdemSuccess(response.data));
      dispatch(SnackbarActions.addSnackbar('Ordem criada com sucesso', 'success'));
      Mixpanel.trackOrdemCriada(
        !!ordemData.numCartaMes,
        resultado !== null && resultado.totalLinhasComErro > 0 && resultado.totalLinhasCorretas > 0,
        resultado?.totalLinhasCorretas || 0,
      );
    }
  } catch (error) {
    logger.error('Erro ao criar ordem:', error);

    let dispatchedErrorPayload = {
      message: 'Erro na criação da Ordem: Corrija os dados e envie um novo arquivo',
      details: null,
      status: null,
      parsedDetails: null,
    };

    if (error.name === 'ValidationError' && error.details) {
      const errosFormatados = mensagemDeErroFormatada({ errors: error.details });

      dispatchedErrorPayload = {
        message: 'Erro na criação da Ordem: Corrija os dados e envie um novo arquivo',
        details: error.details,
        status: error.status,
        parsedDetails: errosFormatados,
      };
    } else if (error.message === 'Formato do arquivo Excel inválido') {
      dispatchedErrorPayload = { message: error.message };
    }
    dispatch(actions.createNovaOrdemError(dispatchedErrorPayload));
  }
};

const editOrdem = (formData, onSuccess) => async (dispatch, getState) => {
  try {
    dispatch(actions.createNovaOrdemStart());
    const { user } = getState().auth;
    const selectedOrdemId = getState().ordens.modalOrdem.selectedOrdem.id;
    const ordemData = {
      numCartaMes: formData.numCartaMes,
      prazoReversao: formData.prazoReversao,
      ordemId: selectedOrdemId,
    };
    const response = await service.editOrdem(user.email, ordemData);

    if (response.status === 200) {
      dispatch(getOrdens());
      onSuccess();
      dispatch(actions.createNovaOrdemSuccess(response.data));
      dispatch(SnackbarActions.addSnackbar('Carta do mês inserida com sucesso', 'success'));
    }
  } catch (error) {
    logger.error('Erro ao inserir carta do mês:', error);

    const errorMessage = 'Erro ao inserir carta do mês';

    dispatch(SnackbarActions.addSnackbar(error?.message || errorMessage, 'error'));
    dispatch(actions.createNovaOrdemError(error?.message));
  }
};

const getVeiculosSemCondicaoComercial = (ordemId) => async (dispatch) => {
  try {
    dispatch(actions.getVeiculosSemCondicaoComercialStart());
    const response = await service.getVeiculosSemCondicaoComercial(ordemId);
    dispatch(actions.getVeiculosSemCondicaoComercialSuccess(response || []));
  } catch (error) {
    logger.error('Erro ao buscar veículos sem condições comerciais:', error);
    dispatch(actions.getVeiculosSemCondicaoComercialError(error.message));
  }
};

const getVeiculosSemCondicaoAVista = (ordemId) => async (dispatch) => {
  try {
    dispatch(actions.getVeiculosSemCondicaoAVistaStart());
    const response = await service.getVeiculosSemCondicaoAVista(ordemId);
    dispatch(actions.getVeiculosSemCondicaoAVistaSuccess(response || []));
  } catch (error) {
    logger.error('Erro ao buscar veículos sem condições à vista:', error);
    dispatch(actions.getVeiculosSemCondicaoAVistaError(error.message));
  }
};

const getCondicoesComerciais = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.types.GET_CONDICOES_COMERCIAIS_START });
    const selectedOrdemId = getState().ordens.modalVincularCondicao.selectedOrdem.id;
    const response = await service.getCondicoesComerciais(selectedOrdemId);
    dispatch({
      type: actions.types.GET_CONDICOES_COMERCIAIS_SUCCESS,
      payload: { condicoes: response },
    });
  } catch (error) {
    logger.error('Erro ao buscar condições comerciais:', error);
    dispatch({
      type: actions.types.GET_CONDICOES_COMERCIAIS_ERROR,
      payload: { error: error.message },
    });
    dispatch(snackbarOperations.addSnackbar(
      'Erro ao carregar condições comerciais',
      'error',
    ));
  }
};

const vincularCondicaoComercial = (
  ordemId,
  condicaoId,
  associar,
  fetchData,
) => async (dispatch) => {
  try {
    dispatch({ type: actions.types.VINCULAR_CONDICAO_START, payload: { condicaoId, associar } });
    await service.vincularCondicaoComercial(ordemId, condicaoId, associar);
    if (fetchData) {
      dispatch(getCondicoesComerciais());
    } else {
      dispatch({
        type: actions.types.VINCULAR_CONDICAO_SUCCESS,
        payload: { ordemId, condicaoId, associar },
      });
      dispatch(getVeiculosSemCondicaoComercial(ordemId));
    }
    const successMessage = associar ? 'Condição vinculada com sucesso' : 'Condição desvinculada com sucesso';
    dispatch(snackbarOperations.addSnackbar(successMessage, 'success'));
    dispatch(getOrdens());
  } catch (error) {
    const action = associar ? 'vincular' : 'desvincular';
    logger.error(`Erro ao ${action} condição comercial:`, error);
    dispatch({
      type: actions.types.VINCULAR_CONDICAO_ERROR,
      payload: { error: error.message, condicaoId, associar },
    });
    if (error?.message?.includes('422')) {
      dispatch(snackbarOperations.addSnackbar('Você não pode remover todas as condições da ordem. Pelo menos uma deve permanecer vinculada', 'error'));
    } else {
      const errorMessage = associar ? 'Erro ao vincular condição comercial' : 'Erro ao desvincular condição comercial';
      dispatch(snackbarOperations.addSnackbar(errorMessage, 'error'));
    }
  }
};

const getCondicoesAVista = (ordemId) => async (dispatch) => {
  try {
    dispatch({ type: actions.types.GET_CONDICOES_AVISTA_START });
    const response = await service.getCondicoesAVista(ordemId);
    dispatch({
      type: actions.types.GET_CONDICOES_AVISTA_SUCCESS,
      payload: { condicoes: response },
    });
  } catch (error) {
    logger.error('Erro ao buscar condições à vista:', error);
    dispatch({
      type: actions.types.GET_CONDICOES_AVISTA_ERROR,
      payload: { error: error.message },
    });
    dispatch(snackbarOperations.addSnackbar(
      'Erro ao carregar condições à vista',
      'error',
    ));
  }
};

const vincularCondicaoAVista = (
  ordemId,
  descontoId,
  associar,
  fetchData,
) => async (dispatch) => {
  try {
    dispatch(
      {
        type: actions.types.VINCULAR_CONDICAO_AVISTA_START,
        payload: { descontoId, associar },
      },
    );
    await service.vincularCondicaoAVista(ordemId, descontoId, associar);
    if (fetchData) {
      dispatch(getCondicoesAVista(ordemId));
    } else {
      dispatch({
        type: actions.types.VINCULAR_CONDICAO_AVISTA_SUCCESS,
        payload: { ordemId, descontoId, associar },
      });
      dispatch(getVeiculosSemCondicaoAVista(ordemId));
    }
    const successMessage = associar ? 'Condição à vista vinculada com sucesso' : 'Condição à vista desvinculada com sucesso';
    dispatch(snackbarOperations.addSnackbar(successMessage, 'success'));
    dispatch(getOrdens());
  } catch (error) {
    const action = associar ? 'vincular' : 'desvincular';
    logger.error(`Erro ao ${action} condição à vista:`, error);
    dispatch({
      type: actions.types.VINCULAR_CONDICAO_AVISTA_ERROR,
      payload: { error: error.message, descontoId, associar },
    });
    if (error?.message?.includes('422')) {
      dispatch(snackbarOperations.addSnackbar('Você não pode remover todas as condições da ordem. Pelo menos uma deve permanecer vinculada', 'error'));
    } else {
      const errorMessage = associar ? 'Erro ao vincular condição à vista' : 'Erro ao desvincular condição à vista';
      dispatch(snackbarOperations.addSnackbar(errorMessage, 'error'));
    }
  }
};

const toggleVeiculosSemCondicaoComercialVisibility = () => (dispatch) => {
  dispatch(actions.toggleVeiculosSemCondicaoComercialVisibility());
};

const toggleVeiculosSemCondicaoAVistaVisibility = () => (dispatch) => {
  dispatch(actions.toggleVeiculosSemCondicaoAVistaVisibility());
};

export default {
  getProdutosList,
  getStatusList,
  getOrdens,
  setOrdem,
  setStatus,
  setProduto,
  setUsuario,
  setOpenModalOrdem,
  setOpenModalVincularCondicao,
  setOpenModalVincularCondicaoAVista,
  applyFilters,
  resetOrdensStore,
  clearFilters,
  getRelatorioOrdens,
  setPage,
  setIpp,
  setSortingOrder,
  cancelOrder,
  downloadTemplate,
  getFeriadosList,
  createOrdem,
  editOrdem,
  getCondicoesComerciais,
  vincularCondicaoComercial,
  getCondicoesAVista,
  vincularCondicaoAVista,
  getVeiculosSemCondicaoComercial,
  toggleVeiculosSemCondicaoComercialVisibility,
  getVeiculosSemCondicaoAVista,
  toggleVeiculosSemCondicaoAVistaVisibility,
  validarOrdem,
  gerarRelatorioErros,
};
