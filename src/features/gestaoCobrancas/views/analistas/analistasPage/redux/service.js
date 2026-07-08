/* eslint-disable class-methods-use-this */
import axios from 'axios';

class AnalistasPageService {
  async getAssociacoes(filters, pageParams) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/analistas/associacoes`, {
      params: {
        marca: filters.marca,
        regionais: filters.regional.map((regional) => regional.value),
        page: pageParams.page,
        ipp: pageParams?.ipp,
      },
    });

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }
}

export default new AnalistasPageService();
