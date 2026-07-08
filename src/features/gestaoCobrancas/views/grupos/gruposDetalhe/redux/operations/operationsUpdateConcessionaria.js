import logger from 'utils/logger';
import actions from '../actions/actions';
import service from '../service/serviceUpdateConcessionaria';

const deleteConcessionaria = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateConcessionariaStart());

    const { id } = getState().cobrancas.grupos.details.grupo;
    const { codBuc, nome } = getState().cobrancas.grupos.details.updateConcessionaria.data;
    await service.deleteConcessionaria(id, codBuc);

    dispatch(actions.addSnackbar('Concessionaria removida com sucesso', 'success'));
    dispatch(actions.deleteConcessionaria(codBuc));
    dispatch(actions.updateConcessionariaSuccess({ codBuc, nome }));
  } catch (e) {
    logger.error(e);
    dispatch(actions.addSnackbar('Erro ao remover a concessionária', 'error'));
    dispatch(actions.updateConcessionariaError());
  }
};

const getDetalheConcessionaria = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateConcessionariaStart());

    const { codBuc } = getState().cobrancas.grupos.details.updateConcessionaria.data;
    const concessionaria = await service.getDetalheConcessionaria(codBuc);

    dispatch(actions.updateConcessionariaSuccess(concessionaria));
  } catch (e) {
    logger.error(e);
    dispatch(actions.updateConcessionariaError());
  }
};

const insertConcessionarias = () => async (dispatch, getState) => {
  try {
    dispatch(actions.updateConcessionariaStart());

    const { id } = getState().cobrancas.grupos.details.grupo;
    const { associacoes } = getState().cobrancas.grupos.details.updateConcessionaria;
    await service.insertConcessionarias(id, associacoes);

    dispatch(actions.addSnackbar('Concessionárias associadas com sucesso', 'success'));
    dispatch(actions.addConcessionarias(associacoes));
    dispatch(actions.updateConcessionariaSuccess(null));

    dispatch(actions.setAssociarConcessionariaOpen(false));
  } catch (e) {
    logger.error(e);
    dispatch(actions.addSnackbar('Erro ao associar as concessionárias', 'error'));
    dispatch(actions.updateConcessionariaError());
  }
};

const setConcessionaria = (concessionaria = null) => (dispatch) => {
  dispatch(actions.setConcessionaria(concessionaria));
};

const openModalDetalheConcessionaria = (concessionaria = null) => (dispatch) => {
  dispatch(actions.setDetailsConcessionariaOpen(true, concessionaria));
};

const closeModalDetalheConcessionaria = () => (dispatch) => {
  dispatch(actions.setDetailsConcessionariaOpen(false, null));
};

const openModalAssociarConcessionaria = () => (dispatch) => {
  dispatch(actions.setAssociarConcessionariaOpen(true));
};

const closeModalAssociacarConcessionaria = () => (dispatch) => {
  dispatch(actions.setAssociarConcessionariaOpen(false));
};

const associarConcessionaria = (concessionaria) => (dispatch) => {
  dispatch(actions.associarConcessionaria(concessionaria));
};

const desassociarConcessionaria = (id) => (dispatch) => {
  dispatch(actions.desassociarConcessionaria(id));
};

export default {
  deleteConcessionaria,
  setConcessionaria,
  openModalDetalheConcessionaria,
  closeModalDetalheConcessionaria,
  getDetalheConcessionaria,
  associarConcessionaria,
  desassociarConcessionaria,
  openModalAssociarConcessionaria,
  closeModalAssociacarConcessionaria,
  insertConcessionarias,
};
