const SET_PEDIDOS_CONCESSIONARIA = 'dashboardPedidosConcessionaria/SET_PEDIDOS_CONCESSIONARIA';
const RESET_STORE = 'dashboardPedidosConcessionaria/RESET_STORE';
const SET_SELECTED_TAB = 'dashboardPedidosConcessionaria/SET_SELECTED_TAB';
const SET_ERROR_ON_GET_XLSX = 'dashboardPedidosConcessionaria/SET_ERROR_ON_GET_XLSX';
const SET_LOADING_XLSX = 'dashboardPedidosConcessionaria/SET_LOADING_XLSX';
const SET_SUCCESS_XLSX = 'dashboardPedidosConcessionaria/SET_SUCCESS_XLSX';
const SET_TYPE_AND_ORDER_BY = 'dashboardPedidosConcessionaria/SET_TYPE_AND_ORDER_BY';

const setPedidosConcessionaria = (pedidosConcessionaria) => ({
  type: SET_PEDIDOS_CONCESSIONARIA,
  payload: { pedidosConcessionaria },
});

const setSelectedTab = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  payload: { selectedTab },
});

const resetStore = () => ({
  type: RESET_STORE,
});

const setTypeAndOrderby = (tipo, orderBy) => ({
  type: SET_TYPE_AND_ORDER_BY,
  payload: { tipo, orderBy },
});

const setErrorOnGetXlsx = () => ({
  type: SET_ERROR_ON_GET_XLSX,
});

const setLoadingXlsx = () => ({
  type: SET_LOADING_XLSX,
});

const setSuccessXlsx = () => ({
  type: SET_SUCCESS_XLSX,
});

export default {
  types: {
    SET_PEDIDOS_CONCESSIONARIA,
    RESET_STORE,
    SET_SELECTED_TAB,
    SET_ERROR_ON_GET_XLSX,
    SET_TYPE_AND_ORDER_BY,
    SET_LOADING_XLSX,
    SET_SUCCESS_XLSX,
  },
  setPedidosConcessionaria,
  resetStore,
  setSelectedTab,
  setErrorOnGetXlsx,
  setTypeAndOrderby,
  setLoadingXlsx,
  setSuccessXlsx,
};
