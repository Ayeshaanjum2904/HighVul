import actions from './actions';

export const INITIAL_STATE_GET_CONFIGURACOES = {
  configuracoes: {
    isLoading: false,
    isError: false,
    tipo: [],
    produto: [],
  },
};

export const reduceGetConfiguracoes = (state, action) => {
  switch (action.type) {
    case actions.types.GET_CONFIGURACOES_START:
      return {
        ...state,
        configuracoes: {
          ...state.configuracoes,
          isLoading: true,
          isError: false,
          tipo: null,
          produto: null,
        },
      };
    case actions.types.GET_CONFIGURACOES_SUCCESS:
      return {
        ...state,
        configuracoes: {
          ...state.configuracoes,
          isLoading: false,
          isError: false,
          ...action.payload.configuracoes,
        },
      };
    case actions.types.GET_CONFIGURACOES_ERROR:
      return {
        ...state,
        configuracoes: {
          ...state.configuracoes,
          isLoading: false,
          isError: true,
          tipo: null,
          produto: null,
        },
      };
    default:
      return state;
  }
};
