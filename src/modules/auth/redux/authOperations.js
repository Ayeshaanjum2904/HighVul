import { minutesFromNow } from 'utils/time';
import logger from 'utils/logger';

import { Mixpanel } from 'modules';
import { AuthStorage } from '../authStorage';

import AuthService from '../authService';
import * as Actions from './authActions';

export const login = (email, password) => async (dispatch) => {
  await dispatch(Actions.initLogin());
  try {
    const { authorization } = (await AuthService.Login(email, password)).data;

    if (!authorization.user.dealers && !authorization.user.companies) {
      await dispatch(Actions.finishLogin(null, true));
      return;
    }

    AuthStorage.setNextValidationDate(minutesFromNow(3));
    AuthStorage.saveLoginInfo(authorization.user, authorization.token);
    Mixpanel.identifyUser();

    await dispatch(Actions.finishLogin(authorization.user, false));
    Mixpanel.trackLoginAttempt(email, false);
  } catch (e) {
    logger.error(e);
    AuthStorage.clearAll();
    Mixpanel.trackLoginAttempt(email, true);
    await dispatch(Actions.finishLogin(null, true));
  }
};

export const setErrorMessage = (message) => (dispatch) => {
  dispatch(Actions.setErrorMessage(message));
};

export const setSessionExpired = () => (dispatch) => {
  dispatch(Actions.setSessionExpired(true));
};

export const invalidateSession = () => async (dispatch) => {
  const userEmail = AuthStorage.getCurrentUserEmail();
  await AuthService.Logoff();
  AuthStorage.clearAll();

  dispatch(Actions.setSessionExpired(false));
  dispatch(Actions.setUser(null));
  Mixpanel.trackLogoff(userEmail);
};

export const refreshToken = () => async () => {
  if (AuthStorage.shouldRefreshToken()) {
    AuthStorage.ExecuteTokenRefresh(async () => {
      const { token } = (await AuthService.Refresh(AuthStorage.getCurrentUserEmail())).data;

      AuthStorage.setToken(token);
      AuthStorage.setNextValidationDate(minutesFromNow(55));
    });
  }
};
