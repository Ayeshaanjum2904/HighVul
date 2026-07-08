/* eslint-disable class-methods-use-this */
import axios from 'axios';

class CondicoesComerciaisService {
  async getCondicoes(filters) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais`, {
      params: {
        ...filters,
      },
    });
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de condições comerciais');
    }

    return {
      ...response.data,
      condicoes: response.data.condicoes.map((d) => ({
        ...d,
        vigenciaInicio: new Date(d.vigenciaInicio),
        vigenciaFim: new Date(d.vigenciaFim),
      })),
    };
  }

  async disableCondicao(id) {
    const response = await axios.patch(
      `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/disable/${id}`,
    );

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar desativar a condição: ${id}`);
    }

    return response.data;
  }
}

export default new CondicoesComerciaisService();
