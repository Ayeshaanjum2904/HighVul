import moment from 'moment';
import actions from './actions';
import service from './service';
import selectors from './selectors';
import { isNotificationVisible } from './notificationRegistry';

const setStatusLeituraFirstGet = (notifications) => async (dispatch) => {
  const nlidas = notifications.filter((n) => n.lido === false);

  if (nlidas.length > 0) {
    await dispatch(actions.setHasNotifications(true));
  } else {
    await dispatch(actions.setHasNotifications(false));
  }
};

const getNotifications = () => async (dispatch, getState) => {
  try {
    await dispatch(actions.initNotificationsRequest());
    const notificationsResponse = await service.getNotifications();

    const { auth } = getState();
    const permissionsList = selectors.permissionList(auth);

    const visibleNotifications = notificationsResponse.data.notificacoes.filter(
      (notification) => isNotificationVisible(notification, permissionsList),
    );

    const exibirAlarme = visibleNotifications.length > 0
    && notificationsResponse.data.exibirAlarme;

    await dispatch(actions.setNotifications(
      visibleNotifications,
      exibirAlarme,
    ));
    await dispatch(setStatusLeituraFirstGet(visibleNotifications));
    dispatch(actions.finishNotificationsRequest(false, moment().format()));
  } catch (error) {
    await dispatch(actions.setNotifications([], false));
    dispatch(actions.finishNotificationsRequest(true));
  }
};

const setStatusLeituraLastGet = (notifications) => async (dispatch) => {
  const notificacoesNaoLidas = notifications.filter((n) => n.lido === false);

  if (notificacoesNaoLidas.length > 0) {
    await dispatch(actions.setHasNotifications(true));
  }
};

const getNotificationsLastGet = (lastGet) => async (dispatch) => {
  try {
    await dispatch(actions.initNotificationsRequestLastGet());
    const notifications = await service.getNotifications(lastGet);
    await dispatch(actions.concatNotifications(
      notifications.data.notificacoes,
      notifications.data.exibirAlarme,
    ));
    await dispatch(setStatusLeituraLastGet(notifications.data.notificacoes));
    dispatch(actions.finishNotificationsRequestLastGetSuccess(moment().format()));
  } catch (error) {
    dispatch(actions.finishNotificationsRequestLastGetError());
  }
};

const markNotificationsRead = (notifications) => async (dispatch) => {
  try {
    await dispatch(actions.initNotificationsPost());
    await service.markNotificationsRead(notifications);
    dispatch(actions.finishNotificationsPost(false));
  } catch (error) {
    dispatch(actions.finishNotificationsPost(true));
  }
};

export default {
  setStatusLeituraFirstGet,
  getNotifications,
  setStatusLeituraLastGet,
  getNotificationsLastGet,
  markNotificationsRead,
};
