import axios from 'axios';
import { getDateFromEvent, getLetterStatus } from './helper';

class ResgateService {
  constructor() {
    this.URL_API = window.env.REACT_APP_API_URL;
  }

  async getResgates(pageParams, filters, startDate, endDate) {
    const { page, ipp } = pageParams;
    const { status, titulo } = filters;
    const body = {
      itensPerPage: ipp,
      page,
      titulo,
      status: getLetterStatus(status),
      dataInicioVigencia: getDateFromEvent(startDate),
      dataFimVigencia: getDateFromEvent(endDate),
    };

    const response = await axios.post(`${this.URL_API}/fidc/gestao-resgates/mensagens`, body);
    if (!response || response.status !== 200) {
      throw new Error('Error get resgates');
    }
    return response.data;
  }

  async updateResgateStatus(id, status) {
    const params = { status };

    const response = await axios.patch(`${this.URL_API}/fidc/gestao-resgates/mensagem/${id}/atualizar-status`, null, { params });
    if (!response || response.status !== 200) {
      throw new Error('Error update resgate status');
    }
    return response.data;
  }

  async createMessage(params) {
    const response = await axios.post(`${this.URL_API}/fidc/gestao-resgates/mensagem/publicar`, params);
    if (!response || response.status !== 200) {
      throw new Error('Error update resgate status');
    }
    return response.data;
  }
}

export default new ResgateService();
