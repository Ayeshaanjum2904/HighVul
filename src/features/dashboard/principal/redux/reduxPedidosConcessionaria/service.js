/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { mapToDto } from '../serviceUtils';

class DashboardPedidosConcessionaria {
  async getPedidosConcessionaria(filters, payload) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/dashboard/pedidos/pedidos-concessionaria`,
      { ...mapToDto(filters), payload },
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o fluxo de Pedidos x Grupo Concessionaria do dashboard');
    }

    return response.data;
  }

  async downloadConcessionariosXlsx(filters, payload) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/dashboard/relatorio/concessionarios`, {
      ...mapToDto(filters),
      payload,
    }, { responseType: 'blob' });
    if (!response || response.status !== 200) {
      throw new Error('Error downloading xlsx');
    }

    return response.data;
  }
}

export default new DashboardPedidosConcessionaria();
