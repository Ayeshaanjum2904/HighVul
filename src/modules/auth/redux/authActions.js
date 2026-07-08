export const INIT_LOGIN = 'auth/INIT_LOGIN';
export const FINISH_LOGIN = 'auth/FINISH_LOGIN';
export const SET_USER = 'auth/SET_USER';
export const SET_SESSION_EXPIRED = 'auth/SET_SESSION_EXPIRED';
export const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';

export const initLogin = () => ({
  type: INIT_LOGIN,
  payload: {},
});

export const finishLogin = (user, isLoginError = false) => ({
  type: FINISH_LOGIN,
  payload: {
    user,
    isLoginError,
  },
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const setSessionExpired = (expired) => ({
  type: SET_SESSION_EXPIRED,
  payload: {
    expired,
  },
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  payload: {
    message,
  },
});
