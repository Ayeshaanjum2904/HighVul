/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

class CotnatosModalService {
  async insertGrupo(grupo) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/grupos`, grupo);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error('Falha ao tentar inserir um novo Grupo');
    }
  }

  async getMarcas() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/marcas`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao buscar a lista de brands');
    }

    return response.data;
  }

  async getRegionais() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/regionais`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao buscar a lista de regionais');
    }

    return response.data;
  }
}

export default new CotnatosModalService();
