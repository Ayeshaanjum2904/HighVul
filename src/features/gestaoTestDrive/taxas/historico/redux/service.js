/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { formatDateForUrl } from 'utils/axios';

class HistoricoTaxaService {
  async getHistorico(filters, pagina, itensPorPagina) {
    const isPraticada = (praticada) => {
      if (praticada === 'a.m.') {
        return 1;
      }
      if (praticada === 'a.d.') {
        return 2;
      }
      return null;
    };

    const body = {
      page: pagina,
      ipp: itensPorPagina,
      inicioVigencia: formatDateForUrl(filters.dataInicio),
      fimVigencia: formatDateForUrl(filters.dataFim),
      brands: filters.brand.map((obj) => obj.value),
      praticada: isPraticada(filters.taxaPraticada),
    };

    const response = await
    axios.post(`${window.env.REACT_APP_API_URL}/taxas/historico`, body);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a histórico de taxas');
    }
    return response.data;
  }

  async deleteTaxa(id) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/taxas/${id}`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar excluir taxas');
    }
    return response.data;
  }

  async updateTaxa(taxa, idTaxa) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/taxas/${idTaxa}`, taxa);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar alterar taxa');
    }
    return response.data;
  }
}

export default new HistoricoTaxaService();
