/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ContaCorrenteDealerService {
  async getContasCorrentes(pageParams, cnpj) {
    const body = {
      cnpj,
      page: pageParams.page,
      itensPerPage: pageParams.ipp,
    };

    const response = await axios.post(`${window.env.REACT_APP_API_URL}/fidc/conta-corrente/listar`, body);
    if (response.status !== 200 || !response.data) {
      throw new Error('Erro ao buscar contas correntes');
    }
    return response.data;
  }

  async getConcessionariaDados(cnpj) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/fidc/conta-corrente/dados-concessionaria-brand?cnpj=${cnpj}`);
    if (response.status !== 200) {
      throw new Error('Erro ao buscar contas correntes');
    }
    return response;
  }

  async createContaCorrente(userEmail, data, codigo) {
    const body = {
      id: data.id,
      brandId: data.brand,
      concessionariaNome: data.nomeConcessionaria,
      concessionariaCodigo: codigo,
      cnpj: data.cnpj,
      banco: data.banco,
      agencia: data.agencia,
      conta: data.conta,
    };
    try {
      const response = await axios.put(
        `${window.env.REACT_APP_API_URL}/fidc/conta-corrente/resgate-contas-deposito`,
        body,
        {
          headers: {
            'fidis-user-email': userEmail,
          },
        },
      );
      return { status: response.status };
    } catch (error) {
      if (error.response?.status === 409) {
        return { status: 409 };
      }
      throw new Error('Erro ao cadastrar conta corrente');
    }
  }

  async exportContasCorrentes(cnpj) {
    const body = {
      cnpj,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/fidc/conta-corrente/relatorio`, body, {
      responseType: 'arraybuffer',
    });
    const fileName = response.headers['content-disposition'].match(/filename=(?<filename>[^,;]+);/)[1];
    return { fileContent: response.data, fileName };
  }
}
export default new ContaCorrenteDealerService();
