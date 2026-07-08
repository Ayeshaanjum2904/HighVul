import actions from './actions';

export const INITIAL_STATE_INSERT_ANALISTA = {
  insertAnalista: {
    isLoading: false,
    isError: false,
    errors: [],
  },
};

export const reduceInsertAnalista = (state, action) => {
  switch (action.type) {
    case actions.types.INSERT_ANALISTA_START:
      return {
        ...state,
        insertAnalista: {
          ...state.insertAnalista,
          isLoading: true,
          isError: false,
          errors: [],
        },
      };
    case actions.types.INSERT_ANALISTA_SUCCESS:
      return {
        ...state,
        insertAnalista: {
          ...state.insertAnalista,
          isLoading: false,
          isError: false,
          errors: [],
        },
        analista: {
          ...state.analista,
          nome: null,
          email: null,
        },
        list: {
          ...state.list,
          analistas: [
            ...state.list.analistas,
            action.payload.analista,
          ],
        },
      };
    case actions.types.INSERT_ANALISTA_ERROR:
      return {
        ...state,
        insertAnalista: {
          ...state.insertAnalista,
          isLoading: false,
          isError: true,
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};
