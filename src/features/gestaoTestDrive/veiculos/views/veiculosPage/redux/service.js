/* eslint-disable class-methods-use-this */
import axios from 'axios';

function mapArray(array) {
  return array.map((m) => m.value);
}
class VeiculosService {
  async getVeiculos(filters, veiculosList, ordenacao) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/veiculos`,
      {
        params: {
          texto: filters.texto,
          p: veiculosList.page,
          ipp: veiculosList.ipp,
          marca: mapArray(filters.marca),
          status: mapArray(filters.status),
          nomeColuna: ordenacao.nomeColuna,
          sentidoOrdenacao: ordenacao.sentidoOrdenacao,
        },
      },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a listagem de veiculos');
    }
    return response.data;
  }
}

export default new VeiculosService();
