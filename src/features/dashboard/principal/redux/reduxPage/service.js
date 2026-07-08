/* eslint-disable class-methods-use-this */
import axios from 'axios';

import { camelFormat } from 'utils/format';

class DashboardedidosArea {
  async GetBrands() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/marcas`,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar os filtros de Marca do dashboard');
    }

    return response.data.map((b) => ({
      text: camelFormat(b),
      value: camelFormat(b),
    }));
  }
  async GetRegionais() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/regionais`,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar os filtros de Regional do dashboard');
    }

    return response.data.map((r) => ({
      text: camelFormat(r.name),
      value: r.codigo,
    }));
  }

  async GetModelos() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/modelos`,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar os filtros de Modelo do dashboard');
    }
    return response.data.map((d) => ({
      ...d,
      nome: camelFormat(d.nome),
      brand: camelFormat(d.brand),
    }));
  }

  async GetGrupos() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/grupo`,
    );
    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar os filtros de Grupo do dashboard');
    }
    return response.data.map((d) => ({
      ...d,
      brand: camelFormat(d.brand),
      nome: camelFormat(d.nome),
    }));
  }

  async GetConcessionaria(filters) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/dashboard/filters/concessionaria`, {
      params: {
        buc: filters?.codigoBuc,
      },
    });
    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar o nome da concessionária!');
    }
    return response.data;
  }

  async GetPontos() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/pontos-venda`,
    );
    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar pontos de venda');
    }
    return response.data;
  }

  async GetConcessionarias() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/concessionarias`,
    );
    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar concessionárias');
    }
    return response.data;
  }

  async GetFiltros() {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/dashboard/filters/relatorio`,
    );

    if (!response || response.status !== 200) {
      throw new Error('Erro ao buscar filtros do relatório');
    }

    return {
      concessionarias: response.data.dealers.map((d) => ({
        text: `${camelFormat(d.dealerName)} - ${d.dealerId}`,
        value: d.dealerCnpj,
        regionId: d.regionId,
      })),
      regionais: response.data.regionais.map((d) => ({
        text: `${d.regionalId} - ${camelFormat(d.regionalNome)}`,
        value: d.regionalId,
      })),
      brands: response.data.brands.map((d) => ({
        text: `${d.brandId} - ${camelFormat(d.brandName)}`,
        value: d.brandId,
      })),
    };
  }
}

export default new DashboardedidosArea();
