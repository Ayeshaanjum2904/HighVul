/* eslint-disable class-methods-use-this */
import axios from 'axios';

class CadastroTaxasService {
  async postTaxa(taxa) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/taxas`, taxa);
    if (response.status !== 200) {
      throw new Error('Falha ao inserir a nova taxa.');
    }
    return response;
  }
  async deleteTaxa(inicioVigencia, fimVigencia) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/taxas`,
      { params: { inicioVigencia, fimVigencia } },
    );
    if (response.status !== 200) {
      throw new Error('Falha ao deletar a taxa desejada');
    }
  }
}

export default new CadastroTaxasService();
