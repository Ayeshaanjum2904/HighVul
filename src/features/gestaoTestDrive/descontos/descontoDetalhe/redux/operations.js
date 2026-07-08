import logger from 'utils/logger';
import { Mixpanel, trackedProperties } from 'modules';
import ServiceDetail from './service';
// eslint-disable-next-line import/no-cycle
import operationsDescontoPage from '../../descontoPage/redux/operations';
import { Pages } from '../../redux/enums';

import actions from './actions';

const getMvsList = (marca) => async (dispatch) => {
  try {
    dispatch(actions.setIsLoadingMvsList(true, false));
    const response = await ServiceDetail.getMvsList(marca);
    dispatch(actions.setMvsList(response));
    dispatch(actions.setIsLoadingMvsList(false, false));
  } catch (error) {
    logger.error(error);
    dispatch(actions.setIsLoadingMvsList(false, true));
    dispatch(actions.setSnackbar('error', 'Error ao buscar modelos'));
  }
};

const setDataInicio = (data) => async (dispatch) => {
  dispatch(actions.setDataInicio(data));
};

const setDataFim = (data) => async (dispatch) => {
  dispatch(actions.setDataFim(data));
};

const setProduto = (produto) => async (dispatch) => {
  dispatch(actions.setProduto(produto));
};

const setMarca = (marca) => async (dispatch) => {
  dispatch(actions.setMarca(marca));
  dispatch(getMvsList(marca));
};

const setDve = (dve) => async (dispatch) => {
  dispatch(actions.setDveNumber(dve));
};

const setDescontoGlobal = (valor) => async (dispatch) => {
  dispatch(actions.setDescontoGlobal(parseFloat(valor)));
};

const createDesconto = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setUploadLoading(true));
    const { desconto, concessionariasSelecionadas } = getState().descontos.details;
    const response = await ServiceDetail.createDesconto(
      { ...desconto, concessionariasSelecionadas },
    );
    dispatch(actions.setUploadLoading(false));
    if (response.success) {
      dispatch(actions.resetStore());
      dispatch(operationsDescontoPage.setPage(Pages.descontosPage));
      dispatch(operationsDescontoPage.createSnackbar('Desconto criado com sucesso', 'success'));
      Mixpanel.trackSubmit(trackedProperties.inserirDesconto, false, []);
      return;
    }
    const errors = (response.errors || []).filter((e) => e.propertyName === 'Vigencia_igual');
    const modelYearErrors = (response.errors || []).filter((e) => e.propertyName === 'ModelYear');
    Mixpanel.trackSubmit(trackedProperties.inserirDesconto, true, response.errors);
    if (errors.length > 0) {
      const messages = errors.map((e) => e.message);
      dispatch(actions.setModalError(true, messages));
      return;
    }
    if (modelYearErrors.length > 0) {
      dispatch(actions.setSnackbar('error', modelYearErrors[0].message));
      return;
    }
    dispatch(actions.setSnackbar('error', 'Error ao criar desconto'));
  } catch (error) {
    logger.error(error);
    dispatch(actions.setSnackbar('error', 'Error ao criar desconto'));

    Mixpanel.trackSubmit(trackedProperties.inserirDesconto, true, error);
  }
};

const updateDesconto = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setUploadLoading(true));
    const { desconto, concessionariasSelecionadas } = getState().descontos.details;
    const response = await ServiceDetail.updateDesconto(
      { ...desconto, concessionariasSelecionadas },
    );
    dispatch(actions.setUploadLoading(false));
    if (response.success) {
      dispatch(actions.resetStore());
      dispatch(operationsDescontoPage.setPage(Pages.descontosPage));
      dispatch(operationsDescontoPage.createSnackbar('Desconto atualizado com sucesso', 'success'));
      Mixpanel.trackSubmit(trackedProperties.editarDesconto, false, []);
      return;
    }
    Mixpanel.trackSubmit(trackedProperties.editarDesconto, true, response.errors);
    const errors = (response?.errors || []).filter((e) => e.propertyName === 'Vigencia_igual');
    const modelYearErrors = (response?.errors || []).filter((e) => e.propertyName === 'ModelYear');
    if (errors.length > 0) {
      const messages = errors.map((e) => e.message);
      dispatch(actions.setModalError(true, messages));
      return;
    }
    if (modelYearErrors.length > 0) {
      dispatch(actions.setSnackbar('error', modelYearErrors[0].message));
      return;
    }
    dispatch(actions.setSnackbar('error', 'Error ao atualizar desconto'));
  } catch (error) {
    dispatch(actions.setSnackbar('error', 'Error ao atualizar desconto'));
    logger.error(error);
    Mixpanel.trackSubmit(trackedProperties.editarDesconto, true, error);
  }
};

