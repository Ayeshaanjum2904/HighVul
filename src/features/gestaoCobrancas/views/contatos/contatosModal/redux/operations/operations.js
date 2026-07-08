import logger from 'utils/logger';
import _ from 'lodash';
import actions from '../actions/actions';
import service from '../service';

import ContatosPageOperations from '../../../contatosPage/redux/operations';

import operationsEmail from './operationsValidate';
import operationsUtils from './operationsUtils';

const sendContato = (setModalOpen) => async (dispatch, getState) => {
  try {
    dispatch(actions.sendContatoStart());

    const { contato } = getState().cobrancas.contatos.modal;

    let result;
    if (contato.id === null) result = await service.sendContato(contato);
    else result = await service.updateContato(contato);

    if (!result.success && !_.isEmpty(result.errors)) {
      const message = operationsUtils.getErrorMessage(contato, result.errors);
      dispatch(ContatosPageOperations.addSnackbar(message, 'error'));
      dispatch(actions.sendContatoError(result.errors));
      return;
    }

    setModalOpen(false);
    dispatch(ContatosPageOperations.resetStore());
    dispatch(ContatosPageOperations.addSnackbar(operationsUtils.getSuccessMessage(contato), 'success'));
    dispatch(actions.sendContatoSuccess());
    dispatch(ContatosPageOperations.getContatos());
  } catch (e) {
    logger.error(e);
    dispatch(actions.sendContatoError([]));
  }
};

const closeModal = () => async (dispatch) => {
  dispatch(actions.setModal(false));
};

const updateContatoProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateContatoProperty(propertyName, value));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const getPapeis = () => async (dispatch, getState) => {
  try {
    let { papeis } = getState().cobrancas.contatos.modal;
    if (_.isEmpty(papeis)) papeis = await service.getPapeis();

    dispatch(actions.setPapeis(papeis));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setPapeis([]));
  }
};

const setPapel = (papel) => (dispatch) => {
  dispatch(actions.setPapel(papel));
};

const setContato = (contato) => async (dispatch) => {
  dispatch(getPapeis());
  dispatch(actions.setContato(contato));
};

const openModal = (contato) => async (dispatch) => {
  dispatch(actions.setModal(true));
  dispatch(setContato(contato));
};

const removeError = (name, index) => async (dispatch) => {
  dispatch(actions.removeError(name, index));
};

export default {
  sendContato,
  resetStore,
  closeModal,
  openModal,
  updateContatoProperty,
  setPapel,
  getPapeis,
  setContato,
  removeError,

  ...operationsEmail,
};
