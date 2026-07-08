/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ConcessionariasPageService {
  async getConcessionarias(filters, pageParams) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/concessionarias/filtros`, {
      brand: filters.brand,
      regional: filters.regional,
      page: pageParams.page,
      ipp: pageParams.ipp,
      busca: filters.query,
      corretorId: filters.codBuc,
    });

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }

  async exportarRelatorio(filters) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/concessionarias/relatorio`, {
        brand: filters.brand,
        regional: filters.regional,
      }, {
        responseType: 'blob',
      });

      if (!response || response.status !== 200) {
        throw new Error('Erro ao fazer download do relatório de contatos');
      }

      return response.data;
    } catch (error) {
      throw new Error(`Falha ao exportar relatório de contatos: ${error.message}`);
    }
  }
}

export default new ConcessionariasPageService();
