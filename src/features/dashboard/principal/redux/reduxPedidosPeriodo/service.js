/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { mapToDto } from '../serviceUtils';

class DashboardedidosPeriodo {
  async getPedidosPeriodo(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/pedidos-periodo`,
      mapToDto(filters),
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar os dados do gráfico de pedidos por periodo do dashboard');
    }

    return response.data.map((d) => ({
      ...d,
      dataHora: new Date(d.dataHora),
    }));
  }
}

export default new DashboardedidosPeriodo();
