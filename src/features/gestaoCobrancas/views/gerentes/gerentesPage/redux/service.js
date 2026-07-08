/* eslint-disable class-methods-use-this */
import axios from 'axios';

class GerentesPageService {
  async getAssociacoes(body) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/gerentes/associacoes`, body);

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }
}

export default new GerentesPageService();
