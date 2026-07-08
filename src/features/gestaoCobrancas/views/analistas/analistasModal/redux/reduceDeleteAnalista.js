import actions from './actions';

export const INITIAL_STATE_DELETE_ANALISTA = {
  deleteAnalistaList: [],
};

export const reduceDeleteAnalista = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_ANALISTA_START:
      return {
        ...state,
        deleteAnalistaList: [
          ...state.deleteAnalistaList,
          action.payload.id,
        ],
      };
    case actions.types.DELETE_ANALISTA_SUCCESS:
      return {
        ...state,
        deleteAnalistaList: state.deleteAnalistaList.filter((item) => item !== action.payload.id),
        list: {
          ...state.list,
          analistas: state.list.analistas.filter((item) => item.id !== action.payload.id),
        },
      };
    case actions.types.DELETE_ANALISTA_ERROR:
      return {
        ...state,
        deleteAnalistaList: state.deleteAnalistaList.filter((item) => item !== action.payload.id),
      };
    default:
      return state;
  }
};
