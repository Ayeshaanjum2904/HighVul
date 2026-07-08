import axios from 'axios';

class AuthService {
  constructor() {
    this.URL_API = window.env.REACT_APP_API_URL;
  }

  async getUserAuthorization(cognitoToken) {
    return axios.get(`${this.URL_API}/authorize`, { headers: { 'cognito-token': cognitoToken } });
  }

  async Login(username, password) {
    const response = await axios.post(`${this.URL_API}/authorize/login`, { username, password });
    if (!response.data.success) {
      throw response.data.errorMessage;
    }
    return response;
  }

  async Logoff() {
    return axios.post(`${this.URL_API}/authorize/logoff`);
  }

  async Refresh(username) {
    return axios.post(`${this.URL_API}/authorize/refresh`, { username });
  }

  async getDealers() {
    return axios.get(`${this.URL_API}/dealers`);
  }
}

export default new AuthService();
