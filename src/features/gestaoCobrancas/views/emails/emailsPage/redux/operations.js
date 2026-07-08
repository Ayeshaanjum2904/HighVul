import logger from 'utils/logger';

import service from './service';
import actions from './actions';
import { configUpdateAction } from '../../../../redux/enums';

const getTemplates = () => async (dispatch) => {
  try {
    dispatch(actions.getTemplatesStart());

    const templates = await service.getTemplates();

    dispatch(actions.getTemplatesSuccess(templates));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getTemplatesError());
  }
};

const getConfiguracoes = () => async (dispatch) => {
  try {
    dispatch(actions.getConfiguracoesStart());

    const configuracoes = await service.getConfiguracoes();

    dispatch(actions.getConfiguracoesSuccess(configuracoes));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getConfiguracoesError());
  }
};

const updateConfig = (action, configuracao) => async (dispatch) => {
  try {
    dispatch(actions.updateConfigStart(action, configuracao.id));

    await service.updateConfig({
      action,
      id: configuracao.id,
      status: !configuracao.status,
    });

    if (configUpdateAction.emailsAlterarProduto === action) {
      dispatch(actions.updateConfigProduto(configuracao));
    }
    if (configUpdateAction.emailsAlterarTipo === action) {
      dispatch(actions.updateConfigTipo(configuracao));
    }

    dispatch(actions.updateConfigSuccess(action, configuracao.id));
    dispatch(actions.addSnackbar(`Cobrança ${configuracao.descricao} atualizada com sucesso`, 'success'));
  } catch (e) {
    dispatch(actions.updateConfigError(action, configuracao.id));
    dispatch(actions.addSnackbar(`Erro ao atualizar a Cobrança ${configuracao.descricao}`, 'error'));
    logger.error(e);
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

export default {
  getTemplates,
  getConfiguracoes,
  resetStore,
  dismissSnackbar,
  addSnackbar,
  updateConfig,
};
