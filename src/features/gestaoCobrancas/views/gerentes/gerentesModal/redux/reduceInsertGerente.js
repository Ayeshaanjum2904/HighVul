import actions from './actions';

export const INITIAL_STATE_INSERT_GERENTE = {
  insertGerente: {
    isLoading: false,
    isError: false,
    errors: [],
  },
};

export const reduceInsertGerente = (state, action) => {
  switch (action.type) {
    case actions.types.INSERT_GERENTE_START:
      return {
        ...state,
        insertGerente: {
          ...state.insertGerente,
          isLoading: true,
          isError: false,
          errors: [],
        },
      };
    case actions.types.INSERT_GERENTE_SUCCESS:
      return {
        ...state,
        insertGerente: {
          ...state.insertGerente,
          isLoading: false,
          isError: false,
          errors: [],
        },
        gerente: {
          ...state.gerente,
          nome: null,
          email: null,
        },
        list: {
          ...state.list,
          gerentes: [
            ...state.list.gerentes,
            action.payload.gerente,
          ],
        },
      };
    case actions.types.INSERT_GERENTE_ERROR:
      return {
        ...state,
        insertGerente: {
          ...state.insertGerente,
          isLoading: false,
          isError: true,
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};
