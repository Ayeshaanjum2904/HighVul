import actions from './actions';

export const INITIAL_STATE_GET_ANALISTAS = {
  list: {
    isLoading: false,
    isError: false,
    analistas: [],
  },
};

export const reduceGetAnalistas = (state, action) => {
  switch (action.type) {
    case actions.types.GET_ANALISTAS_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
          analistas: null,
        },
      };
    case actions.types.GET_ANALISTAS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          analistas: action.payload.analistas,
        },
      };
    case actions.types.GET_ANALISTAS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          analistas: null,
        },
      };
    default:
      return state;
  }
};
