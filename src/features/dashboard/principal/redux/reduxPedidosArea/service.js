/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { mapToDto } from '../serviceUtils';

class DashboardedidosArea {
  async getPedidosArea(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/pedidos-area`,
      mapToDto(filters),
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o fluxo de Pedidos x Area do dashboard');
    }

    return response.data;
  }
}

export default new DashboardedidosArea();
