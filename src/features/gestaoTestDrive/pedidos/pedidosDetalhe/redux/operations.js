import _ from 'lodash';

import logger from 'utils/logger';

import { Mixpanel, trackedProperties } from 'modules';
import actions from './actions';
import service from './service';
import { normalizarErrosMontadora } from '../views/dadosMontadora/validationErrorsHelper';

import pedidosPageOperations from '../../pedidosPage/redux/operations';
import pedidoStatus from '../../status';

const fetchCodigoEmpresaRegional = () => async (dispatch) => {
  try {
    dispatch(actions.getCodigoEmpresaRegionalStart());
    const options = await service.getCodigoEmpresaRegional();
    dispatch(actions.getCodigoEmpresaRegionalSuccess(options));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getCodigoEmpresaRegionalError());
  }
};

const openModal = (id) => async (dispatch, getState) => {
  try {
    dispatch(actions.setOpen(true));
    dispatch(actions.getDetalhePedidoStart());
    const detalhePedido = await service.getDetalhePedido(id);
    dispatch(actions.getDetalhePedidoSuccess(detalhePedido));
    const status = getState().pedidos.details.modal.detalhePedido?.status;
    dispatch(actions.getRegressaoStatusStart());
    const statusRegressaoList = await service.regressaoStatus(status);
    dispatch(actions.getRegressaoStatusSuccess(statusRegressaoList));
    dispatch(fetchCodigoEmpresaRegional());
    await service.setPedidoVisualizado(id);
    dispatch(pedidosPageOperations.setPedidoVisualizado(id));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getDetalhePedidoError());
  }
};

const openModalAlterar = (open) => async (dispatch) => {
  try {
    dispatch(actions.setOpenModalAlterar(open));
    dispatch(actions.setEtapaDesejada({}));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getRegressaoStatusError());
    dispatch(actions.setOpenModalAlterar(open));
  }
};

const setEtapaDesejada = (etapa) => async (dispatch) => {
  dispatch(actions.setEtapaDesejada(etapa));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const triggerFileDownload = (downloadUrl) => {
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.rel = 'noopener noreferrer';
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setOpen(false));
};

const updateDetalheProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateDetalheProperty(propertyName, value));
};

const updateCondicaoSelecionada = (condicao) => (dispatch) => {
  dispatch(actions.updateCondicaoSelecionada(condicao));
};

const updateCondicaoProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateCondicaoProperty(propertyName, value));
};

const doUpdateStatusPedido = async (dispatch, pedidoId, updateStatusDto) => {
  try {
    dispatch(actions.updateStatusPedidoStart());
    const result = await service.updateStatusPedido(pedidoId, updateStatusDto);
    if (!result.success && _.isArray(result.errors)) {
      dispatch(actions.updateStatusPedidoError(result.errors));
      Mixpanel.trackSubmit(trackedProperties.updatePedido, true, result.errors);
      return false;
    }

    Mixpanel.trackSubmit(trackedProperties.updatePedido, false);
    dispatch(actions.updateStatusPedidoSuccess());
    return true;
  } catch (e) {
    Mixpanel.trackSubmit(trackedProperties.updatePedido, true);
    dispatch(actions.updateStatusPedidoError([]));
    logger.error(e);
    throw e;
  }
};

const shouldSendDadosMontadora = (currentStatus) => (
  currentStatus === pedidoStatus.pendenteMontadora
);

const createDadosMontadoraDto = (detalhePedido) => ({
  PedidoId: detalhePedido?.pedidoId,
  EmpresaOrigemFaturamento: detalhePedido?.empresaOrigemFaturamento || '',
  CodigoConcessionariaEntrega: _.toInteger(detalhePedido?.codigoConcessionariaEntrega),
  CodigoConcessionariaComissao: _.toInteger(detalhePedido?.codigoConcessionariaComissao),
  CodigoRegional: _.toInteger(detalhePedido?.codigoRegional),
  CorExterna: detalhePedido?.corExterna || '',
  Revestimento: detalhePedido?.revestimento || '',
  GrupoOpcionais: detalhePedido?.grupoOpcionais || '',
  Opcionais: detalhePedido?.opcionais || [],
});

