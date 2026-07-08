/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

class GruposPageService {
  async getGrupos(filters) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/grupos/filtros`, filters);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de grupos');
    }

    return response.data;
  }

  async updateConfig(updateConfigDto) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/cobrancas/grupos`, updateConfigDto);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao atualizar as configurações do grupo ${updateConfigDto}`);
    }

    return response.data;
  }

  async exportRelatorio(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/relatorios`,
      filters,
      { responseType: 'blob' },
    );

    if (!response || response.status !== 200) {
      throw new Error('Falha ao exportar o relatório de grupos');
    }

    return response.data;
  }
}

export default new GruposPageService();
