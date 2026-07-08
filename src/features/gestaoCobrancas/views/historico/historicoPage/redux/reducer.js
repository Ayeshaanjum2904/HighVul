import { applyProperty } from 'utils/object';
import actions from './actions';

const INITIAL_STATE = {
  list: {
    historico: null,
    isLoading: false,
    isError: false,
  },

  isFilterSelected: false,

  selectors: {
    regional: null,
    tipo: null,
  },

  pageParams: {
    page: 0,
    ipp: 25,
    itensTotais: null,
  },

  filters: {
    busca: null,
    regional: [],
    tipo: [],
    date: null,
  },
};

export const reduceGetHistorico = (state, action) => {
  switch (action.type) {
    case actions.types.GET_HISTORICO_START:
      return {
        ...state,
        list: {
          ...state.list,
          isError: false,
          isLoading: true,
        },
      };
    case actions.types.GET_HISTORICO_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isError: true,
          isLoading: false,
        },
      };
    case actions.types.GET_HISTORICO_SUCCESS:
      return {
        ...state,
        list: {
          isError: false,
          isLoading: false,
          historico: action.payload.response?.historico,
        },
        isFilterSelected: false,
        selectors: {
          regional: state.selectors.regional ?? action.payload.response?.regionais,
          tipo: state.selectors.tipo ?? action.payload.response?.tipos,
        },
        pageParams: {
          page: action.payload.response?.pagina,
          ipp: action.payload.response?.itensPorPagina,
          itensTotais: action.payload.response?.itensTotais,
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@historicoPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_HISTORICO)) {
    return reduceGetHistorico(state, action);
  }

  switch (action.type) {
    case actions.types.SET_FILTER:
      return {
        ...state,
        filters: applyProperty(
          state.filters,
          action.payload.filterName,
          action.payload.value,
        ),
        isFilterSelected: true,
      };
    case actions.types.SET_PAGE:
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
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
