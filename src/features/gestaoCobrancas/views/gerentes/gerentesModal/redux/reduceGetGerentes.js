import actions from './actions';

export const INITIAL_STATE_GET_GERENTES = {
  list: {
    isLoading: false,
    isError: false,
    gerentes: [],
  },
};

export const reduceGetGerentes = (state, action) => {
  switch (action.type) {
    case actions.types.GET_GERENTES_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
          gerentes: [],
        },
      };
    case actions.types.GET_GERENTES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          gerentes: action.payload.gerentes,
        },
      };
    case actions.types.GET_GERENTES_ERROR:
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