const sendDadosMontadora = () => async (dispatch, getState) => {
  try {
    dispatch(actions.sendDadosMontadoraStart());

    const { user } = getState().auth;
    const { detalhePedido } = getState().pedidos.details.modal;
    const { pedidoId } = detalhePedido || {};
    const dadosMontadoraDto = createDadosMontadoraDto(detalhePedido);
    dispatch(actions.updateStatusPedidoStart());

    const result = await service.sendDadosMontadora(pedidoId, dadosMontadoraDto, user?.email);
    const parsedErrors = normalizarErrosMontadora(result?.errors);

    if (parsedErrors.length > 0) {
      dispatch(actions.sendDadosMontadoraError());
      dispatch(actions.updateStatusPedidoError(parsedErrors));
      return;
    }

    dispatch(actions.updateStatusPedidoSuccess());
    dispatch(actions.sendDadosMontadoraSuccess());
    dispatch(actions.setOpen(false));

    dispatch(pedidosPageOperations.getPedidos());
    dispatch(actions.addSnackbar('Alteração salva com sucesso', 'success'));
  } catch (e) {
    logger.error(e);
    dispatch(actions.sendDadosMontadoraError());
    dispatch(actions.addSnackbar('Erro ao salvar alteração', 'error'));
  }
};

const sendDetalhePedido = () => async (dispatch, getState) => {
  const currentStatus = getState().pedidos.details.modal.detalhePedido?.status;
  if (shouldSendDadosMontadora(currentStatus)) {
    await dispatch(sendDadosMontadora());
    return;
  }

  try {
    dispatch(actions.sendDetalhePedidoStart());
    dispatch(actions.setCreditoAprovado(false));

    const { detalhePedido, creditoAprovado } = getState().pedidos.details.modal;
    const {
      pedidoId, status, isAVista, marca, ordemId,
    } = detalhePedido;

    await service.sendDetalhePedido(detalhePedido);

    const statusUpdateSuccess = await doUpdateStatusPedido(dispatch, pedidoId, {
      currentStatus: status,
      creditoAprovado,
      isAVista,
    });

    if (!statusUpdateSuccess) throw new Error('Erro ao atualizar status!');

    dispatch(actions.sendDetalhePedidoSuccess());
    dispatch(actions.setOpen(false));

    dispatch(pedidosPageOperations.getPedidos());

    const isPeugeotOrCitroen = ['PEUGEOT', 'CITROEN'].includes(marca?.toUpperCase()) || detalhePedido?.fluxoAntigo;
    const hasOrdem = !!ordemId;

    const successMessage = status === 'financiamento_reversao' && !isPeugeotOrCitroen && !hasOrdem
      ? 'Pedido enviado com sucesso. Aguardando dados da montadora'
      : 'Alteração salva com sucesso';

    dispatch(actions.addSnackbar(successMessage, 'success'));
  } catch (e) {
    logger.error(e);
    dispatch(actions.sendDetalhePedidoError());
  }
};

const cancelPedido = (motivo) => async (dispatch, getState) => {
  try {
    dispatch(actions.cancelPedidoStart());
    dispatch(actions.setCreditoAprovado(null));

    const { pedidoId, status, isAVista } = getState().pedidos.details.modal.detalhePedido;
    await service.cancelPedido(pedidoId, status, isAVista, motivo);

    dispatch(actions.cancelPedidoSuccess());
    dispatch(actions.setOpen(false));

    dispatch(pedidosPageOperations.getPedidos());
  } catch (e) {
    logger.error(e);
    dispatch(actions.cancelPedidoError());
  }
};

const aprovarAnaliseComercial = (aprovado) => async (dispatch, getState) => {
  try {
    const { detalhePedido } = getState().pedidos.details.modal;
    const { pedidoId, status, isAVista } = detalhePedido;

    const updateStatusDto = {
      currentStatus: status,
      AnaliseComercialAprovada: aprovado,
      isAVista,
    };
    const statusUpdateSuccess = await doUpdateStatusPedido(dispatch, pedidoId, updateStatusDto);

    if (!statusUpdateSuccess) throw new Error('Erro ao atualizar excecao!');

    dispatch(actions.setOpen(false));
    dispatch(pedidosPageOperations.getPedidos());
  } catch (e) {
    logger.error(e);
  }
};

