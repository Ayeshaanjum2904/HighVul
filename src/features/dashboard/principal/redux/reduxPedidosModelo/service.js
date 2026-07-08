/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { mapToDto } from '../serviceUtils';

class DashboardPedidosModelo {
  async getPedidosModelo(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/pedidos-modelo`,
      mapToDto(filters),
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o fluxo de  Pedidos x Modelo do dashboard');
    }

    return response.data;
  }
}

export default new DashboardPedidosModelo();
