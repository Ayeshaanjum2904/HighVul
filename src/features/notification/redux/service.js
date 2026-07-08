import axios from 'axios';

class InvoiceService {
  constructor() {
    this.URL_API = window.env.REACT_APP_API_URL;
  }

  async getNotifications(lastGet) {
    return axios.get(`${this.URL_API}/notifications/staff/`, {
      params: { lastGet },
    });
  }

  async markNotificationsRead(notifications) {
    const response = await axios.post(
      `${this.URL_API}/notifications/`,
      { notifications },
    );
    if (response.status !== 200) {
      throw new Error('Error submitting notifications');
    }
  }
}
export default new InvoiceService();
