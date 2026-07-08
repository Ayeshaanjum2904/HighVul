/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import axios from 'axios';

class LimitesAprovadosService {
  async getFilters() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/gestaoLimites/filters`);
    if (!result.data) throw new Error('Empty data fetching filters');

    if (result.status === 200) {
      return result.data;
    }
  }

  async getHistoricoLimite(idLimite) {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/gestaoLimites/historico/${idLimite}`);
    if (!result.data) throw new Error('Empty data fetching filters');

    if (result.status === 200) {
      return result.data;
    }
  }

  async getLimitesAprovadosSisgar(value) {
    try {
      const body = { value };
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/versao-original`, body);

      return response.data;
    } catch (e) {
      throw new Error('Falha ao buscar a versão sisgar do limite!');
    }
  }

  async getLimitesAprovados(filters) {
    try {
      const body = {
        ...filters,
      };
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestaoLimites/limites-aprovados`, body);
      return response.data;
    } catch (e) {
      throw new Error('Falha ao buscar limites!');
    }
  }

  async getRelatorioAprovacoes(filters) {
    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/formalizacao/gestaoLimites/exportar-relatorio`,
        filters,
        { responseType: 'arraybuffer' },
      );
      const fileName = response.headers['content-disposition'].match(/filename=(?<filename>[^,;]+);/)[1];
      return { fileContent: response.data, fileName };
    } catch (e) {
      throw new Error('Falha ao gerar o arquivo excel!');
    }
  }

  async updateCondicao(dados) {
    try {
      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/condicao`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar condição!');
    }
  }

  async updateCondicaoVersoes(dados) {
    try {
      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/condicao-versoes`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar condição!');
    }
  }

  async updateAndSaveStatus(dados) {
    try {
      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/status`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar status!');
    }
  }

  async updateAndSaveJustificativa(dados) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/justificar-acao-aprovacao`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar status!');
    }
  }

  async changeStatusSisgar(dados) {
    try {
      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/status-sisgar`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar status sisgar!');
    }
  }

  async postCancelamentoSisgar(dadosDocumento) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/cancelamento-sisgar`, dadosDocumento);
      return response.data;
    } catch (e) {
      throw new Error('Falha ao realizar o upload do arquivo!');
    }
  }

  async uploadDocumento(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload do documento!');
    }

    return response.data;
  }
}

export default new LimitesAprovadosService();
