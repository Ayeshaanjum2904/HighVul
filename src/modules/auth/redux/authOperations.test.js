/* eslint-env jest */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { login } from './authOperations';
import * as AuthActions from './authActions';
import { Mixpanel } from '../..';

jest.mock('../authService');

const mockData = {
  authorizationToken: '1234',
  userId: '123',
  dealerId: '918987',
};

describe('authOperations test', () => {
  it('login: should dispatch INIT_LOGIN', (done) => {
    Mixpanel.init();
    const mockService = new MockAdapter(axios);
    mockService.onGet(`${window.env.REACT_APP_API_URL}/autheticate`).reply(200, mockData);

    const mockDispatch = jest.fn();
    Mixpanel.init();

    login('a@a', 'abc')(mockDispatch)
      .then(() => {
        expect(mockDispatch).toHaveBeenCalledWith({
          type: AuthActions.INIT_LOGIN,
          payload: {},
        });
        done();
      });
  });

  it('login: should dispatch FINISH_LOGIN on Error', (done) => {
    Mixpanel.init();
    const mockService = new MockAdapter(axios);
    mockService.onGet(`${window.env.REACT_APP_API_URL}/autheticate`).reply(400, mockData);

    const mockDispatch = jest.fn();
    Mixpanel.init();

    login('a@a', 'abc')(mockDispatch)
      .then(() => {
        expect(mockDispatch).toHaveBeenCalledWith(AuthActions.finishLogin(null, true));

        done();
      });
  });
});
