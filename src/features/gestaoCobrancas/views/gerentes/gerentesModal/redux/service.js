/* eslint-disable class-methods-use-this */
import axios from 'axios';

class AnalistasModalService {
  async getGerentes(marca, regional) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/gerentes`, {
      params: {
        marca,
        regional,
      },
    });

    if (!response || response.status !== 200) {
      throw new Error(response.data.message);
    }

    return response.data;
  }

  async insertGerente(gerente) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/gerentes`, gerente);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error('Falha ao tentar inserir um novo Analista');
    }
  }

  async deleteGerente(id) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/cobrancas/gerentes/${id}`);

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }
  }

  async getMarcas() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/marcas`);

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }

  async getRegionais() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/regionais`);

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }
}

export default new AnalistasModalService();
