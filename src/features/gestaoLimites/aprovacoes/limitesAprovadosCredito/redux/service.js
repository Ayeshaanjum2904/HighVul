/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import axios from 'axios';

class LimitesAprovadosCreditoService {
  async updateAndSaveStatus(dados) {
    try {
      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/status`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar status!');
    }
  }
}

export default new LimitesAprovadosCreditoService();
