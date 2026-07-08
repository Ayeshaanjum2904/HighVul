import _ from 'lodash';
import logger from 'utils/logger';
import actions from '../actions/actions';
import service from '../service/service';

const getMarcas = () => async (dispatch, getState) => {
  try {
    let { marcas } = getState().cobrancas.grupos.details;
    if (_.isEmpty(marcas)) marcas = await service.getMarcas();

    dispatch(actions.setMarcas(marcas));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setMarcas([]));
  }
};

const getRegionais = () => async (dispatch, getState) => {
  try {
    let { regionais } = getState().cobrancas.grupos.details;
    if (_.isEmpty(regionais)) regionais = await service.getRegionais();

    dispatch(actions.setRegionais(regionais));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setRegionais([]));
  }
};

const getDealers = () => async (dispatch, getState) => {
  try {
    let { dealers } = getState().cobrancas.grupos.details.updateConcessionaria;
    if (_.isEmpty(dealers)) dealers = await service.getDealers();

    dispatch(actions.setDealers(dealers));
  } catch (e) {
    logger.error(e);
    dispatch(actions.setDealers([]));
  }
};

const registerLoader = (id, loadOp) => async (dispatch, getState) => {
  const loaders = getState().cobrancas.grupos.details.dataLoader;

  const isLoaderPresent = _.isEmpty((loaders || []).filter((l) => l?.id === id));

  if (isLoaderPresent) {
    dispatch(actions.addLoader({
      id,
      loadOp,
      isReady: false,
      isLoading: true,
      isError: false,
    }));
  } else {
    dispatch(actions.updateLoader(id, loadOp));
  }
};

const loadData = () => async (dispatch, getState) => {
  const loaders = getState().cobrancas.grupos.details.dataLoader;
  const { id } = getState().cobrancas.grupos.details?.grupo || null;
  dispatch(getDealers());
  await Promise.all([dispatch(getRegionais()), dispatch(getMarcas())]);
  await Promise.all(loaders.map(async (l) => {
    if (!l.isReady || l.isError) {
      try {
        dispatch(actions.loaderStart(l.id));
        await l.loadOp(dispatch, id);
        dispatch(actions.loaderSuccess(l.id));
      } catch {
        dispatch(actions.loaderError(l.id));
      }
    }
  }));
};

export default {
  registerLoader,
  loadData,
};
