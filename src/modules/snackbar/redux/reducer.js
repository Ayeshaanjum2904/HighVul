import actions from './actions';

const INITIAL_STATE = {
  snackbarList: [],
  nextId: 0,
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.ADD_SNACKBAR:
      return {
        ...state,
        snackbarList: [
          ...state.snackbarList,
          {
            id: state.nextId,
            type: action.payload.type,
            message: action.payload.message,
            delay: action.payload.delay,
          },
        ],
        nextId: state.nextId + 1,
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarList: state.snackbarList.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
