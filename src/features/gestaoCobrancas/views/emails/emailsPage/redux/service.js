/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

class EmailsPageService {
  async getTemplates() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/emails/templates`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de templates');
    }

    return response.data;
  }

  async getConfiguracoes() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/cobrancas/emails/configuracoes`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de configurações');
    }

    return response.data;
  }

  async updateConfig(updateConfigDto) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/cobrancas/emails/configuracoes`, updateConfigDto);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao atualizar as configurações ${updateConfigDto}`);
    }

    return response.data;
  }
}

export default new EmailsPageService();
