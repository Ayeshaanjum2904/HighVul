import logger from 'utils/logger';
import service from './service';
import actions from './actions';

const getDetails = () => async (dispatch, getState) => {
  try {
    dispatch(actions.loadingStart());
    const { idEmail } = getState().cobrancas.historico.details.historicoDetail;
    const response = await service.getDetalhesEmail(idEmail);
    dispatch(actions.loadingSuccess(response));
  } catch (error) {
    dispatch(actions.loadingError());
    logger.error(error);
  }
};

const setModalOpen = (value) => (dispatch) => {
  dispatch(actions.setModalOpen(value));
};

const setModalClose = () => (dispatch) => {
  dispatch(actions.setModalClose());
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getDetails,
  resetStore,
  setModalOpen,
  setModalClose,
};
