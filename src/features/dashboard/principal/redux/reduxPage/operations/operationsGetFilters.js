import logger from 'utils/logger';
import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';
import { camelFormat } from 'utils/format';
import {
  mapUserBrands,
  mapUserRegions,
  mapModelos,
  mapGrupos,
  selectFilterOpts,
} from './operationsUtils';

import actions from '../actions/actions';
import service from '../service';

const getBrands = () => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    dispatch(actions.getBrandsStart());

    if (hasPermission(user, permissions.dashboard.listarTodasBrands)) {
      const brands = await service.GetBrands();
      dispatch(actions.setBrands(brands, false));
      dispatch(actions.setSelectedBrands(brands));
    } else {
      const brands = mapUserBrands(user);
      dispatch(actions.setBrands(brands, false));
      dispatch(actions.setSelectedBrands(brands));
    }
  } catch (e) {
    dispatch(actions.setGrupos([], true));
    dispatch(actions.errorLoader());
    logger.error(e);
    throw e;
  }
};

const getRegionais = () => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    dispatch(actions.getRegionaisStart());
    if (hasPermission(user, permissions.dashboard.listarTodasRegionais)) {
      const regions = await service.GetRegionais();
      dispatch(actions.setRegionais(regions, false));
      dispatch(actions.setSelectedRegional(regions));
    } else {
      const regions = mapUserRegions(user);
      dispatch(actions.setRegionais(regions, false));
      dispatch(actions.setSelectedRegional(regions));
    }
  } catch (e) {
    dispatch(actions.setGrupos([], true));
    dispatch(actions.errorLoader());
    logger.error(e);
    throw e;
  }
};

const getModelos = () => async (dispatch) => {
  try {
    dispatch(actions.getModelosStart());
    const modelos = await service.GetModelos();
    dispatch(actions.setModelos(modelos, false));
    dispatch(actions.setFilterModelos(modelos));
    dispatch(actions.setSelectedModelos(mapModelos(modelos)));
  } catch (e) {
    dispatch(actions.setModelos([], true));
    dispatch(actions.errorLoader());
    logger.error(e);
    throw e;
  }
};

const getPontos = () => async (dispatch) => {
  try {
    dispatch(actions.getPontosStart());
    const pontos = await service.GetPontos();
    const formatedPontos = (pontos || []).map((e) => ({
      text: `${e.codigoBuc || ''} - ${camelFormat(e.concessionariaNome, 2) || ''}`,
      value: e.codigoBuc,
      raizCnpj: e.raizCnpj,
    }));
    dispatch(actions.setPontos(formatedPontos, false));
    dispatch(actions.setFilterPontos(formatedPontos));
    dispatch(actions.setSelectedPontos(formatedPontos));
  } catch (e) {
    dispatch(actions.setPontos([], true));
    dispatch(actions.errorLoader());
    logger.error(e);
    throw e;
  }
};

const getGrupos = () => async (dispatch) => {
  try {
    dispatch(actions.getGruposStart());
    const grupos = await service.GetGrupos();
    dispatch(actions.setGrupos(grupos, false));
    dispatch(actions.setFilterGrupos(grupos));
    dispatch(actions.setSelectedGrupo(mapGrupos(grupos)));
  } catch (e) {
    dispatch(actions.setGrupos([], true));
    dispatch(actions.errorLoader());
    logger.error(e);
    throw e;
  }
};

const filterGrupos = () => async (dispatch, getState) => {
  dispatch(actions.getGruposFilterStart());
  const {
    filters: { selectedBrands, selectedRegional },
    grupos: { data: gruposData },
  } = getState().dashboard.principal.page;

  const filteredGrupos = selectFilterOpts(
    gruposData,
    [selectedBrands, 'value', 'brand'],
    [selectedRegional, 'value', 'regiao'],
  );

  dispatch(actions.setFilterGrupos(filteredGrupos));
  dispatch(actions.setSelectedGrupo(mapGrupos(filteredGrupos)));
};

const filterPontos = () => async (dispatch, getState) => {
  dispatch(actions.getPontosFilterStart());

  const {
    filters: { selectedGrupo },
    pontos: { data: pontosData },
  } = getState().dashboard.principal.page;

  const filteredPontos = selectFilterOpts(
    pontosData,
    [selectedGrupo, 'codigoBuc', 'raizCnpj'],
  );

  dispatch(actions.setFilterPontos(filteredPontos, false));
  dispatch(actions.setSelectedPontos(filteredPontos));
};

const filterModelos = () => async (dispatch, getState) => {
  dispatch(actions.getModelosFilterStart());

  const {
    filters: { selectedBrands },
    modelos: { data: modelosData },
  } = getState().dashboard.principal.page;

  const filteredModelos = selectFilterOpts(
    modelosData,
    [selectedBrands, 'value', 'brand'],
  );

  dispatch(actions.setFilterModelos(filteredModelos));
  dispatch(actions.setSelectedModelos(mapModelos(filteredModelos)));
};

export default {
  getModelos,
  getGrupos,
  getRegionais,
  getBrands,
  getPontos,
  filterGrupos,
  filterPontos,
  filterModelos,
};
