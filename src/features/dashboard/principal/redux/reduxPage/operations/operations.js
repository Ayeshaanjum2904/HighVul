import _ from 'lodash';
import actions from '../actions/actions';

import operationsGetFilters from './operationsGetFilters';
import operationsSetFilters from './operationsSetFilters';

import fluxoActions from '../../reduxFluxo/actions';
import pedidosActions from '../../reduxPedidos/actions';
import pedidosAreaActions from '../../reduxPedidosArea/actions';
import pedidosModeloActions from '../../reduxPedidosModelo/actions';
import modeloRegiaoActions from '../../reduxModeloRegiao/actions';
import pedidosRegiaoActions from '../../reduxPedidosRegiao/actions';
import pedidosPeriodoActions from '../../reduxPedidosPeriodo/actions';
import pedidosConcessionariaActions from '../../reduxPedidosConcessionaria/actions';

const resetStore = () => (dispatch) => {
  dispatch(pedidosActions.resetStore());
  dispatch(fluxoActions.resetStore());
  dispatch(pedidosAreaActions.resetStore());
  dispatch(pedidosModeloActions.resetStore());
  dispatch(modeloRegiaoActions.resetStore());
  dispatch(pedidosRegiaoActions.resetStore());
  dispatch(pedidosPeriodoActions.resetStore());
  dispatch(pedidosConcessionariaActions.resetStore());
  dispatch(actions.resetStore());
};

const registerLoader = (id, loadOp) => async (dispatch, getState) => {
  const loaders = getState().dashboard.principal.page.dataLoader;

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
  const loaders = getState().dashboard.principal.page.dataLoader;
  const { filters, brands } = getState().dashboard.principal.page;
  await Promise.all(loaders.map(async (l) => {
    if ((!l.isReady || l.isError) && !l.isLoading) {
      try {
        dispatch(actions.loaderStart(l.id));
        await l.loadOp(dispatch, filters, brands);
        dispatch(actions.loaderSuccess(l.id));
      } catch {
        dispatch(actions.loaderError(l.id));
      }
    }
  }));
};

const forceReload = () => async (dispatch, getState) => {
  const loaders = getState().dashboard.principal.page.dataLoader;
  const { filters, brands } = getState().dashboard.principal.page;
  await Promise.all(loaders.map(async (l) => {
    try {
      dispatch(actions.loaderStart(l.id));
      await l.loadOp(dispatch, filters, brands);
      dispatch(actions.loaderSuccess(l.id));
    } catch {
      dispatch(actions.loaderError(l.id));
    }
  }));
};

const setCollapseRegionaisOpen = (open) => (dispatch) => {
  dispatch(actions.setCollapseRegionaisOpen(open));
};

const setCollapseConcessionariasOpen = (open) => (dispatch) => {
  dispatch(actions.setCollapseConcessionariasOpen(open));
};

const startLoader = () => (dispatch) => {
  dispatch(actions.startLoader());
};

const errorLoader = () => (dispatch) => {
  dispatch(actions.errorLoader());
};

export default {
  ...operationsGetFilters,
  ...operationsSetFilters,

  resetStore,
  registerLoader,
  loadData,
  forceReload,
  setCollapseRegionaisOpen,
  setCollapseConcessionariasOpen,
  startLoader,
  errorLoader,
};
