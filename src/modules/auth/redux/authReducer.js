import _ from 'lodash';
import { AuthStorage } from '../authStorage';

import {
  INIT_LOGIN, FINISH_LOGIN, SET_USER, SET_SESSION_EXPIRED, SET_ERROR_MESSAGE,
} from './authActions';

export const INITIAL_STATE = {
  isLoading: false,
  isLoginError: false,
  user: AuthStorage.getCurrentUser(),
  sessionExpired: false,
  errorMessage: 'Login inválido',
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case INIT_LOGIN:
      return {
        ...state,
        isLoading: true,
        isLoginError: false,
      };
    case FINISH_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isLoginError: action.payload.isLoginError,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case SET_SESSION_EXPIRED:
      return {
        ...state,
        sessionExpired: action.payload.expired,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: _.isNull(action.payload.message) || _.isEmpty(action.payload.message) ? 'Login inválido'
          : action.payload.message,
      };
    default:
      return state;
  }
};
