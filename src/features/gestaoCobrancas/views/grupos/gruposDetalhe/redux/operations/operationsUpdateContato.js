import logger from 'utils/logger';
import _ from 'lodash';
import actions from '../actions/actions';
import service from '../service/serviceUpdateContato';
import operationsUtils from '../../../../contatos/contatosModal/redux/operations/operationsUtils';
import actionsContatosModal from '../../../../contatos/contatosModal/redux/actions/actions';
import serviceContatosModal from '../../../../contatos/contatosModal/redux/service';

const deleteContato = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateContatoStart());

    const { id } = getState().cobrancas.grupos.details.grupo;
    const idContato = getState().cobrancas.grupos.details.updateContato.data.id;
    await service.deleteContato(id, idContato);

    dispatch(actions.addSnackbar('Contato removido com sucesso', 'success'));
    dispatch(actions.deleteContato(idContato));
    dispatch(actions.updateContatoSuccess(null));
  } catch (e) {
    logger.error(e);
    dispatch(actions.addSnackbar('Erro ao remover o Contato', 'error'));
    dispatch(actions.updateContatoError([]));
  }
};

const sendContato = (setModalOpen) => async (dispatch, getState) => {
  try {
    dispatch(actionsContatosModal.sendContatoStart());

    const { contato } = getState().cobrancas.contatos.modal;

    let result;
    if (contato.id === null) result = await serviceContatosModal.sendContato(contato);
    else result = await serviceContatosModal.updateContato(contato);

    if (!result.success && !_.isEmpty(result.errors)) {
      dispatch(actions.addSnackbar(operationsUtils.getErrorMessage(contato), 'error'));
      dispatch(actionsContatosModal.sendContatoError(result.errors));
      return;
    }

    setModalOpen(false);
    dispatch(actions.addSnackbar(operationsUtils.getSuccessMessage(contato), 'success'));

    if (contato.id === null) dispatch(actions.addContatoToSelector({ ...contato, id: result.id }));
    else dispatch(actions.updateContato(contato));

    dispatch(actions.updateContato(contato));
    dispatch(actionsContatosModal.sendContatoSuccess());
  } catch (e) {
    logger.error(e);
    dispatch(actionsContatosModal.sendContatoError([]));
  }
};

const insertContatos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateContatoStart());

    const { id } = getState().cobrancas.grupos.details.grupo;
    const { associacoes } = getState().cobrancas.grupos.details.updateContato;
    await service.insertContatos(id, associacoes.map((a) => a.value));

    dispatch(actions.addSnackbar('Contatos associados com sucesso', 'success'));
    dispatch(actions.addContatosToList(associacoes));
    dispatch(actions.updateContatoSuccess(null));

    dispatch(actions.setAssociacarContatoOpen(false));
  } catch (e) {
    logger.error(e);
    dispatch(actions.addSnackbar('Erro ao associar as contatos', 'error'));
    dispatch(actions.updateContatoError([]));
  }
};

const getContatosAssociacao = () => async (dispatch) => {
  try {
    const contatos = await service.getContatosAssociacao();
    dispatch(actions.setContatosAssociacao(contatos));
  } catch (e) {
    dispatch(actions.setContatosAssociacao([]));
    logger.error(e);
    throw e;
  }
};

const setContatoId = (id) => (dispatch) => {
  dispatch(actions.setContatoId(id));
};

const openModalAssociarContato = () => (dispatch) => {
  dispatch(actions.setAssociacarContatoOpen(true));
};

const closeModalAssociacarContato = () => (dispatch) => {
  dispatch(actions.setAssociacarContatoOpen(false));
};

const associarContato = (contato) => (dispatch) => {
  dispatch(actions.associarContato(contato));
};

const desassociarContato = (id) => (dispatch) => {
  dispatch(actions.desassociarContato(id));
};

const updateContatoProperty = (paramName, value) => (dispatch) => {
  dispatch(actions.setContatosDados(paramName, value));
};

const setPapel = (papel) => (dispatch) => {
  dispatch(actions.setPapel(papel));
};

export default {
  deleteContato,
  setContatoId,
  associarContato,
  desassociarContato,
  openModalAssociarContato,
  closeModalAssociacarContato,
  insertContatos,
  getContatosAssociacao,
  updateContatoProperty,
  setPapel,
  sendContato,
};
