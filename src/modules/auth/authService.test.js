/* eslint-env jest */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import authService from './authService';

const mockRes = {
  authorizationToken: '1234',
  userId: '123',
  dealerId: '918987',
};

describe('authService test', () => {
  it('should get info from a user and dealer', (done) => {
    const mock = new MockAdapter(axios);
    mock.onGet(`${window.env.REACT_APP_API_URL}/authorize`).reply(200, mockRes);

    authService.getUserAuthorization(123)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.data).toEqual(mockRes);
        done();
      });
  });
});
