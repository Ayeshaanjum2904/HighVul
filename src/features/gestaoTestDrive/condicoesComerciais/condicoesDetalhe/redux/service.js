/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { formatMvsa, camelFormat, formatDescVeiculo } from 'utils/format';
import { formatDateForUrl } from 'utils/axios';

class CondicoesDetalhesPageService {
  async getDetalhes(id) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/${id}`,
    );

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar buscar a condição comercial ${id}`);
    }

    return {
      ...response.data,
      marca: camelFormat(response.data.marca),
      vigenciaInicio: new Date(response.data.vigenciaInicio),
      vigenciaFim: new Date(response.data.vigenciaFim),
    };
  }

  async createCondicao(condicao) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais`,
      {
        produtoId: condicao.produto === '_default' ? null : condicao.produto,
        numeroCartaDoMes: condicao.cartaMes,
        marca: condicao.brand === '_default' ? null : condicao.brand,
        vigenciaInicio: formatDateForUrl(condicao.dataInicio),
        vigenciaFim: formatDateForUrl(condicao.dataFim),
        percentualFinanciado: condicao.desconto,
        coeficiente: condicao.coeficiente,
        taxa: condicao.taxa,
        parcelas: condicao.parcelas,
        prazo: condicao.prazo,
        condicaoOperacional: condicao.condicaoOperacional,
        status: 1,
        CodigosConcessionarias: (condicao.concessionariasSelecionadas || [])
          .map((c) => c.value),
        condicaoVeiculos: condicao.condicoes.map((c) => ({
          marca: c.marca,
          modelo: c.modelId,
          versao: c.versionId,
          serie: c.serieId,
          modelYear: c.modelYear,
          allestimento: c.allestimento,
        })),
      },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao criar condição comercial');
    }
  }

  async updateCondicao(condicao) {
    const response = await axios.put(
      `${window.env.REACT_APP_API_URL}/td-gestao-ofertas/condicoes-comerciais/${condicao.id}`,
      {
        produtoId: condicao.produto === '_default' ? null : condicao.produto,
        numeroCartaDoMes: condicao.cartaMes,
        marca: condicao.brand === '_default' ? null : condicao.brand,
        id: condicao.id,
        vigenciaInicio: formatDateForUrl(condicao.dataInicio),
        vigenciaFim: formatDateForUrl(condicao.dataFim),
        percentualFinanciado: condicao.desconto,
        coeficiente: condicao.coeficiente,
        taxa: condicao.taxa,
        parcelas: condicao.parcelas,
        prazo: condicao.prazo,
        condicaoOperacional: condicao.condicaoOperacional,
        CodigosConcessionarias: (condicao.concessionariasSelecionadas || [])
          .map((c) => c.value),
        condicaoVeiculos: condicao.condicoes.map((c) => ({
          marca: c.marca,
          modelo: c.modelId,
          versao: c.versionId,
          serie: c.serieId,
          id: c.id,
          modelYear: c.modelYear,
          allestimento: c.allestimento,
          percentualFinanciado: condicao.desconto,
          coeficiente: condicao.coeficiente,
          taxa: condicao.taxa,
          parcelas: condicao.parcelas,
          prazo: condicao.prazo,
          condicaoOperacional: condicao.condicaoOperacional,
          status: c?.status ?? 1,
        })),
      },
    );
    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao atualizar condição comercial ${condicao.id}`);
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
      text: `${camelFormat(mvs.descricaoModelo, 2)} ${formatDescVeiculo(mvs.descricaoVersao)} ${formatDescVeiculo(mvs.descricaoSerie)} • ${formatMvsa(mvs.codigoModelo, mvs.codigoVersao, mvs.codigoSerie, mvs.allestimento)} • ${mvs.modelYear}`,
      desconto: null,
      parcelas: null,
      taxa: null,
      prazo: null,
      coeficiente: null,
    }));
  }

  async getBrands() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/modelos/marcas`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de marcas!');
    }

    return response.data.map((d) => ({
      label: camelFormat(d),
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

export default new CondicoesDetalhesPageService();
