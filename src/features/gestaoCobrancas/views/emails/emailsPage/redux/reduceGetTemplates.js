import actions from './actions';

export const INITIAL_STATE_GET_TEMPLATES = {
  templates: {
    isLoading: false,
    isError: false,
    list: [],
  },
};

export const reduceGetTemplates = (state, action) => {
  switch (action.type) {
    case actions.types.GET_TEMPLATES_START:
      return {
        ...state,
        templates: {
          ...state.templates,
          isLoading: true,
          isError: false,
          list: null,
        },
      };
    case actions.types.GET_TEMPLATES_SUCCESS:
      return {
        ...state,
        templates: {
          ...state.templates,
          isLoading: false,
          isError: false,
          list: action.payload.templates,
        },
      };
    case actions.types.GET_TEMPLATES_ERROR:
      return {
        ...state,
        templates: {
          ...state.templates,
          isLoading: false,
          isError: true,
          list: null,
        },
      };
    default:
      return state;
  }
};
