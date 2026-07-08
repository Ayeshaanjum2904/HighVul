import logger from 'utils/logger';
import actions from './actions';
import service from './service';
import operationsPage from '../../emailsPage/redux/operations';

const openModal = (template) => async (dispatch) => {
  dispatch(actions.setModal(true));
  dispatch(actions.setTemplate(template));
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setModal(false));
};

const updateTemplate = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateStart());
    const { template } = getState().cobrancas.emails.modal;
    await service.updateTemplates(template);
    dispatch(closeModal());
    dispatch(operationsPage.getTemplates());
    dispatch(operationsPage.addSnackbar('Template atualizado com sucesso', 'success'));
  } catch (error) {
    logger.error(error);
    dispatch(operationsPage.addSnackbar('Erro ao atualizar o template', 'error'));
    dispatch(actions.updateError());
  }
};

const setModalTemplate = (modalTemplate) => (dispatch) => {
  dispatch(actions.setModalTemplate(modalTemplate));
};

const updateEmailProperty = (propertyName, property) => (dispatch) => {
  dispatch(actions.updateEmailProperty(propertyName, property));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  closeModal,
  openModal,
  resetStore,
  updateEmailProperty,
  setModalTemplate,
  updateTemplate,
};
