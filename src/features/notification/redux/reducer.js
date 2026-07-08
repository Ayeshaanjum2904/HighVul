import actions from './actions';

export const INITIAL_STATE = {
  notifications: {
    listNotifications: [],
    exibirAlarme: false,
  },
  loading: false,
  loadingLastGet: false,
  isError: false,
  hasNotifications: false,
  isErrorPost: false,
  loadingPost: false,
  isErrorLastGet: false,
  isPostSending: false,
  lastGet: null,
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  const { type, payload } = action;

  switch (type) {
    case actions.types.NOTIFICATIONS_INIT_REQUEST:
      return {
        ...state,
        loading: true,
        isError: false,
      };
    case actions.types.NOTIFICATIONS_FINISH_REQUEST:
      return {
        ...state,
        isError: payload.isError,
        lastGet: payload.lastGet,
        loading: false,
        isPostSending: false,
      };
    case actions.types.NOTIFICATIONS_INIT_POST:
      return {
        ...state,
        loadingPost: true,
        isErrorPost: false,
        isPostSending: true,
      };
    case actions.types.NOTIFICATIONS_FINISH_POST:
      return {
        ...state,
        isErrorPost: payload.isError,
        loadingPost: false,
      };
    case actions.types.NOTIFICATIONS_INIT_REQUEST_LAST_GET:
      return {
        ...state,
        loadingLastGet: true,
        isErrorLastGet: false,
      };
    case actions.types.NOTIFICATIONS_FINISH_REQUEST_LAST_GET_SUCCESS:
      return {
        ...state,
        isErrorLastGet: false,
        lastGet: payload.lastGet,
        loadingLastGet: false,
      };
    case actions.types.NOTIFICATIONS_FINISH_REQUEST_LAST_GET_ERROR:
      return {
        ...state,
        isErrorLastGet: true,
        loadingLastGet: false,
      };
    case actions.types.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          listNotifications: action.payload.listNotifications,
          exibirAlarme: action.payload.exibirAlarme,
        },
      };
    case actions.types.CONCAT_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          listNotifications: [
            ...action.payload.listNotifications,
            ...state.notifications.listNotifications,
          ],
          exibirAlarme: action.payload.exibirAlarme,
        },
      };
    case actions.types.SET_HAS_NOTIFICATIONS:
      return {
        ...state,
        hasNotifications: payload.hasNotifications,
      };
    default:
      return state;
  }
};
