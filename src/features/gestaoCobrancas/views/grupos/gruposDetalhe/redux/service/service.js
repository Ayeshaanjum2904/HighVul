/* eslint-disable class-methods-use-this */
import axios from 'axios';

class GruposDetalheService {
  async getDetalhesGrupo(idGrupo) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}`,
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao buscar as informações do grupo ${idGrupo}`);
    }

    return response.data;
  }

  async getConcessionariasGrupo(idGrupo) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}/concessionarias`,
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao buscar as informações das concessionarias associadas ao grupo: ${idGrupo}`);
    }

    return response.data;
  }

  async getContatosGrupo(idGrupo) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}/contatos`,
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao buscar as informações dos contatos associadas ao grupo: ${idGrupo}`);
    }

    return response.data;
  }

  async getHistoricoGrupo(idGrupo) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}/historico`,
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao buscar as informações do histórico do grupo: ${idGrupo}`);
    }

    return response.data.map((d) => ({
      ...d,
      dataEnvio: new Date(d.dataEnvio),
    }));
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
  async getDealers() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/concessionarias`,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar as concessionárias');
    }

    return response.data;
  }
}

export default new GruposDetalheService();
