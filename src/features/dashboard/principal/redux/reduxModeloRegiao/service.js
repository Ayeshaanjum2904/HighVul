/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { camelFormat } from 'utils/format';
import { mapToDto } from '../serviceUtils';

class DashboardPedidosModelo {
  async getModeloRegiao(filters) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/modelo-regiao`,
      mapToDto(filters),
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o fluxo de Modelo x Região do dashboard');
    }

    return response.data.map((d) => ({
      ...d,
      modelo: camelFormat(d.modelo),
      regioes: d.regioes.map((r) => ({
        ...r,
        regiao: camelFormat(r.regiao, 2),
      })),
    }));
  }
}

export default new DashboardPedidosModelo();
