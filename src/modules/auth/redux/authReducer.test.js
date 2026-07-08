/* eslint-env jest */
import authReducer from './authReducer';
import * as AuthActions from './authActions';

const INITIAL_STATE = {
  isLoading: false,
  isLoginError: false,
  user: null,
  permissions: null,
};

describe('authReducer test', () => {
  it('should do nothing when pass an unknown type', () => {
    const res = authReducer(
      INITIAL_STATE,
      { type: 'unknown', payload: {} },
    );
    expect(res).toBe(INITIAL_STATE);
  });

  it('should perform INIT_LOGIN action', () => {
    const res = authReducer(
      INITIAL_STATE,
      { type: AuthActions.INIT_LOGIN, payload: {} },
    );
    expect(res.isLoading).toBe(true);
  });

  it('should perform FINISH_LOGIN action', () => {
    const user = { name: 'user' };

    const res = authReducer(
      INITIAL_STATE,
      AuthActions.finishLogin(user, true),
    );

    expect(res.isLoading).toBe(false);
    expect(res.isLoginError).toBe(true);
    expect(res.user).toEqual(user);
  });

  it('should SET_USER', () => {
    const user = { name: 'user' };

    const res = authReducer(
      INITIAL_STATE,
      AuthActions.setUser(user),
    );

    expect(res.user).toEqual(user);
  });
});
