import _ from 'lodash';
import logger from 'utils/logger';
import actions from '../actions/actions';
import service from '../service/serviceUpdateGrupo';

const updateDetalheGrupo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateGrupoStart());

    const { grupo, updateGrupo } = getState().cobrancas.grupos.details;
    const result = await service.updateGrupo(grupo, updateGrupo.data);

    if (!result.success && !_.isEmpty(result.errors)) {
      dispatch(actions.addSnackbar('Erro ao atualizar o grupo', 'error'));
      dispatch(actions.updateGrupoError(result.errors));
      return false;
    }

    dispatch(actions.addSnackbar('Grupo atualizado com sucesso', 'success'));
    dispatch(actions.updateGrupoSuccess());
    return true;
  } catch (e) {
    logger.error(e);
    dispatch(actions.updateGrupoError([]));
    return false;
  }
};

const updateGrupoProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateGrupoProperty(propertyName, value));
};

const setIsEditing = (value) => (dispatch) => {
  dispatch(actions.setIsEditing(value));
};

export default {
  updateDetalheGrupo,
  updateGrupoProperty,
  setIsEditing,
};
