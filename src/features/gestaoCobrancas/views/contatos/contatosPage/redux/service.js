/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ContatosPageService {
  async getContatos(filters) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/contatos`, {
      params: {
        page: filters.page,
        ipp: filters.ipp,
        texto: filters.texto,
      },
    });

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de contatos');
    }

    return response.data;
  }

  async deleteContato(contatoId) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/cobrancas/contatos/${contatoId}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar deletar o Contato: ${contatoId}`);
    }

    return response.data;
  }
  async exportarRelatorio() {
    try {
      const response = await axios.get(
        `${window.env.REACT_APP_API_URL}/cobrancas/contatos/relatorios`,
        { responseType: 'blob' },
      );

      if (!response || response.status !== 200) {
        throw new Error('Erro ao fazer download do relatório de contatos');
      }

      return response.data;
    } catch (error) {
      throw new Error(`Falha ao exportar relatório de contatos: ${error.message}`);
    }
  }
}

export default new ContatosPageService();
