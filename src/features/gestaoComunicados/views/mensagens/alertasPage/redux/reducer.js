import actions from './actions';

const INITIAL_STATE = {
  deleteAlerta: {
    alertaId: null,
    isLoading: false,
    isError: false,
  },

  list: {
    isLoading: false,
    isError: false,
    alertas: null,
  },

  pageParams: {
    page: null,
    ipp: 25,
    totalItems: null,
  },

  filters: {
    titulo: null,
    brand: [],
    brandList: [],
    dataInicio: null,
    dataFim: null,
    nomeColuna: 'dataCriacao',
    sentidoOrdenacao: 'desc',
  },

  cleaned: false,
  isFilterSelected: false,
};

const reduceGetAlertas = (state, action) => {
  switch (action.type) {
    case actions.types.GET_ALERTAS_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_ALERTAS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          alertas: action.payload.alertas,
        },
        pageParams: action.payload.pageParams,
        isFilterSelected: false,
        cleaned: false,
      };
    case actions.types.GET_ALERTAS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          alertas: null,
        },
      };
    default:
      return state;
  }
};

const reduceDeleteAlerta = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_ALERTA_START:
      return {
        ...state,
        deleteAlerta: {
          ...state.deleteAlerta,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_ALERTA_SUCCESS:
      return {
        ...state,
        deleteAlerta: {
          ...state.deleteAlerta,
          isLoading: false,
          isError: false,
          isModalDeleteOpen: false,
        },
      };
    case actions.types.DELETE_ALERTA_ERROR:
      return {
        ...state,
        deleteAlerta: {
          ...state.deleteAlerta,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@alertasPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_ALERTAS)) {
    return reduceGetAlertas(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_ALERTA)) {
    return reduceDeleteAlerta(state, action);
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
        },
      };
    }
    case actions.types.SET_ALERTA_ID: {
      return {
        ...state,
        deleteAlerta: {
          ...state.deleteAlerta,
          alertaId: action.payload.id,
        },
      };
    }
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
