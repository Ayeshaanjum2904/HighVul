import _ from 'lodash';
import actions from './actions';

const INITIAL_STATE = {
  marcas: null,
  regionais: [],

  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  filters: {
    marca: null,
    regional: [],
  },
  isFilterSelected: false,
  list: {
    isLoading: false,
    isError: false,
    gerentes: null,
  },
  pageParams: {
    page: 0,
    ipp: 25,
    totalItems: null,
  },
  resetStore: true,
};

const reduceGetAssociacoes = (state, action) => {
  switch (action.type) {
    case actions.types.GET_ASSOCIACOES_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
          gerentes: null,
        },
      };
    case actions.types.GET_ASSOCIACOES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          gerentes: action.payload.response.associacoes,
        },
        isFilterSelected: false,
        pageParams: action.payload.pageParams,
        marcas: state.marcas ?? action.payload.response.marcas,
        regionais: _.isEmpty(state.regionais) ? action.payload.response.regionais : state.regionais,
        resetStore: false,
      };
    case actions.types.GET_ASSOCIACOES_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          gerentes: null,
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@analistasPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_ASSOCIACOES)) {
    return reduceGetAssociacoes(state, action);
  }
  switch (action.type) {
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
    case actions.types.SET_MARCA: {
      return {
        ...state,
        filters: {
          ...state.filters,
          marca: action.payload.marca,
        },
        isFilterSelected: true,
      };
    }
    case actions.types.SET_REGIONAL: {
      return {
        ...state,
        filters: {
          ...state.filters,
          regional: action.payload.regional,
        },
        isFilterSelected: true,
      };
    }
    case actions.types.ADD_SNACKBAR:
      return {
        ...state,
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: action.payload.message,
            type: action.payload.type,
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        resetStore: true,
      };
    default:
      return state;
  }
};
