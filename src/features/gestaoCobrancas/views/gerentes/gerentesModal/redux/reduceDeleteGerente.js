import actions from './actions';

export const INITIAL_STATE_DELETE_GERENTE = {
  deleteGerenteList: [],
};

export const reduceDeleteGerente = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_GERENTE_START:
      return {
        ...state,
        deleteGerenteList: [
          ...state.deleteGerenteList,
          action.payload.id,
        ],
      };
    case actions.types.DELETE_GERENTE_SUCCESS:
      return {
        ...state,
        deleteGerenteList: state.deleteGerenteList.filter((item) => item !== action.payload.id),
        list: {
          ...state.list,
          gerentes: state.list.gerentes.filter((item) => item.id !== action.payload.id),
        },
      };
    case actions.types.DELETE_GERENTE_ERROR:
      return {
        ...state,
        deleteGerenteList: state.deleteGerenteList.filter((item) => item !== action.payload.id),
      };
    default:
      return state;
  }
};
