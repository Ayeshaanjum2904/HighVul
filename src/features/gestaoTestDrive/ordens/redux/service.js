/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { erroFormatado } from '../utils/formatarMensagemErro';

class OrdensService {
  async getStatusList() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/ordem/status`);
    if (!result.data) throw new Error('Empty data fetching status options');
    return result.data;
  }

  async getProdutosList() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/produtos/exclusivo-montadora`);
    if (!result.data) throw new Error('Empty data fetching produtos options');
    return result.data;
  }

  async valuesFiltersList(filters) {
    const produtoIds = Array.isArray(filters.produto)
      ? filters.produto.map((p) => (p && p.value !== undefined ? p.value : p))
      : [];
    const statusValues = Array.isArray(filters.status)
      ? filters.status.map((s) => (s && s.value !== undefined ? s.value : s))
      : [];
    return { produtoIds, statusValues };
  }

  async getOrdens(filters, pageParams, ordenacao, userEmail) {
    const { produtoIds, statusValues } = await this.valuesFiltersList(filters);
    const body = {
      id: filters.ordem,
      produtos: produtoIds,
      status: statusValues,
      somenteMinhas: filters.usuario,
      nomeColuna: ordenacao.nomeColuna,
      sentidoOrdenacao: ordenacao.sentidoOrdenacao,
      page: pageParams.page,
      ipp: pageParams.ipp,
    };
    const result = await axios.post(`${window.env.REACT_APP_API_URL}/ordem/listar`, body, {
      headers: {
        'fidis-user-email': userEmail,
      },
    });
    if (!result.data) throw new Error('Empty data fetching ordens');
    return result.data;
  }

  async getRelatorioOrdens(filters, userEmail) {
    const { produtoIds, statusValues } = await this.valuesFiltersList(filters);
    const body = {
      id: filters.ordem,
      produtos: produtoIds,
      status: statusValues,
      somenteMinhas: filters.usuario,
    };
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/ordem/relatorio`,
      body,
      {
        responseType: 'arraybuffer',
        headers: {
          'fidis-user-email': userEmail,
        },
      },
    );
    if (!response.data) throw new Error('Empty data fetching relatorio ordens');
    const disposition = response.headers['content-disposition'];
    const fileNameMatch = disposition && disposition.match(/filename="?([^;"]+)"?/);
    const fileName = fileNameMatch ? fileNameMatch[1] : 'relatorio_ordens.xlsx';
    return { fileContent: response.data, fileName };
  }

  async cancelOrder(ordemId, justificativa, userEmail) {
    const body = {
      ordemId,
      justificativa,
    };
    const result = await axios.post(
      `${window.env.REACT_APP_API_URL}/ordem/cancelar`,
      body,
      { headers: { 'fidis-user-email': userEmail } },
    );
    return result.data;
  }

  async downloadTemplate() {
    try {
      const response = await axios.get(`${window.env.REACT_APP_API_URL}/ordem/template`, {
        responseType: 'arraybuffer',
      });

      const fileName = response.headers['content-disposition']
        ? response.headers['content-disposition'].match(/filename=(?<filename>[^,;]+);/)[1]
        : 'template_ordem.xlsx';

      return { fileContent: response.data, fileName };
    } catch (error) {
      throw new Error('Erro ao baixar template');
    }
  }

  async getFeriados() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/ordem/feriados`);
    if (!result.data) throw new Error('Empty data fetching feriados');
    return result.data;
  }

  async createOrdem(userEmail, data) {
    const body = {
      excelList: data.excelData,
      produtoId: data.produtoId,
      dataReversao: data.prazoReversao && data.prazoReversao.toISOString().split('T')[0],
      cartaMesDVE: data.numCartaMes || null,
      ordemValidacaoAprovada: data.ordemValidacaoAprovada || false,
    };

    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/ordem`,
        body,
        {
          headers: {
            'fidis-user-email': userEmail,
            'Content-Type': 'application/json',
          },
        },
      );

      return response;
    } catch (error) {
      if (error.response?.status === 400) {
        const errorMessage = error.response.data.title || 'Ocorreram erros de validação.';
        const errorDetails = error.response.data.errors;
        throw erroFormatado(errorMessage, errorDetails, error.response?.status);
      } else if (error.response?.status === 422) {
        throw new Error('Formato do arquivo Excel inválido');
      }

      throw new Error('Erro ao criar ordem');
    }
  }

  async validarOrdem(userEmail, excelList) {
    const body = { ExcelList: excelList };
    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/ordem/validar-ordem`,
        body,
        {
          headers: {
            'fidis-user-email': userEmail,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error) {
      throw new Error('Erro ao validar ordem');
    }
  }

  async gerarRelatorioErros(excelList) {
    const body = { ExcelList: excelList };
    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/ordem/relatorio-erros`,
        body,
        {
          responseType: 'blob',
          headers: { 'Content-Type': 'application/json' },
        },
      );
      const disposition = response.headers['content-disposition'];
      const fileNameMatch = disposition && disposition.match(/filename="?([^;"]+)"?/);
      const fileName = fileNameMatch ? fileNameMatch[1] : 'relatorio_erros.xlsx';
      return { fileContent: response.data, fileName };
    } catch (error) {
      throw new Error('Erro ao gerar relatório de erros');
    }
  }

  async editOrdem(userEmail, data) {
    const body = {
      ordemId: data.ordemId,
      dataReversao: data.prazoReversao && data.prazoReversao.toISOString().split('T')[0],
      cartaMesDVE: data.numCartaMes,
    };

    try {
      const response = await axios.put(
        `${window.env.REACT_APP_API_URL}/ordem`,
        body,
        {
          headers: {
            'fidis-user-email': userEmail,
            'Content-Type': 'application/json',
          },
        },
      );

      return response;
    } catch (error) {
      throw new Error('Erro ao inserir carta do mês');
    }
  }

  async getCondicoesComerciais(ordemId) {
    try {
      const body = {
        ordemId,
      };

      const result = await axios.post(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/condicao-ordem`, body);
      if (!result.data) throw new Error('Empty data fetching condições comerciais');
      return result.data;
    } catch (error) {
      throw new Error('Erro ao buscar condições comerciais');
    }
  }

  async vincularCondicaoComercial(ordemId, condicaoId, associar) {
    try {
      const body = {
        ordemId,
        condicaoId,
        associar,
      };
      const result = await axios.post(
        `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/associar-desassociar`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCondicoesAVista(ordemId) {
    try {
      const result = await axios.get(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/descontos-ordem/${ordemId}`);
      if (!result.data) throw new Error('Empty data fetching condições à vista');
      return result.data;
    } catch (error) {
      throw new Error('Erro ao buscar condições à vista');
    }
  }

  async vincularCondicaoAVista(ordemId, descontoId, associar) {
    try {
      const body = {
        ordemId,
        descontoId,
        associar,
      };
      const result = await axios.post(
        `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/descontos-ordem/associar-desassociar`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getVeiculosSemCondicaoComercial(ordemId) {
    try {
      const result = await axios.get(
        `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/veiculos-sem-condicao/${ordemId}`,
      );
      if (!result.data) throw new Error('Empty data fetching veículos sem condições comerciais');
      return result.data;
    } catch (error) {
      throw new Error(`Error fetching veículos sem condições comerciais: ${error.message}`);
    }
  }

  async getVeiculosSemCondicaoAVista(ordemId) {
    try {
      const result = await axios.get(
        `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/veiculos-sem-desconto/${ordemId}`,
      );
      if (!result.data) throw new Error('Empty data fetching veículos sem condições à vista');
      return result.data;
    } catch (error) {
      throw new Error(`Error fetching veículos sem condições à vista: ${error.message}`);
    }
  }
}
export default new OrdensService();
