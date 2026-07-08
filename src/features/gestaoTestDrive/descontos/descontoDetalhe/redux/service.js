/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { formatMvsa, camelFormat, formatDescVeiculo } from 'utils/format';
import { formatDateForUrl } from 'utils/axios';

class DescontosDetalhesPageService {
  async getDetalhes(id) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/${id}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar buscar o descontos ${id}`);
    }

    return {
      ...response.data,
      marca: camelFormat(response.data.marca),
      vigenciaInicio: new Date(response.data.vigenciaInicio),
      vigenciaFim: new Date(response.data.vigenciaFim),
    };
  }

  async createDesconto(desconto) {
    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos`,
        {
          produtoId: desconto.produto,
          dveMkt: desconto.dve,
          marca: desconto.brand,
          vigenciaInicio: formatDateForUrl(desconto.dataInicio),
          vigenciaFim: formatDateForUrl(desconto.dataFim),
          percentualAVista: desconto.descontoGlobal,
          CodigosConcessionarias: (desconto.concessionariasSelecionadas || [])
            .map((c) => c.value),
          descontoVeiculos: desconto.descontos.map((d) => ({
            marca: d.marca,
            modelo: d.modelId,
            versao: d.versionId,
            serie: d.serieId,
            modelyear: d.modelYear,
            allestimento: d.allestimento,
            status: 1,
          })),
        },
      );

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async updateDesconto(desconto) {
    try {
      const response = await axios.put(
        `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/descontos/${desconto.id}`,
        {
          produtoId: desconto.produto,
          dveMkt: desconto.dve,
          marca: desconto.brand,
          id: desconto.id,
          vigenciaInicio: formatDateForUrl(desconto.dataInicio),
          vigenciaFim: formatDateForUrl(desconto.dataFim),
          percentualAVista: desconto.descontoGlobal,
          CodigosConcessionarias: (desconto.concessionariasSelecionadas || [])
            .map((c) => c.value),
          descontoVeiculos: desconto.descontos.map((d) => ({
            marca: d.marca,
            modelo: d.modelId,
            versao: d.versionId,
            serie: d.serieId,
            id: d.id,
            modelyear: d.modelYear,
            allestimento: d.allestimento,
            status: d?.status ?? 1,
            percentualAVista: desconto.descontoGlobal,
          })),
        },
      );

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getMvsList(marca) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/veiculos/filter`, {
      params: {
        marca,
      },
    });
    if (!response || response.status !== 200) {
      throw new Error('Falha ao tentar buscar modelos');
    }

    return response.data.map((mvs) => ({
      modelId: mvs.codigoModelo,
      versionId: mvs.codigoVersao,
      serieId: mvs.codigoSerie,
      modelYear: mvs.modelYear,
      marca: mvs.marca,
      allestimento: mvs.allestimento,
      value: mvs.codigoModelo.concat(mvs.codigoVersao).concat(mvs.codigoSerie)
        .concat(mvs.modelYear),
      text: `${camelFormat(mvs.descricaoModelo)} ${formatDescVeiculo(mvs.descricaoVersao)} ${formatDescVeiculo(mvs.descricaoSerie)} • ${formatMvsa(mvs.codigoModelo, mvs.codigoVersao, mvs.codigoSerie, mvs.allestimento)} • ${mvs.modelYear}`,
      valor: null,
    }));
  }

  async getBrands() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/modelos/marcas`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de marcas!');
    }

    return response.data.map((d) => ({
      text: camelFormat(d),
      value: camelFormat(d),
    }));
  }

  async getProdutos() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/produtos`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de produtos!');
    }

    return response.data.map((produto) => ({
      label: produto.descricao,
      value: produto.id,
    }));
  }

  async getAllConcessionarias() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/concessionarias`);
    if (!result.data || result.status !== 200) {
      throw new Error('Empty data fetching concessionárias');
    }
    const concessionarias = result.data.map((c) => ({
      value: c.codigoBuc,
      marca: c.brand,
      text: `${camelFormat(c.nome)} • ${c.codigoBuc}`,
    }));
    return concessionarias;
  }
}

export default new DescontosDetalhesPageService();
