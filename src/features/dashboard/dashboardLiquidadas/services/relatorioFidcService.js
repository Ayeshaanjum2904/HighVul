import axios from 'axios';

class RelatorioFidcService {
  constructor() {
    this.URL_API = window.env.REACT_APP_API_URL;
  }

  async exportRelatorioDuplicatas(filters) {
    const concessionarias = filters.concessionarias.map((c) => c.value);
    const regionais = filters.regionais.map((r) => r.value);
    const status = filters.status === 'all' ? null : filters.status;

    const body = {
      dataInicioEntradaFidc: filters.dataInicioEntrada,
      dataFinalEntradaFidc: filters.dataFimEntrada,
      dataInicioVencimento: filters.dataInicioVencimento,
      dataFinalVencimento: filters.dataFimVencimento,
      concessionarias,
      regionais,
      brand: filters.brand,
      status,
    };

    const response = await axios.post(`${this.URL_API}/fidc/export/relatorio`, body);

    if (!response || response.status !== 200) {
      throw new Error('Error downloading pedidos xlsx');
    }
    return true;
  }
}

export default new RelatorioFidcService();
