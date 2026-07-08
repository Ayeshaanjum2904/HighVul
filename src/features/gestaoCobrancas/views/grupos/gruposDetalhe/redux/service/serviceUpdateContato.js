/* eslint-disable class-methods-use-this */
import axios from 'axios';

class GruposUpdateContatoService {
  async getContatosAssociacao() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/grupos/contatos`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao buscar os contatos');
    }

    return response.data;
  }
  async insertContatos(idGrupo, associacoes) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}/contatos`,
      { associacoes },
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao  associar os contatos ao grupo: ${idGrupo}`);
    }

    return response.data;
  }

  async deleteContato(id, idContato) {
    try {
      const response = await axios.delete(
        `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${id}/contatos`,
        { params: { idContato } },
      );

      if (!response.data) {
        throw new Error(`Error when delete contato ${idContato} of grupo ${id}`);
      }
    } catch (error) {
      throw new Error(`Error when update contato ${idContato} of grupo ${id}`);
    }
  }
}

export default new GruposUpdateContatoService();
