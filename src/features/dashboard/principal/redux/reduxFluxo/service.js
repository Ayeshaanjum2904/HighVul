/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { mapToDto } from '../serviceUtils';

class DashboardFluxo {
  async getFluxo(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/resumo-fluxo`,
      mapToDto(filters),
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o fluxo resumo do dashboard');
    }

    return response.data;
  }
}

export default new DashboardFluxo();
