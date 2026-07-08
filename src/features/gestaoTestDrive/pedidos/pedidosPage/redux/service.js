/* eslint-disable class-methods-use-this */
import axios from 'axios';
import _ from 'lodash';
import logger from 'utils/logger';

import { formatDateForUrl } from 'utils/axios';
import { permissions } from 'modules/auth/permissions';
import { hasPermission, getUserRegions, getUserBrands } from 'modules/auth/authLogic';
import { camelFormat, formatMvsa } from 'utils/format';

class PedidosService {
  getListType(user) {
    if (hasPermission(user, permissions.pedidos.listarTodos)) return 'todos';
    if (hasPermission(user, permissions.pedidos.listarComercial)) return 'comercial';
    if (hasPermission(user, permissions.pedidos.listarComercialFca)) return 'comercial_fca';
    if (hasPermission(user, permissions.pedidos.listarComercialFcaSeparacaoFatu)) return 'comercial_fca_separacao_fatu';
    if (hasPermission(user, permissions.pedidos.listarCredito)) return 'credito';
    if (hasPermission(user, permissions.pedidos.listarRegional)) return 'regional';
    if (hasPermission(user, permissions.pedidos.listarOperacoes)) return 'operacoes';
    if (hasPermission(user, permissions.pedidos.listarFaturamento)) return 'faturamento';
    if (hasPermission(user, permissions.pedidos.listarFatuRegi)) return 'faturamento_regional';
    if (hasPermission(user, permissions.pedidos.listarComercialFatu)) return 'comercial_faturamento';
    throw new Error('Não foi possível identificar o tipo de listagem de pedidos');
  }

  getRegions(user, regiaoFiltro) {
    const hasListarRegionalPermission = hasPermission(user, permissions.pedidos.listarRegional);
    const hasListarTodosPermission = hasPermission(user, permissions.pedidos.listarTodos);
    const regions = getUserRegions(user);

    if (hasListarRegionalPermission && !hasListarTodosPermission && regiaoFiltro === null) {
      if (_.isEmpty(regions)) throw new Error('Não foi possível identificar o filtro de regiões para listagem.');
      return regions.map((r) => r.id);
    }

    return regiaoFiltro;
  }

  getMarca = (user) => {
    const hasPermissionTodasBrands = hasPermission(user, permissions.pedidos.listarTodasBrands);
    const brands = getUserBrands(user);
    if (!hasPermissionTodasBrands) {
      if (_.isEmpty(brands)) throw new Error('Não foi possível identificar o filtro de marcas para listagem.');
      return brands.map((b) => b.name);
    }
    return [];
  };

  async getPedidos(user, filters) {
    const body = {
      tipo: this.getListType(user),
      p: filters.page,
      ipp: filters.ipp,
      texto: filters.texto,
      dataInicioPedido: filters.dataInicioPedido,
      dataFimPedido: filters.dataFimPedido,
      dataFaturamento: formatDateForUrl(filters.dataFaturamento),
      produtos: filters.produto,
      regions: this.getRegions(user, filters.regiaoFiltro),
      brands: filters.marca,
      statusList: filters.status,
      modalidades: filters.modalidade,
      concessionarias: filters.concessionaria,
      veiculos: filters.veiculo,
      isAscSort: filters.isAscSort,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/pedidos`, body);

    if (response.status === 200) {
      if (_.isArray(response?.data?.pedidos)) {
        response.data.pedidos.forEach((p) => {
          // eslint-disable-next-line no-param-reassign
          p.data = new Date(p.data);
        });
      }

      return response.data;
    }

    const errorMsg = `getPedidos failed with status code ${response.status}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }

  async getProdutos() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/produtos`);
    if (!result.data) throw new Error('Empty data fetching produtos');

    const produtos = result.data.map((p) => ({
      text: p.titulo,
      value: p.titulo,
    }));
    return produtos;
  }

  async getMvsNome() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/veiculos/mvs`);
    if (!result.data) throw new Error('Empty data fetching veículos');

    const veiculos = result.data.map((v) => {
      const mvsa = formatMvsa(v.codigoModelo, v.codigoVersao, v.codigoSerie, v.allestimento);
      const nomeComercial = v.nomeComercial ? camelFormat(v.nomeComercial) : '';
      const text = nomeComercial
        ? `${nomeComercial} • ${mvsa}`
        : mvsa;
      return {
        text,
        value: v.idVersao,
      };
    });
    return veiculos;
  }

  async getConcessionariasFilter() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/concessionarias`);
    if (!result.data) throw new Error('Empty data fetching concessionárias');
    const concessionarias = result.data.map((c) => ({
      value: c.codigoBuc,
      text: `${camelFormat(c.nome)} - ${c.codigoBuc}`,
    }));
    return concessionarias;
  }

  async exportarRelatorio(filters) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/pedidos/relatorio`, filters, {
      responseType: 'blob',
    });

    if (!response || response.status !== 200) {
      throw new Error('Error downloading pedidos xlsx');
    }

    return response.data;
  }

  async cancelarPedidos(pedidosId, justificativa) {
    try {
      const body = {
        pedidosId,
        justificativa,
      };

      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/pedidos/cancelar`, body);

      if (!response || response.status !== 200) {
        const errorMsg = `cancelarPedidos failed with status code ${response?.status || 'unknown'}`;
        logger.error(errorMsg, { pedidosId, justificativa, response: response?.data });
        throw new Error(errorMsg);
      }

      logger.info('Pedidos cancelados com sucesso', { pedidosId, justificativa });
      return response.data;
    } catch (error) {
      const errorMsg = 'Erro ao cancelar pedidos';
      logger.error('Erro ao cancelar pedidos', { error: error.message, pedidosId, justificativa });
      throw new Error(errorMsg);
    }
  }

  async processarAnaliseCreditoPedidos(pedidosId, aprovacao) {
    try {
      const body = {
        pedidosId,
        aprovado: aprovacao,
      };

      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/pedidos/analiseCredito`, body);

      if (!response || response.status !== 200) {
        const errorMsg = `processarAnaliseCreditoPedidos failed with status code ${response?.status || 'unknown'}`;
        logger.error(errorMsg, { pedidosId, aprovacao, response: response?.data });
        throw new Error(errorMsg);
      }

      const acao = aprovacao ? 'aprovados' : 'reprovados';
      logger.info(`Pedidos ${acao} com sucesso`, { pedidosId, aprovacao });
      return response.data;
    } catch (error) {
      const acao = aprovacao ? 'aprovar' : 'reprovar';
      const errorMsg = `Erro ao ${acao} pedidos`;
      logger.error(`Erro ao ${acao} pedidos`, { error: error.message, pedidosId, aprovacao });
      throw new Error(errorMsg);
    }
  }
}

export default new PedidosService();
