import _ from 'lodash';
import { Mixpanel, trackedProperties } from 'modules';
import actions from './actions';
import service from './service';

const setConcessionaria = (value) => (dispatch) => {
  dispatch(actions.setConcessionaria(value));
};

const getConcessionaria = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setLoadingStart());
    const { codBuc, id } = getState().cobrancas.concessionarias.details.concessionaria;
    const result = await service.getConcessionaria(codBuc ?? id);
    dispatch(actions.setConcessionaria(result));
    dispatch(actions.setLoadingSuccess());
  } catch (error) {
    dispatch(actions.setLoadingError());
  }
};

const updateConcessionaria = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setUpdateStart());
    const update = getState().cobrancas.concessionarias.details.dataUpdate;
    const { concessionaria } = getState().cobrancas.concessionarias.details;
    const result = await service.updateConcessionaria(update, concessionaria);
    if (!result.success && !_.isEmpty(result.errors)) {
      dispatch(actions.setUpdateError(result.errors));
      Mixpanel.trackSubmit(trackedProperties.updateConcessionaria, true, result.errors);
      return;
    }

    Mixpanel.trackSubmit(trackedProperties.updateConcessionaria, false);
    const newConcessionaria = service.makeNewConcessionaria(concessionaria, update);
    dispatch(actions.setUpdateSuccess(newConcessionaria));
  } catch (error) {
    dispatch(actions.setUpdateError([]));
  }
};

const setIsDisabled = (value) => (dispatch) => {
  dispatch(actions.setIsDisabled(value));
};

const setUpdateData = (paramName, value) => (dispatch) => {
  dispatch(actions.setUpdateData(paramName, value));
};

const resetSnackBar = (id) => (dispatch) => {
  dispatch(actions.resetSnackBar(id));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore);
};

export default {
  resetStore,
  resetSnackBar,
  setConcessionaria,
  setIsDisabled,
  setUpdateData,
  getConcessionaria,
  updateConcessionaria,
};
