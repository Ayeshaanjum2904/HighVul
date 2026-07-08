import actions from './actions';
import historicoTaxaService from './service';

const getHistorico = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getHistoricoStart());
    const filters = getState().taxas?.historico?.filters;
    const { page, ipp } = getState().taxas?.historico?.paginacao || { page: 0, ipp: 25 };
    const response = await historicoTaxaService.getHistorico(filters, page, ipp);
    const marcas = response.marcas.map((item) => {
      const value = item;
      const text = item;
      return { value, text };
    });
    dispatch(actions.getHistoricoSuccess(response.taxas, response.total, marcas));
  } catch (error) {
    dispatch(actions.getHistoricoError());
  }
};

const deleteTaxa = (id) => async (dispatch) => {
  try {
    dispatch(actions.deleteTaxaStart());
    const response = await historicoTaxaService.deleteTaxa(id);
    if (!response) throw new Error('Falha ao tentar excluir taxas');

    dispatch(actions.deleteTaxaSuccess());
    dispatch(getHistorico());
  } catch (error) {
    dispatch(actions.deleteTaxaError());
  }
};

const setFilter = (paramName, value) => (dispatch) => {
  dispatch(actions.setFilter(paramName, value));
};

const setInputData = (paramName, value) => (dispatch) => {
  dispatch(actions.setInputData(paramName, value));
};

const setTaxaOpen = (taxa) => async (dispatch) => {
  dispatch(actions.setTaxaOpen(taxa));
};

const clearForm = () => (dispatch) => {
  dispatch(actions.clearForm());
};

const clearStateBrand = () => (dispatch) => {
  dispatch(actions.clearStateBrand());
};

const updateData = () => async (dispatch, getState) => {
  const taxa = getState().taxas.historico.inputDataHistorico;
  try {
    dispatch(actions.updateDataStart());
    await historicoTaxaService.updateTaxa(taxa, taxa.id);
    dispatch(actions.updateDataSucess());
    dispatch(actions.addSnackbar('Taxa editada com sucesso', 'success'));
    dispatch(getHistorico());
  } catch (error) {
    dispatch(actions.addSnackbar('Erro ao editar taxa. Por favor, tente novamente.', 'error'));
    dispatch(actions.updateDataError());
  }
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getHistorico());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  setFilter,
  setPage,
  setIpp,
  getHistorico,
  updateData,
  deleteTaxa,
  dismissSnackbar,
  addSnackbar,
  setInputData,
  setTaxaOpen,
  clearForm,
  clearStateBrand,
  resetStore,
};
