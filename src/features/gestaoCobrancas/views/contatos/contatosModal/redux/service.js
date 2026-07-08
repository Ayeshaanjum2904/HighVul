/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ContatosModalService {
  async sendContato(contato) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/contatos`, contato);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error('Falha ao tentar inserir um novo Contato');
    }
  }

  async updateContato(contato) {
    try {
      const response = await axios.put(`${window.env.REACT_APP_API_URL}/cobrancas/contatos/${contato.id}`, contato);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error(`Falha ao tentar atualizar o Contato: ${contato.id}`);
    }
  }

  async getPapeis() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/contatos/papeis`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao buscar os papeis');
    }

    return response.data;
  }

  async validateEmail(email) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/contatos/email`, email);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error(`Falha ao tentar validar o email: ${email}`);
    }
  }

  async validateTelefone(telefone) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/cobrancas/contatos/telefone`, telefone);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error(`Falha ao tentar validar o telefone: ${telefone}`);
    }
  }
}

export default new ContatosModalService();
