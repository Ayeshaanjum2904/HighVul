import actions from './actions';

import { reduceGetConfiguracoes, INITIAL_STATE_GET_CONFIGURACOES } from './reduceGetConfiguracoes';

import { reduceGetTemplates, INITIAL_STATE_GET_TEMPLATES } from './reduceGetTemplates';

import { reduceUpdateConfig, INITIAL_STATE_UPDATE_CONFIG } from './reduceUpdateConfig';

const INITIAL_STATE = {
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  ...INITIAL_STATE_GET_CONFIGURACOES,
  ...INITIAL_STATE_GET_TEMPLATES,
  ...INITIAL_STATE_UPDATE_CONFIG,
};

export default (state = INITIAL_STATE, action = { type: '@@emailsPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_TEMPLATES)) {
    return reduceGetTemplates(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_GET_CONFIGURACOES)) {
    return reduceGetConfiguracoes(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_CONFIG)) {
    return reduceUpdateConfig(state, action);
  }
  switch (action.type) {
    case actions.types.ADD_SNACKBAR:
      return {
        ...state,
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: action.payload.message,
            type: action.payload.type,
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
