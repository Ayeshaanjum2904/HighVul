/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

class DescontosPageService {
  async getDescontos(filters) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/filters`, filters);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de descontos');
    }
    return {
      ...response.data,
      descontos: response.data.descontos.map((d) => ({
        ...d,
        vigenciaInicio: new Date(d.vigenciaInicio),
        vigenciaFim: new Date(d.vigenciaFim),
      })),
    };
  }

  async disableDesconto(id) {
    const response = await axios.patch(
      `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/disable/${id}`,
    );

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar deletar o desconto: ${id}`);
    }

    return response.data;
  }
}

export default new DescontosPageService();
