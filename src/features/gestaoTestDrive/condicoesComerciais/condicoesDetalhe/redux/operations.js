import logger from 'utils/logger';
import { Mixpanel, trackedProperties } from 'modules';
import ServiceDetail from './service';
// eslint-disable-next-line import/no-cycle
import operationsCondicaoPage from '../../condicoesPage/redux/operations';
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
  await dispatch(getMvsList(marca));
};

const setCartaMes = (cartaMes) => async (dispatch) => {
  dispatch(actions.setCartaMes(cartaMes));
};

const hasIncompleteVehicle = (condicoes) => condicoes?.some(
  (c) => c.modelYear === '' || c.modelYear === null || c.modelYear === undefined,
);

const createCondicao = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setUploadLoading(true));
    const { condicao, concessionariasSelecionadas } = getState().condicoesComerciais.details;
    if (hasIncompleteVehicle(condicao.condicoes)) {
      dispatch(actions.setUploadLoading(false));
      dispatch(actions.setSnackbar('error', 'Não foi possível criar a condição. O cadastro do veículo está incompleto.'));
      return;
    }

    await ServiceDetail.createCondicao({ ...condicao, concessionariasSelecionadas });
    dispatch(actions.setUploadLoading(false));
    dispatch(actions.resetStore());
    dispatch(operationsCondicaoPage.setPage(Pages.condicoesPage));
    dispatch(operationsCondicaoPage.createSnackbar('Condição criada com sucesso', 'success'));
    Mixpanel.trackSubmit(trackedProperties.inserirCondicao, false, []);
  } catch (error) {
    dispatch(actions.setUploadLoading(false));
    logger.error(error);
    dispatch(actions.setSnackbar('error', 'Erro ao criar condição'));
    Mixpanel.trackSubmit(trackedProperties.inserirCondicao, true, error);
  }
};

const updateCondicao = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setUploadLoading(true));
    const { condicao, concessionariasSelecionadas } = getState().condicoesComerciais.details;

    if (hasIncompleteVehicle(condicao.condicoes)) {
      dispatch(actions.setUploadLoading(false));
      dispatch(actions.setSnackbar('error', 'Não foi possível atualizar a condição. O cadastro do veículo está incompleto.'));
      return;
    }

    await ServiceDetail.updateCondicao({ ...condicao, concessionariasSelecionadas });
    dispatch(actions.setUploadLoading(false));
    dispatch(actions.resetStore());
    dispatch(operationsCondicaoPage.setPage(Pages.condicoesPage));
    dispatch(operationsCondicaoPage.createSnackbar('Condição atualizada com sucesso', 'success'));
    Mixpanel.trackSubmit(trackedProperties.editarCondicao, false, []);
  } catch (error) {
    dispatch(actions.setUploadLoading(false));
    dispatch(actions.setSnackbar('error', 'Erro ao atualizar condição'));
    logger.error(error);
    Mixpanel.trackSubmit(trackedProperties.editarCondicao, true, error);
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
    const currentPage = getState().condicoesComerciais.page.page;
    const isDuplicate = currentPage === Pages.condicoesDuplicate;
    dispatch(actions.getDetailSuccess(response, isDuplicate));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getDetailError());
  }
};

const resetStore = () => async (dispatch) => {
  dispatch(actions.resetStore());
  dispatch(operationsCondicaoPage.setPage(Pages.condicoesPage));
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

const setDescontoValue = (value) => async (dispatch) => {
  dispatch(actions.setMvsDesconto(value));
};

const setMvsCoeficiente = (value) => async (dispatch) => {
  dispatch(actions.setMvsCoeficiente(value));
};

const setMvsParcelas = (value) => async (dispatch) => {
  dispatch(actions.setMvsParcelas(value));
};

const setMvsPrazo = (value) => async (dispatch) => {
  dispatch(actions.setMvsPrazo(value));
};

const setMvsTaxa = (value) => async (dispatch) => {
  dispatch(actions.setMvsTaxa(value));
};

const setMvsCondicaoOperacional = (value) => async (dispatch) => {
  dispatch(actions.setMvsCondicaoOperacional(value));
};

const changeCondicaoModel = (oldId, mvs) => async (dispatch) => {
  dispatch(actions.changeCondicaoModel(oldId, mvs));
};

const setModalErrorClose = () => async (dispatch) => {
  dispatch(actions.setModalError(false));
};

const dismissSnackbar = (id) => async (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const clearFilters = () => async (dispatch) => {
  dispatch(actions.clearFilters());
};

const setStatus = (id) => async (dispatch) => {
  dispatch(actions.setStatus(id));
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

const setSelectedConcessionarias = (concessionarias) => async (dispatch) => {
  dispatch(actions.setSelectedConcessionarias(concessionarias));
};

const removeSelectedConcessionaria = (concessionaria) => async (dispatch) => {
  dispatch(actions.removeSelectedConcessionaria(concessionaria));
};

export default {
  setDataFim,
  setDataInicio,
  setCartaMes,
  setMarca,
  setProduto,
  resetStore,
  setSelectedConcessionarias,
  setSelectedMvs,
  removeSelectedConcessionaria,
  removeSelectedMvs,
  setModalConcessionariaOpen,
  setModalOpen,
  setDescontoValue,
  setMvsCoeficiente,
  setMvsParcelas,
  setMvsPrazo,
  setMvsTaxa,
  setMvsCondicaoOperacional,
  changeCondicaoModel,
  getDetails,
  createCondicao,
  updateCondicao,
  setModalErrorClose,
  dismissSnackbar,
  clearFilters,
  setStatus,
  getBrandInputs,
  getProdutoInputs,
  getConcessionarias,
};
