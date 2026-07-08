/* eslint-disable class-methods-use-this */
import axios from 'axios';

class LimitesAprovadosObservacaoService {
  async getObservacoes(userEmail, body) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/observacao-historico/dados`, body, {
        headers: {
          'fidis-user-email': userEmail,
        },
      });
      return response.data;
    } catch (e) {
      throw new Error('Falha ao trazer observações!');
    }
  }

  async insertObservacao(userEmail, body) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/observacao-historico`, body, {
        headers: {
          'fidis-user-email': userEmail,
        },
      });
      return response;
    } catch (e) {
      throw new Error('Falha ao inserir observação!');
    }
  }
  async insertControleObservacao(userEmail, body) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/observacao-historico/controle-observacao`, body, {
        headers: {
          'fidis-user-email': userEmail,
        },
      });
      return response;
    } catch (e) {
      throw new Error('Falha ao inserir controle da observação!');
    }
  }

  async getUrlUploadTemp(file) {
    const body = {
      nomeOriginal: file?.name,
      tamanhoEmBytes: file?.size,
      type: file?.type,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/upload-temp`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao gerar URL de upload do arquivo');
    }

    return response;
  }

  async uploadFile(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload do arquivo');
    }

    return response.status;
  }

  async getDocumentoObservacao(guidDocumento) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/observacao-historico/anexo/${guidDocumento}`);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao baixar documento.');
    }

    return response;
  }
}

export default new LimitesAprovadosObservacaoService();
