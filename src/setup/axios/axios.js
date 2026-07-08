import axios from 'axios';
import qs from 'qs';
import { v1 as uuid } from 'uuid';

import { minutesFromNow } from 'utils/time';

import AuthService from 'modules/auth/authService';
import { AuthStorage } from 'modules/auth/authStorage';
import { AuthOperations } from 'modules/auth/redux';
import store from '../store';

import { getCancellationToken } from './cancellation';

const HEADER_FIDIS_USER_ID = 'fidis-user-id';
const HEADER_FIDIS_USER_EMAIL = 'fidis-user-email';

const addHeaders = (config) => {
  const newConfig = config;
  newConfig.headers.Authorization = AuthStorage.getToken();
  newConfig.headers[HEADER_FIDIS_USER_ID] = AuthStorage.getCurrentUserId();
  newConfig.headers[HEADER_FIDIS_USER_EMAIL] = AuthStorage.getCurrentUserEmail();
  newConfig.headers['fidis-request-id'] = uuid().toString().substring(0, 8);
  return newConfig;
};

const invalidateSession = () => {
  store.dispatch(AuthOperations.setSessionExpired());
};

const setErrorMessage = (message) => {
  store.dispatch(AuthOperations.setErrorMessage(message));
};

export function setupAxios() {
  axios.interceptors.request.use(
    (config) => {
      const newConfig = addHeaders(config);
      newConfig.cancelToken = getCancellationToken();
      if ((config.method === 'post' || config.method === 'put' || config.method === 'patch' || config.method === 'delete')
&& !(config.data instanceof FormData)) {
        newConfig.data = AuthStorage.getEncryptedBody(config.data);
      }
      return newConfig;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    async (response) => {
      if (AuthStorage.shouldRefreshToken()) {
        AuthStorage.ExecuteTokenRefresh(async () => {
          const { token } = (await AuthService.Refresh(AuthStorage.getCurrentUserEmail())).data;

          AuthStorage.setToken(token);
          AuthStorage.setNextValidationDate(minutesFromNow(55));
        });
      }
      return Promise.resolve(response);
    },
    (error) => {
      const temp = error.response.request.responseURL.split('/');
      const route = `${temp[temp.length - 2]}/${temp[temp.length - 1]}`;
      if (route === 'authorize/login' && error.response && error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage);
      }

      if (error && error.response && error.response.status === 401) {
        const header = error.response.headers['security-token'];
        if (header && header === 'invalid') {
          invalidateSession();
        }
      }

      return Promise.reject(error);
    },
  );

  axios.defaults.paramsSerializer = (params) => (
    qs.stringify(params, {
      arrayFormat: 'repeat',
      skipNulls: true,
    })
  );
}
