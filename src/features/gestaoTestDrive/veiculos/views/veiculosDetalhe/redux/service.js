/* eslint-disable class-methods-use-this */
import axios from 'axios';

class VeiculoDetalheService {
  async getDetalheVeiculo(idVeiculo) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/veiculos/${idVeiculo}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha na busca dos detalhes do veículo: ${idVeiculo}`);
    }

    return response.data;
  }

  async deleteVeiculo(idVeiculo) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/veiculos/${idVeiculo}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao deletar o veículo: ${idVeiculo}`);
    }

    return response.data;
  }
}
export default new VeiculoDetalheService();
