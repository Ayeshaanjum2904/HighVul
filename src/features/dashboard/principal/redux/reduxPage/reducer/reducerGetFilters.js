import actions from '../actions/actions';

export const INITIAL_STATE_GET_FILTERS = {
  grupos: {
    data: [],
    isLoading: false,
    isError: false,
  },
  modelos: {
    data: [],
    filterData: [],
    isLoading: false,
    isError: false,
  },
  regionais: {
    data: [],
    isLoading: true,
    isError: false,
  },
  brands: {
    data: [],
    isLoading: true,
  },
  pontos: {
    data: [],
    filterData: [],
    isLoading: true,
    isError: false,
  },
};

export const reduceGetFilters = (state, action) => {
  switch (action.type) {
    case actions.types.SET_REGIONAIS:
      return {
        ...state,
        regionais: {
          data: action.payload.regionais,
          isLoading: false,
          isError: action.payload.isError,
        },
      };
    case actions.types.SET_BRANDS:
      return {
        ...state,
        brands: {
          data: action.payload.brands,
          isLoading: false,
        },
      };
    case actions.types.SET_MODELOS:
      return {
        ...state,
        modelos: {
          data: action.payload.modelos,
          isLoading: false,
          isError: action.payload.isError,
        },
      };
    case actions.types.SET_MODELOS_FILTER:
      return {
        ...state,
        modelos: {
          ...state.modelos,
          filterData: action.payload.modelos,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.SET_GRUPOS:
      return {
        ...state,
        grupos: {
          data: action.payload.grupos,
          filterData: [],
          isLoading: false,
          isError: action.payload.isError,
        },
      };
    case actions.types.SET_GRUPOS_FILTER:
      return {
        ...state,
        grupos: {
          ...state.grupos,
          filterData: action.payload.grupos,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.SET_PONTOS:
      return {
        ...state,
        pontos: {
          data: action.payload.pontos,
          filterData: [],
          isLoading: false,
          isError: action.payload.isError,
        },
      };
    case actions.types.SET_PONTOS_FILTER:
      return {
        ...state,
        pontos: {
          ...state.pontos,
          filterData: action.payload.pontos,
          isLoading: false,
          isError: action.payload.isError,
        },
      };
    case actions.types.GET_REGIONAIS_START:
      return {
        ...state,
        regionais: {
          data: [],
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_BRANDS_START:
      return {
        ...state,
        brands: {
          data: [],
          isLoading: true,
        },
      };
    case actions.types.GET_GRUPOS_START:
      return {
        ...state,
        grupos: {
          data: [],
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_GRUPOS_FILTER_START:
      return {
        ...state,
        grupos: {
          ...state.grupos,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_MODELOS_START:
      return {
        ...state,
        modelos: {
          data: [],
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_MODELOS_FILTER_START:
      return {
        ...state,
        modelos: {
          ...state.modelos,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_PONTOS_START:
      return {
        ...state,
        pontos: {
          data: [],
          filterData: [],
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_PONTOS_FILTER_START:
      return {
        ...state,
        pontos: {
          ...state.pontos,
          isLoading: true,
          isError: false,
        },
      };
    default:
      return state;
  }
};
