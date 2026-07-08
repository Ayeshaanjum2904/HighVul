import actions from './actions';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
