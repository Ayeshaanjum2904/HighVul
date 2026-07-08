/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { camelFormat } from 'utils/format';
import { mapToDto } from '../serviceUtils';

class DashboardPedidosRegiao {
  async getPedidosRegiao(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/pedidos-regiao`,
      mapToDto(filters),
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o fluxo de Pedidos x Regiao do dashboard');
    }

    return response.data.map((d) => ({
      ...d,
      regiao: camelFormat(d.regiao, 2),
    }));
  }
}

export default new DashboardPedidosRegiao();