const getConcessionarias = () => async (dispatch) => {
  try {
    dispatch(actions.setIsLoadingConcessionariasList(true, false));
    const response = await ServiceDetail.getAllConcessionarias();
    dispatch(actions.setConcessionariasList(response));
    dispatch(actions.setIsLoadingConcessionariasList(false, false));
  } catch (error) {
    logger.error(error);
    dispatch(actions.setIsLoadingConcessionariasList(false, true));
  }
};

const getDetails = (id, marca) => async (dispatch, getState) => {
  try {
    dispatch(actions.getDetailStart(id));
    dispatch(setMarca(marca));
    const [response] = await Promise.all([
      ServiceDetail.getDetalhes(id),
      dispatch(getConcessionarias()),
    ]);
    const currentPage = getState().descontos.page.page;
    const isDuplicate = currentPage === Pages.descontosDuplicate;
    dispatch(actions.getDetailSuccess(response, isDuplicate));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getDetailError());
  }
};

const resetStore = () => async (dispatch) => {
  dispatch(actions.resetStore());
  dispatch(operationsDescontoPage.setPage(Pages.descontosPage));
};

const setSelectedMvs = (mvs) => async (dispatch) => {
  dispatch(actions.setSelectedMvs(mvs));
};

const removeSelectedMvs = (mvs) => async (dispatch) => {
  dispatch(actions.removeSelectedMvs(mvs));
};

const setModalOpen = (open) => async (dispatch) => {
  dispatch(actions.setModalOpen(open));
};

const setModalConcessionariaOpen = (open) => async (dispatch) => {
  dispatch(actions.setModalConcessionariaOpen(open));
};

const setDescontoValue = (id, value) => async (dispatch) => {
  dispatch(actions.setMvsValue(id, value));
};

const changeDescontoModel = (oldId, mvs) => async (dispatch) => {
  dispatch(actions.changeDescontoModel(oldId, mvs));
};

const setModalErrorClose = () => async (dispatch) => {
  dispatch(actions.setModalError(false));
};

const dismissSnackbar = (id) => async (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const setStatus = (id) => async (dispatch) => {
  dispatch(actions.setStatus(id));
};

const setSelectedConcessionarias = (concessionarias) => async (dispatch) => {
  dispatch(actions.setSelectedConcessionarias(concessionarias));
};

const removeSelectedConcessionaria = (concessionaria) => async (dispatch) => {
  dispatch(actions.removeSelectedConcessionaria(concessionaria));
};

const getBrandInputs = () => async (dispatch) => {
  try {
    dispatch(actions.getBrandInputsStart());
    const response = await ServiceDetail.getBrands();
    dispatch(actions.getBrandInputsSuccess(response));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getBrandInputsError());
  }
};

const getProdutoInputs = () => async (dispatch) => {
  try {
    dispatch(actions.getProdutoInputsStart());
    const response = await ServiceDetail.getProdutos();
    dispatch(actions.getProdutoInputsSuccess(response));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getProdutoInputsError());
  }
};

export default {
  setDataFim,
  setDataInicio,
  setDve,
  setDescontoGlobal,
  setMarca,
  setProduto,
  resetStore,
  setSelectedMvs,
  removeSelectedMvs,
  setModalOpen,
  setModalConcessionariaOpen,
  setDescontoValue,
  changeDescontoModel,
  getDetails,
  createDesconto,
  updateDesconto,
  setModalErrorClose,
  dismissSnackbar,
  setStatus,
  getBrandInputs,
  getProdutoInputs,
  getConcessionarias,
  setSelectedConcessionarias,
  removeSelectedConcessionaria,
};
