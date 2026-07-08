import actions from './actions';

import { GroupTabs } from '../enums';

const INITIAL_STATE = {
  selectedTab: GroupTabs.maisPedidos,
  data: null,
  downloadStatus: {
    isLoading: false,
    isError: false,
  },
  tipo: null,
  orderBy: null,
};

export default (state = INITIAL_STATE, action = { type: '@@dashboardPedidosConcessionaria/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_PEDIDOS_CONCESSIONARIA:
      return {
        ...state,
        data: action.payload.pedidosConcessionaria,
      };
    case actions.types.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    case actions.types.SET_ERROR_ON_GET_XLSX:
      return {
        ...state,
        downloadStatus: {
          isLoading: false, isError: true,
        },
      };
    case actions.types.SET_LOADING_XLSX:
      return {
        ...state,
        downloadStatus: {
          isLoading: true, isError: false,
        },
      };
    case actions.types.SET_SUCCESS_XLSX: {
      return {
        ...state,
        downloadStatus: {
          isLoading: false, isError: false,
        },
      };
    }
    case actions.types.SET_TYPE_AND_ORDER_BY:
      return {
        ...state,
        tipo: action.payload.tipo,
        orderBy: action.payload.orderBy,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
