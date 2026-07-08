import actions from './actions';

import { Pages } from '../../../../redux/enums';

import { applyProperty } from '../../../../../../utils/object';

const INITIAL_STATE = {
  page: Pages.listConcessionarias,

  filters: {
    query: null,
    brand: [],
    regional: [],
    codBuc: null,
  },
  isFilterSelected: false,

  selectors: {
    brand: null,
    regional: null,
  },

  pageParams: {
    page: 0,
    ipp: 25,
    totalItems: null,
  },

  list: {
    isLoading: false,
    isError: false,
    concessionarias: [],
  },

  exportRelatorio: {
    isLoading: false,
    isError: false,
  },
};

export const reduceGetConcessionarias = (state, action) => {
  switch (action.type) {
    case actions.types.GET_CONCESSIONARIAS_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
          concessionarias: [],
        },
      };
    case actions.types.GET_CONCESSIONARIAS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          concessionarias: action.payload.response.concessionarias,
          errors: [],
        },
        isFilterSelected: false,
        selectors: {
          ...state.selectors,
          brand: state.selectors.brand ?? action.payload.response.marcas,
          regional: state.selectors.regional ?? action.payload.response.regionais,
        },
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.response.itensPorPagina,
          page: action.payload.response.pagina,
          totalItems: action.payload.response.itensTotal,
        },
      };
    case actions.types.GET_CONCESSIONARIAS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          concessionarias: [],
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@concessionariasPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_CONCESSIONARIAS)) {
    return reduceGetConcessionarias(state, action);
  }
  switch (action.type) {
    case actions.types.EXPORT_RELATORIO_START:
      return {
        ...state,
        exportRelatorio: { isLoading: true, isError: false },
      };
    case actions.types.EXPORT_RELATORIO_SUCCESS:
      return {
        ...state,
        exportRelatorio: { isLoading: false, isError: false },
      };
    case actions.types.EXPORT_RELATORIO_ERROR:
      return {
        ...state,
        exportRelatorio: { isLoading: false, isError: true },
      };
    case actions.types.SET_CONCESSIONARIAS_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
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
    case actions.types.SET_PAGE: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: action.payload.page,
        },
      };
    }
    case actions.types.SET_IPP: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    }
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        page: state.page,
      };
    default:
      return state;
  }
};
