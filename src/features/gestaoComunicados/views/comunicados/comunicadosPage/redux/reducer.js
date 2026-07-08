import actions from './actions';

const INITIAL_STATE = {
  requestStatus: {
    isLoading: false,
    isError: false,
    isLoadingDelete: false,
  },

  pageParams: {
    page: 0,
    ipp: 25,
    totalItems: 0,
  },

  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  comunicados: null,
  arquivoDelete: null,

  filters: {
    titulo: null,
    brand: [],
    brandList: [],
    dataInicio: null,
    dataFim: null,
    nomeColuna: 'dataEmissao',
    sentidoOrdenacao: 'desc',
  },

  cleaned: false,
  isFilterSelected: false,
};

const reduceGetComunicados = (state, action) => {
  switch (action.type) {
    case actions.types.GET_COMUNICADOS_START:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_COMUNICADOS_ERROR:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_COMUNICADOS_SUCCESS:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          isLoading: false,
          isError: false,
        },
        comunicados: action.payload.comunicados,
        pageParams: action.payload.pageParams,
        isFilterSelected: false,
        cleaned: false,
      };
    default:
      return state;
  }
};

const reduceDeleteComunicados = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_COMUNICADO_START:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          isLoadingDelete: true,
        },
      };
    case actions.types.DELETE_COMUNICADO_SUCCESS:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          isLoadingDelete: false,
        },
        isModalDeleteOpen: false,
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: 'Comunicado deletado',
            type: 'success',
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
        arquivoDelete: null,
      };
    case actions.types.DELETE_COMUNICADO_ERROR:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          isLoadingDelete: false,
        },
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: 'Erro ao deletar comunicado',
            type: 'error',
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@comunicadosPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_COMUNICADOS)) {
    return reduceGetComunicados(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_COMUNICADO)) {
    return reduceDeleteComunicados(state, action);
  }

  switch (action.type) {
    case actions.types.SET_IPP:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    case actions.types.SET_PAGE:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: action.payload.page,
        },
      };
    case actions.types.SET_COMUNICADO_ID:
      return {
        ...state,
        arquivoDelete: action.payload.idArquivo,
      };
    case actions.types.DISMISS_SNACKBARS:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((s) => s.id !== action.payload.id),
      };
    case actions.types.SET_SNACKBARS:
      return {
        ...state,
        snackbarErrors: [...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: action.payload.menssagem,
            type: action.payload.tipo,
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    case actions.types.SET_TITULO:
      return {
        ...state,
        filters: {
          ...state.filters,
          titulo: action.payload.texto,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_BRAND:
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: action.payload.brand,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_BRAND_LIST:
      return {
        ...state,
        filters: {
          ...state.filters,
          brandList: action.payload.brandList,
        },
      };
    case actions.types.SET_START_DATE:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataInicio: action.payload.dataInicio,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_END_DATE:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataFim: action.payload.dataFim,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_FILTERS:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: 0,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          titulo: null,
          brand: state.filters.brandList,
          dataInicio: null,
          dataFim: null,
        },
        pageParams: {
          ...state.pageParams,
          page: 0,
        },
        cleaned: true,
      };
    case actions.types.SET_SORTING_ORDER:
      return {
        ...state,
        filters: {
          ...state.filters,
          nomeColuna: action.payload.nomeColuna,
          sentidoOrdenacao: action.payload.sentidoOrdenacao,
        },
      };
    default:
      return state;
  }
};
