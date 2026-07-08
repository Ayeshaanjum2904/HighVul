import { formatNomeConcessionaria } from 'utils/format';
import logger from 'utils/logger';
import actions from '../actions/actions';
import service from '../service';

const setStartDate = (data) => (dispatch) => {
  dispatch(actions.setStartDate(data));
};

const setEndDate = (data) => (dispatch) => {
  dispatch(actions.setEndDate(data));
};

const setFilterType = (type) => (dispatch) => {
  dispatch(actions.setFilterType(type));
};

const setSelectedBrands = (brands) => async (dispatch) => {
  dispatch(actions.setSelectedModelos([]));
  dispatch(actions.setSelectedGrupo([]));
  dispatch(actions.setSelectedBrands(brands));
};

const setCodigoBuc = (buc) => (dispatch) => {
  dispatch(actions.setCodigoBuc(buc));
};

const setSelectedGrupo = (grupo) => (dispatch) => {
  dispatch(actions.setSelectedGrupo(grupo));
};

const setSelectedRegional = (regional) => async (dispatch) => {
  dispatch(actions.setSelectedGrupo([]));
  dispatch(actions.setSelectedRegional(regional));
};

const setSelectedModelos = (modelos) => (dispatch) => {
  dispatch(actions.setSelectedModelos(modelos));
};

const getConcessionaria = () => async (dispatch, getState) => {
  try {
    const { filters } = getState().dashboard.principal.page;
    dispatch(actions.getConcessionaria());
    const concessionaria = await service.GetConcessionaria(filters);
    dispatch(actions.setConcessionaria(formatNomeConcessionaria(concessionaria)));
  } catch (e) {
    dispatch(actions.setConcessionaria(null));
    logger.error(e);
  }
};

const disableFilterButton = () => async (dispatch) => {
  dispatch(actions.setDisabledButton());
};

const setSelectedPontos = (pontos) => async (dispatch) => {
  dispatch(actions.setSelectedPontos(pontos));
};

export default {
  setStartDate,
  setEndDate,
  setFilterType,
  setSelectedBrands,
  setCodigoBuc,
  setSelectedGrupo,
  setSelectedRegional,
  setSelectedModelos,
  getConcessionaria,
  disableFilterButton,
  setSelectedPontos,
};
