import { applyProperty } from 'utils/object';

import { Pages } from '../../redux/enums';

import actions from './actions';

const INITIAL_STATE = {
  page: Pages.condicoesPage,

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
    condicoes: [],
    isLoading: false,
    isError: false,
  },

  pageParams: {
    ipp: 25,
    page: 0,
    totalItens: null,
  },
};

const reduceGetCondicoes = (state, action) => {
  switch (action.type) {
    case actions.types.GET_CONDICOES_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_CONDICOES_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_CONDICOES_SUCCESS:
      return {
        ...state,
        list: {
          condicoes: action.payload.response.condicoes,
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

export default (state = INITIAL_STATE, action = { type: '@@condicoesPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_CONDICOES)) {
    return reduceGetCondicoes(state, action);
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
    case actions.types.SET_CONDICAO_SWITCH:
      return {
        ...state,
        list: {
          ...state.list,
          condicoes: state.list.condicoes.map(
            (condicao) => (condicao.id === action.payload.idCondicao
              ? { ...condicao, status: !condicao.status }
              : condicao),
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
