/* eslint-disable class-methods-use-this */
import axios from 'axios';

class EmailsModalService {
  async updateTemplates(email) {
    const response = await axios.put(
      `${window.env.REACT_APP_API_URL}/cobrancas/emails/templates/${email.id}`,
      email,
    );

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao fazer update do email template ${email.id}`);
    }

    return response.data;
  }
}

export default new EmailsModalService();
