/* eslint-disable class-methods-use-this */
import axios from 'axios';

import { formatDateForUrl } from 'utils/axios';

class OfertasService {
  async getOfertas(
    textoBusca = null,
    data = null,
    marca = null,
    produto = null,
    pagina = null,
    ipp = null,
    status = null,
  ) {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/td-gestao-ofertas/ofertas`, {
      params: {
        mvsOuDescricao: textoBusca,
        vigencia: formatDateForUrl(data),
        marca: marca.map((m) => m.value),
        produto: produto.map((p) => p.value),
        status: status === 'all' ? null : status,
        p: pagina,
        ipp,
      },
    });

    if (!result.data) throw new Error('Empty data fetching ofertas');
    const gruposOfertas = result.data.ofertas.map((go) => ({
      ...go,
      vigenciaInicio: new Date(go.vigenciaInicio),
      vigenciaFim: new Date(go.vigenciaFim),
      ofertas: (go.ofertas || []).map((o) => ({
        ...o,
        produto: go.produto,
      })),
    }));

    const marcasComOfertas = result.data.brands;

    return { gruposOfertas, marcasComOfertas };
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
}

export default new OfertasService();
