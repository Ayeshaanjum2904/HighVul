/* eslint-disable class-methods-use-this */

import axios from 'axios';

class ComunicadosService {
  async getFilters() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/central-comunicados/filter/brands-staff`);
    if (!result.data) throw new Error('Erro ao buscar as brands de comunicados');

    if (result.status === 200) {
      const brandsList = result.data.map((item) => {
        const value = item.descricao;
        const text = item.descricao;
        return { value, text };
      });
      return brandsList;
    }
    return [];
  }

  async getComunicados(pageParams, filters) {
    const payload = {
      brands: filters.brand.map((obj) => obj.value),
      query: filters.titulo,
      page: pageParams.page,
      itensPorPage: pageParams.ipp,
      isFundao: 0,
      dataInicio: filters.dataInicio,
      dataFim: filters.dataFim,
      nomeColuna: filters.nomeColuna,
      sentidoOrdenacao: filters.sentidoOrdenacao,
    };

    const response = await axios.post(`${window.env.REACT_APP_API_URL}/central-comunicados/documentos-staff`, payload);
    if (response.status !== 200 || !response.data) {
      throw new Error('Erro ao buscar comunicados');
    }
    response.data.documentos = response.data.documentos.map((d) => ({
      ...d,
      dataEmissao: new Date(d.dataEmissao),
    }));

    return response.data;
  }

  async excluiComunicado(key) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/central-comunicados/delete-comunicado/${key}`,
    );

    if (response.data !== true || response.status !== 200) {
      throw new Error('Falha ao deletar arquivo');
    }
  }
}
export default new ComunicadosService();
