import logger from 'utils/logger';

import actions from './actions';
import service from './service';

import VeiculosPageOperations from '../../veiculosPage/redux/operations';

const openModal = (id) => async (dispatch) => {
  try {
    dispatch(actions.setOpen(true));
    dispatch(actions.getDetalheVeiculoStart());

    const detalheVeiculo = await service.getDetalheVeiculo(id);

    dispatch(actions.getDetalheVeiculoSuccess(detalheVeiculo));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getDetalheVeiculoError());
  }
};

const closeModal = () => (dispatch) => {
  dispatch(actions.setOpen(false));
};

const deleteVeiculo = () => async (dispatch, getState) => {
  try {
    dispatch(actions.deleteVeiculoStart());

    const { id } = getState().veiculos.details.modal.detalheVeiculo;
    await service.deleteVeiculo(id);

    dispatch(VeiculosPageOperations.addSnackbar('Veículo removido com sucesso', 'success'));
    dispatch(actions.deleteVeiculoSuccess());
    dispatch(VeiculosPageOperations.getVeiculos());
  } catch (e) {
    dispatch(VeiculosPageOperations.addSnackbar('Erro ao remover o veículo', 'error'));
    dispatch(actions.deleteVeiculoError());
    logger.error(e);
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

export default {
  openModal,
  closeModal,
  deleteVeiculo,
  resetStore,
  dismissSnackbar,
};
