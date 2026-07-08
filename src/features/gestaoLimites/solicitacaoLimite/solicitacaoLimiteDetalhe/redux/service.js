/* eslint-disable class-methods-use-this */
import axios from 'axios';
import _ from 'lodash';

class DetalheSolicitacaoService {
  async getDetalheSolicitacao(solicitacaoId) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/solicitacoes/${solicitacaoId}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha na busca dos detalhes da solicitacao${solicitacaoId}!`);
    }

    response.data.data = new Date(response.data.data);

    if (_.isArray(response?.data?.comentarios)) {
      response.data.comentarios.forEach((p) => {
        // eslint-disable-next-line no-param-reassign
        p.data = new Date(p.data);
      });
    }
    return response.data;
  }

  async updateStatus(solicitacaoId, updateStatusDto) {
    try {
      const response = await axios.put(`${window.env.REACT_APP_API_URL}/solicitacoes/${solicitacaoId}/status`, updateStatusDto);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response?.data;
      }
      throw e;
    }
  }

  async cancelSolicitacao(solicitacaoId, currentStatus) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/solicitacoes/${solicitacaoId}/cancel`, { currentStatus });

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao atualizar o status da solicitação!');
    }

    return response.data;
  }

  async setSolicitacaoVisualizada(solicitacaoId) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/solicitacoes/${solicitacaoId}/visualizado`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao atualizar o campo de visualizado da solicitação!');
    }

    return response.data;
  }

  async sendComentario(solicitacaoId, conteudo) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/solicitacoes/${solicitacaoId}/comentarios`, { conteudo });
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar enviar um novo comentario!');
    }
    return response.data;
  }
}

export default new DetalheSolicitacaoService();