const aprovarCredito = (aprovado) => async (dispatch, getState) => {
  try {
    const { detalhePedido } = getState().pedidos.details.modal;
    const { pedidoId, status, isAVista } = detalhePedido;

    const updateStatusDto = {
      currentStatus: status,
      creditoAprovado: aprovado,
      isAVista,
    };
    const statusUpdateSuccess = await doUpdateStatusPedido(dispatch, pedidoId, updateStatusDto);

    if (!statusUpdateSuccess) throw new Error('Erro ao atualizar status!');

    dispatch(actions.setOpen(false));
    dispatch(pedidosPageOperations.getPedidos());
  } catch (e) {
    logger.error(e);
  }
};

const uploadFaturaPedido = (file) => async (dispatch, getState) => {
  try {
    const size = parseInt((file.size / 1024), 10);
    dispatch(actions.uploadFaturaPedidoStart(size, file.name));

    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;

    const urlUpload = await service.getUrlUploadFaturaPedido(pedidoId, file);
    await service.uploadFaturaPedido(urlUpload, file);
    dispatch(actions.uploadFaturaPedidoSuccess(urlUpload.split('?', 2)[0]));
  } catch (e) {
    try {
      const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
      await service.deleteFaturaPedido(pedidoId);
    } catch (cleanupError) {
      logger.error(cleanupError);
    }

    logger.error(e);
    dispatch(actions.uploadFaturaPedidoError());
  }
};

const deleteFaturaPedido = () => async (dispatch, getState) => {
  try {
    dispatch(actions.deleteFaturaPedidoStart());

    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    await service.deleteFaturaPedido(pedidoId);

    const detalhePedido = await service.getDetalhePedido(pedidoId);
    dispatch(actions.getDetalhePedidoSuccess(detalhePedido));

    dispatch(actions.deleteFaturaPedidoSuccess());
  } catch (e) {
    logger.error(e);
    dispatch(actions.deleteFaturaPedidoError());
  }
};

const getDownloadFaturaPedido = () => async (dispatch, getState) => {
  try {
    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    const urlDownload = await service.getUrlDownloadFaturaPedido(pedidoId);

    triggerFileDownload(urlDownload);
  } catch (e) {
    dispatch(actions.addSnackbar('Nao foi possivel gerar o link da nota fiscal.', 'error'));
    logger.error(e);
  }
};

const updateMessage = (value) => (dispatch) => {
  dispatch(actions.updateMessage(value));
};

const sendComentario = (mensagem) => async (dispatch, getState) => {
  try {
    dispatch(actions.sendComentarioStart());

    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    await service.sendComentario(pedidoId, mensagem);

    dispatch(actions.sendComentarioSuccess(mensagem));
  } catch {
    dispatch(actions.sendComentarioError());
  }
};

const updateMotivo = (value) => (dispatch) => {
  dispatch(actions.updateMotivo(value));
};

const setOpenCancelPedidoModal = (value) => (dispatch) => {
  dispatch(actions.setCancelPedidoModal(value));
};

const uploadContrato = (file) => async (dispatch, getState) => {
  try {
    dispatch(actions.uploadContratoStart());

    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    await service.deleteContrato(pedidoId);

    const urlUpload = await service.getUrlUploadContrato(pedidoId, file.type);
    await service.uploadContrato(urlUpload, file);
    dispatch(actions.uploadContratoSuccess(urlUpload.split('?', 2)[0]));
  } catch (e) {
    try {
      const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
      await service.deleteContrato(pedidoId);
    } catch (cleanupError) {
      logger.error(cleanupError);
    }

    logger.error(e);
    dispatch(actions.uploadContratoError());
  }
};

const getDownloadContrato = () => async (dispatch, getState) => {
  try {
    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    const urlDownload = await service.getUrlDownloadContrato(pedidoId);

    triggerFileDownload(urlDownload);
  } catch (e) {
    dispatch(actions.addSnackbar('Nao foi possivel gerar o link do contrato.', 'error'));
    logger.error(e);
  }
};

