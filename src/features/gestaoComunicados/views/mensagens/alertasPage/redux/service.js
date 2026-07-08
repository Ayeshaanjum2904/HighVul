/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import _ from 'lodash';

class AlertasPageService {
  async getFilters() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/mensagem-rede/brands`);
    if (!result.data) throw new Error('Empty data fetching filters');
    if (result.status === 200) {
      const brandsList = result.data.map((item) => {
        const value = item.brandName;
        const text = item.brandName;
        return { value, text };
      });
      return brandsList;
    }
    return [];
  }

  async getAlertas(state) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/mensagem-rede/list`, {
      p: state.pageParams.page ?? 0,
      ipp: state.pageParams.ipp,
      Brands: state.filters.brand.map((obj) => obj.value),
      Titulo: state.filters.titulo,
      DataInicio: state.filters.dataInicio,
      DataFim: state.filters.dataFim,
      NomeColuna: state.filters.nomeColuna,
      SentidoOrdenacao: state.filters.sentidoOrdenacao,
    });

    if (response.status === 200) {
      if (_.isArray(response?.data?.alertas)) {
        response.data.alertas.forEach((a) => {
          a.dataCriacao = new Date(a.dataCriacao);
          a.startDate = new Date(a.startDate);
          a.endDate = new Date(a.endDate);
        });
      }
      return response.data;
    }

    throw new Error('Falha ao tentar buscar os Alertas');
  }

  async deleteAlerta(alertaId) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/mensagem-rede/${alertaId}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar deletar o Alerta: ${alertaId}`);
    }

    return response.data;
  }
}

export default new AlertasPageService();
