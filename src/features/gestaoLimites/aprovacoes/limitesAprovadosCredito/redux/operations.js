import logger from 'utils/logger';
import { SnackbarActions } from 'modules/snackbar';
import actions from './actions';
import service from './service';

const enviarProposta = (idLimite, status, back) => async (dispatch) => {
  try {
    const response = await service.updateAndSaveStatus({
      status,
      idLimiteList: [idLimite],
      tipo: 'alterar_status',
    });
    if (response.status !== 200) {
      throw new Error('Erro ao atualizar status.');
    } else {
      dispatch(SnackbarActions.addSnackbar('Aprovação enviada com sucesso.', 'success'));
      back();
    }
  } catch (e) {
    dispatch(SnackbarActions.addSnackbar('Erro ao enviar aprovação.', 'error'));
    logger.error(e);
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  enviarProposta,
  resetStore,
};