const alterarEtapa = (etapa) => async (dispatch, getState) => {
  try {
    const pedidoId = getState().pedidos.details.modal.detalhePedido?.pedidoId;
    await service.resetStatusPedido(pedidoId, etapa.value);
    dispatch(actions.addSnackbar('Status alterado com sucesso', 'success'));
    dispatch(actions.setOpen(false));
    dispatch(pedidosPageOperations.getPedidos());
  } catch (e) {
    dispatch(actions.addSnackbar('Erro ao alterar o status', 'error'));
  }
};

const saveDetalhesVeiculo = () => async (dispatch, getState) => {
  const atualizarDetalhePedido = async (pedidoId) => {
    try {
      const detalhePedido = await service.getDetalhePedido(pedidoId);
      dispatch(actions.getDetalhePedidoSuccess(detalhePedido));
    } catch (fetchError) {
      logger.error('Erro ao atualizar detalhes do pedido:', fetchError);
    }
  };

  try {
    dispatch(actions.updateDetalhesVeiculoStart());

    const { detalhePedido } = getState().pedidos.details.modal;
    const { pedidoId } = detalhePedido;

    const detalhesVeiculoDto = {
      corExterna: detalhePedido.corExterna,
      revestimento: detalhePedido.revestimento,
      grupoOpcionais: detalhePedido.grupoOpcionais,
      opcionais: detalhePedido.opcionais || [],
    };

    await service.updateDetalhesVeiculo(pedidoId, detalhesVeiculoDto);

    dispatch(actions.updateDetalhesVeiculoSuccess());
    dispatch(actions.addSnackbar('Dados do veículo salvos com sucesso', 'success'));
    await atualizarDetalhePedido(pedidoId);
  } catch (e) {
    logger.error('Erro ao salvar detalhes do veículo:', e);
    dispatch(actions.updateDetalhesVeiculoError());
    dispatch(actions.addSnackbar('Erro ao salvar dados do veículo', 'error'));
  }
};

const enviarIntegracao = () => async (dispatch, getState) => {
  const atualizarDetalhePedido = async (pedidoId) => {
    try {
      const detalhePedido = await service.getDetalhePedido(pedidoId);
      dispatch(actions.getDetalhePedidoSuccess(detalhePedido));
    } catch (fetchError) {
      logger.error('Erro ao atualizar detalhes do pedido:', fetchError);
    }
  };

  try {
    const { user } = getState().auth;
    dispatch(actions.IntegracaoB2BStart());

    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    await service.IntegracaoB2B(user.email, pedidoId);

    dispatch(actions.IntegracaoB2BSuccess());
    dispatch(actions.addSnackbar('Pedido enviado para integração com sucesso', 'success'));
    await atualizarDetalhePedido(pedidoId);
  } catch (e) {
    logger.error(e);
    dispatch(actions.IntegracaoB2BError());

    if (e.status === 409) {
      dispatch(actions.addSnackbar('Falha no envio da integração. Tente novamente.', 'error'));
    } else {
      dispatch(actions.addSnackbar('Falha no envio da integração. Verifique os detalhes no histórico.', 'error'));
    }

    const { pedidoId } = getState().pedidos.details.modal.detalhePedido;
    await atualizarDetalhePedido(pedidoId);
  }
};

const setTaglistError = (hasError) => (dispatch) => {
  dispatch(actions.setTaglistError(hasError));
};

export default {
  openModal,
  openModalAlterar,
  closeModal,
  setOpenCancelPedidoModal,

  updateCondicaoSelecionada,
  updateCondicaoProperty,

  updateDetalheProperty,
  sendDadosMontadora,
  sendDetalhePedido,
  cancelPedido,

  aprovarAnaliseComercial,
  aprovarCredito,

  uploadFaturaPedido,
  uploadContrato,
  getDownloadContrato,

  saveDetalhesVeiculo,

  updateMessage,
  sendComentario,
  updateMotivo,

  deleteFaturaPedido,
  getDownloadFaturaPedido,

  dismissSnackbar,
  addSnackbar,
  alterarEtapa,
  setEtapaDesejada,
  fetchCodigoEmpresaRegional,
  enviarIntegracao,

  setTaglistError,
};
