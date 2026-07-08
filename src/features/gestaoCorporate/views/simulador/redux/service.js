/* eslint-disable class-methods-use-this */
import axios from 'axios';

class SimuladorService {
  async salvarTaxas(dadosConvertidos) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/simulador/taxas`,
      dadosConvertidos,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao salvar taxas');
    }

    return response.data;
  }

  async getConfiguracaoTaxasAtuais() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/simulador/taxas-atuais`,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar configuração de taxas');
    }

    return response.data;
  }

  async exportarTaxas() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/simulador/taxas/exportar`,
      { responseType: 'blob' },
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao exportar taxas');
    }

    return response.data;
  }
}

export default new SimuladorService();
