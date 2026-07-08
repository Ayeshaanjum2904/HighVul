/* eslint-disable indent */
import { applyProperty } from 'utils/object';

import { Pages } from '../../redux/enums';

import actions from './actions';

const INITIAL_STATE = {
  page: Pages.descontosPage,

  snackbar: {
    errors: [],
    lastId: 0,
  },

  filters: {
    dataInicio: null,
    dataFim: null,
    produto: [],
    brand: [],
    text: null,
  },

  isFilterSelected: false,

  selectors: {
    brands: null,
    produtos: null,
  },

  list: {
    descontos: [],
    isLoading: false,
    isError: false,
  },

  pageParams: {
    ipp: 25,
    page: 0,
    totalItens: null,
  },
};

const reduceGetDescontos = (state, action) => {
  switch (action.type) {
    case actions.types.GET_DESCONTOS_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_DESCONTOS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_DESCONTOS_SUCCESS:
      return {
        ...state,
        list: {
          descontos: action.payload.response.descontos,
          isLoading: false,
          isError: false,
        },
        selectors: {
          brands: state.selectors.brands ?? action.payload.response.marcas,
          produtos: state.selectors.produtos ?? action.payload.response.produtos,
        },
        pageParams: {
          page: action.payload.response.page,
          ipp: action.payload.response.ipp,
          totalItens: action.payload.response.itensTotais,
        },
        isFilterSelected: false,
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@descontosPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_DESCONTOS)) {
    return reduceGetDescontos(state, action);
  }
  switch (action.type) {
    case actions.types.SET_FILTER:
      return {
        ...state,
        filters: applyProperty(
          state.filters,
          action.payload.propertyName,
          action.payload.value,
        ),
        isFilterSelected: true,
      };
    case actions.types.SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    case actions.types.SET_PAGE_NUMBER:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: action.payload.page,
        },
      };
    case actions.types.SET_IPP:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    case actions.types.SET_SNACKBAR:
      return {
        ...state,
        snackbar: {
          errors: [...state.snackbar.errors,
          {
            id: state.snackbar.lastId + 1,
            message: action.payload.message,
            type: action.payload.type,
          },
          ],
          lastId: state.snackbar.lastId + 1,
        },
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          errors: state.snackbar.errors.filter((e) => e.id !== action.payload.id),
        },
      };
    case actions.types.SET_DESCONTO_SWITCH:
      return {
        ...state,
        list: {
          ...state.list,
          descontos: state.list.descontos.map(
            (desconto) => (desconto.id === action.payload.idDesconto
              ? { ...desconto, status: !desconto.status }
              : desconto),
          ),
        },
      };
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        page: state.page,
      };
    default:
      return state;
  }
};
