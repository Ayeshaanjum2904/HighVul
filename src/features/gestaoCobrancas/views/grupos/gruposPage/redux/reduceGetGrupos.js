import actions from './actions';

export const INITIAL_STATE_GET_GRUPOS = {
  list: {
    isLoading: false,
    isError: false,
    grupos: [],
  },

  marcas: null,
  regionais: null,
};

export const reduceGetGrupos = (state, action) => {
  switch (action.type) {
    case actions.types.GET_GRUPOS_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
          grupos: [],
        },
      };
    case actions.types.GET_GRUPOS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          grupos: action.payload.response.grupos,
        },
        isFilterSelected: false,

        pageParams: action.payload.pageParams,
        marcas: state.marcas ?? action.payload.response.marcas,
        regionais: state.regionais ?? action.payload.response.regionais,
      };
    case actions.types.GET_GRUPOS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          grupos: [],
        },
      };
    default:
      return state;
  }
};
