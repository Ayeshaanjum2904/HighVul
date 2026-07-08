/* eslint-disable class-methods-use-this */
import axios from 'axios';

class HistoricoPageService {
  async getHistorico(filters) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/historicos`, filters);

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }
    return {
      ...response.data,
      historico: response.data.historico.map((h) => ({
        ...h,
        dataEnvio: new Date(h.dataEnvio),
      })),
    };
  }
}

export default new HistoricoPageService();
