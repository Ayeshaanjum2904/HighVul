/* eslint-disable class-methods-use-this */
import axios from 'axios';

class HistoricoDetalheService {
  async getDetalhesEmail(idEmail) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/historicos/${idEmail}/detalhes`,
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao buscar as informações do email ${idEmail}`);
    }

    return {
      ...response.data,
      dataEnvio: new Date(response.data.dataEnvio),
    };
  }
}

export default new HistoricoDetalheService();
