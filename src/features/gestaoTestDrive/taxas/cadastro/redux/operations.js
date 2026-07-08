import actions from './actions';
import service from './service';
import { formatDate } from './util';
import selector from './selector';

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setInputData = (paramName, value) => (dispatch) => {
  if (value === '') {
    dispatch(actions.setInputData(paramName, null));
  } else {
    dispatch(actions.setInputData(paramName, value));
  }
};

const setHeaderInputData = (paramName, value) => (dispatch, getState) => {
  dispatch(actions.setInputData(paramName, value));
  const { brand } = getState().taxas.cadastro.inputData;
  if (brand !== 'Fiat') {
    dispatch(actions.clearComFundo());
  }
};

const setModalOpen = (status) => (dispatch) => {
  dispatch(actions.setModalOpen(status));
};

const setFormOpen = (status) => (dispatch) => {
  dispatch(actions.setFormOpen(status));
};

const clearForm = () => (dispatch) => {
  dispatch(actions.clearForm());
};

const clearSelectors = () => (dispatch) => {
  dispatch(actions.clearSelectors());
};

const postCadastroStart = () => (dispatch) => {
  dispatch(actions.postCadastroStart());
};

const postCadastroSuccess = (taxaCadastro) => (dispatch) => {
  dispatch(actions.postCadastroSuccess(taxaCadastro));
};

const postCadastroError = () => (dispatch) => {
  dispatch(actions.postCadastroError());
};

const setResetState = (status) => (dispatch) => {
  dispatch(actions.setResetState(status));
};

const salvarTaxas = () => async (dispatch, getState) => {
  const taxa = getState().taxas.cadastro.inputData;
  if (selector.isFormValid(taxa)) {
    try {
      dispatch(actions.postCadastroStart());
      await service.postTaxa(taxa);
      dispatch(postCadastroSuccess(taxa));
      dispatch(clearForm());
      dispatch(clearSelectors());
      dispatch(actions.setResetState(true));
      dispatch(actions.setFormOpen(false));
      dispatch(actions.addSnackbar('Taxa cadastrada com sucesso', 'success'));
    } catch (e) {
      dispatch(actions.addSnackbar('Erro ao cadastrar taxa', 'error'));
      dispatch(actions.postCadastroError());
    }
  } else {
    dispatch(actions.addSnackbar('Verifique o preenchimento dos campos', 'error'));
  }
};

const deleteTaxa = (taxa) => async (dispatch) => {
  try {
    dispatch(actions.deleteStart());
    const dataInicioFormatada = formatDate(taxa.inicioVigencia);
    const dataFinalFormatada = formatDate(taxa.fimVigencia);
    await service.deleteTaxa(dataInicioFormatada, dataFinalFormatada);
    dispatch(actions.removeFromTaxaCadastrada(taxa));
    dispatch(clearSelectors());
    dispatch(actions.addSnackbar('Taxa deletada com sucesso', 'success'));
  } catch (e) {
    dispatch(actions.addSnackbar('Erro ao deletar taxa', 'error'));
    dispatch(actions.deleteError());
  }
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

export default {
  resetStore,
  setInputData,
  setHeaderInputData,
  setModalOpen,
  setFormOpen,
  clearForm,
  clearSelectors,
  postCadastroStart,
  postCadastroError,
  postCadastroSuccess,
  salvarTaxas,
  dismissSnackbar,
  addSnackbar,
  deleteTaxa,
  setResetState,
};
