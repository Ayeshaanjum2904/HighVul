/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

class AlertasModalService {
  async sendAlerta(mensagemRede) {
    mensagemRede.selectedBrands = mensagemRede.selectedBrands.map((b) => b.value);
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/mensagem-rede`, mensagemRede);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar inserir um novo Alerta');
    }

    return response.data;
  }

  async updateAlerta(idAlerta, mensagemRede) {
    mensagemRede.selectedBrands = mensagemRede.selectedBrands.map((b) => b.value);
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/mensagem-rede/${idAlerta}`, mensagemRede);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar atualizar o Alerta: ${idAlerta}`);
    }

    return response.data;
  }

  async getAlerta(alertaId) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/mensagem-rede/${alertaId}`);
    if (response.status === 200) {
      const alerta = response.data;
      if (_.isArray(alerta?.selectedBrands)) {
        // eslint-disable-next-line new-cap
        alerta.startDate = new moment(alerta.startDate);
        // eslint-disable-next-line new-cap
        alerta.endDate = new moment(alerta.endDate);
        alerta.selectedBrands = alerta.selectedBrands.map((b) => ({ value: b, text: b }));
      }
      return alerta;
    }

    throw new Error(`Falha ao tentar buscar os detalhes do Alertas: ${alertaId}`);
  }

  async deleteUrlImagem(key, alertaId = null) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/mensagem-rede/urlImagem`, { params: { alertaId, key } });
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar remover a url da imagem!');
    }

    return response.data;
  }

  async getUrlUploadImagem(fileType, fileName, alertaId = null) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/mensagem-rede/urlImagem`, { params: { alertaId, fileType, fileName } });

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload da imagem!');
    }

    return response.data;
  }

  async uploadImagem(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload da imagem!');
    }

    return response.data;
  }

  async getSignedUrl(key, fileName) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/mensagem-rede/urlImagem/download`, { params: { key, fileName } });

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar obter a URL assinada da imagem!');
    }

    return response.data.result;
  }
}

export default new AlertasModalService();
