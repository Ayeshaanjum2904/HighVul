const NOTIFICATIONS_FINISH_REQUEST = 'notification/NOTIFICATIONS_FINISH_REQUEST';
const NOTIFICATIONS_INIT_REQUEST = 'notification/NOTIFICATIONS_INIT_REQUEST';
const SET_NOTIFICATIONS = 'notification/SET_NOTIFICATIONS';
const SET_HAS_NOTIFICATIONS = 'notification/SET_HAS_NOTIFICATIONS';
const NOTIFICATIONS_INIT_POST = 'notification/NOTIFICATIONS_INIT_POST';
const NOTIFICATIONS_FINISH_POST = 'notification/NOTIFICATIONS_FINISH_POST';
const NOTIFICATIONS_INIT_REQUEST_LAST_GET = 'notification/NOTIFICATIONS_INIT_REQUEST_LAST_GET';
const NOTIFICATIONS_FINISH_REQUEST_LAST_GET_ERROR = 'notification/NOTIFICATIONS_FINISH_REQUEST_LAST_GET_ERROR';
const NOTIFICATIONS_FINISH_REQUEST_LAST_GET_SUCCESS = 'notification/NOTIFICATIONS_FINISH_REQUEST_LAST_GET_SUCCESS';
const CONCAT_NOTIFICATIONS = 'notification/CONCAT_NOTIFICATIONS';

const initNotificationsRequest = () => ({
  type: NOTIFICATIONS_INIT_REQUEST,
});

const initNotificationsPost = () => ({
  type: NOTIFICATIONS_INIT_POST,
});

const finishNotificationsPost = (isError) => ({
  type: NOTIFICATIONS_FINISH_POST,
  payload: {
    isError,
  },
});

const initNotificationsRequestLastGet = () => ({
  type: NOTIFICATIONS_INIT_REQUEST_LAST_GET,
});

const finishNotificationsRequestLastGetSuccess = (lastGet) => ({
  type: NOTIFICATIONS_FINISH_REQUEST_LAST_GET_SUCCESS,
  payload: {
    lastGet,
  },
});

const finishNotificationsRequestLastGetError = () => ({
  type: NOTIFICATIONS_FINISH_REQUEST_LAST_GET_ERROR,
});

const setNotifications = (listNotifications, exibirAlarme) => ({
  type: SET_NOTIFICATIONS,
  payload: {
    listNotifications,
    exibirAlarme,
  },
});

const concatNotifications = (listNotifications, exibirAlarme) => ({
  type: CONCAT_NOTIFICATIONS,
  payload: {
    listNotifications,
    exibirAlarme,
  },
});

const finishNotificationsRequest = (isError, lastGet) => ({
  type: NOTIFICATIONS_FINISH_REQUEST,
  payload: {
    isError,
    lastGet,
  },
});

const setHasNotifications = (hasNotifications) => ({
  type: SET_HAS_NOTIFICATIONS,
  payload: {
    hasNotifications,
  },
});

export default {
  types: {
    NOTIFICATIONS_FINISH_REQUEST,
    NOTIFICATIONS_INIT_REQUEST,
    SET_NOTIFICATIONS,
    SET_HAS_NOTIFICATIONS,
    NOTIFICATIONS_INIT_POST,
    NOTIFICATIONS_FINISH_POST,
    NOTIFICATIONS_INIT_REQUEST_LAST_GET,
    NOTIFICATIONS_FINISH_REQUEST_LAST_GET_ERROR,
    NOTIFICATIONS_FINISH_REQUEST_LAST_GET_SUCCESS,
    CONCAT_NOTIFICATIONS,
  },
  initNotificationsRequest,
  initNotificationsPost,
  finishNotificationsPost,
  initNotificationsRequestLastGet,
  finishNotificationsRequestLastGetSuccess,
  finishNotificationsRequestLastGetError,
  setNotifications,
  concatNotifications,
  finishNotificationsRequest,
  setHasNotifications,
};
