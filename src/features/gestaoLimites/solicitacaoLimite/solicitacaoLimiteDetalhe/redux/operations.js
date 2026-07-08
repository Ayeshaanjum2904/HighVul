import logger from 'utils/logger';
import _ from 'lodash';
import actions from './actions';
import service from './service';
import { requestActions } from '../requestActions';
import statusEnum from '../status';

import solicitacaoPageOperations from '../../solicitacaoLimitePage/redux/operations';

const openModal = (id) => async (dispatch) => {
  try {
    dispatch(actions.setOpen(true));
    dispatch(actions.getDetalheSolicitacaoStart());

    const detalheSolicitacao = await service.getDetalheSolicitacao(id);
    dispatch(actions.getDetalheSolicitacaoSuccess(detalheSolicitacao));

    await service.setSolicitacaoVisualizada(id);
    dispatch(solicitacaoPageOperations.setSolicitacaoVisualizada(id));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getDetalheSolicitacaoError());
  }
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setOpen(false));
  dispatch(actions.resetStore());
};

const updateStatus = async (dispatch, solicitacaoId, action, updateStatusDto) => {
  try {
    dispatch(actions.updateStatusStart(action));

    const result = await service.updateStatus(solicitacaoId, updateStatusDto);

    if (!result.success && _.isArray(result.errors)) {
      dispatch(actions.updateStatusError(result.errors));
      return false;
    }

    dispatch(actions.updateStatusSuccess());
    dispatch(actions.setOpen(false));
    dispatch(solicitacaoPageOperations.getSolicitacoes());
    return true;
  } catch (e) {
    logger.error(e);
    dispatch(actions.updateStatusError([]));
    throw e;
  }
};

const aprovarStatus = (action) => async (dispatch, getState) => {
  const {
    motivo, novoValor, isAlteracaoValor, detalheSolicitacao,
  } = getState().limites.details.modal;

  const { status, valor, solicitacaoId } = detalheSolicitacao;

  const motivoAtual = detalheSolicitacao.motivo;

  await updateStatus(dispatch, solicitacaoId, action, {
    currentStatus: status,
    action:
    (status === statusEnum.altAguardandoAnalise || status === statusEnum.transfAguardandoAnalise)
      ? requestActions.aprovarCredito : null,
    payload: [{
      valorAprovado: isAlteracaoValor ? novoValor : valor,
      motivo: isAlteracaoValor ? motivo : motivoAtual,
    }],
  });
};

const reprovar = (action) => async (dispatch, getState) => {
  const { status, solicitacaoId } = getState().limites.details.modal.detalheSolicitacao;

  await updateStatus(dispatch, solicitacaoId, action, {
    currentStatus: status,
    action:
    (status === statusEnum.altAguardandoAnalise || status === statusEnum.transfAguardandoAnalise)
      ? requestActions.reprovarCredito : null,
  });
};

const sendComentario = (mensagem) => async (dispatch, getState) => {
  try {
    dispatch(actions.sendComentarioStart());

    const { solicitacaoId } = getState().limites.details.modal.detalheSolicitacao;
    await service.sendComentario(solicitacaoId, mensagem);
    dispatch(actions.sendComentarioSuccess(mensagem));
  } catch {
    dispatch(actions.sendComentarioError());
  }
};

const updateMessage = (value) => (dispatch) => {
  dispatch(actions.updateMessage(value));
};

const setAlteracaoValor = () => (dispatch, getState) => {
  const { isAlteracaoValor } = getState().limites.details.modal;
  dispatch(actions.setAlteracaoValor(!isAlteracaoValor));
};

const updateMotivo = (motivo) => (dispatch) => {
  dispatch(actions.updateMotivo(motivo));
};

const updateNovoValor = (value) => (dispatch) => {
  dispatch(actions.updateNovoValor(value));
};

export default {
  aprovarStatus,
  reprovar,
  openModal,
  closeModal,
  sendComentario,
  updateMessage,
  setAlteracaoValor,
  updateMotivo,
  updateNovoValor,
};
