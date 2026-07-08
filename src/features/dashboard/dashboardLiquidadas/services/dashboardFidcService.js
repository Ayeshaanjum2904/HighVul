import axios from 'axios';

class DashboardFidcService {
  constructor() {
    this.URL_API = window.env.REACT_APP_API_URL;
  }

  async getDashboardLiquidadas(filters) {
    const concessionarias = filters.concessionarias.map((c) => c.value);
    const regionais = filters.regionais.map((r) => r.value);

    const body = {
      periodoInicio: filters.periodoInicio,
      periodoFim: filters.periodoFim,
      concessionarias,
      regionais,
    };

    const response = await axios.post(
      `${this.URL_API}/fidc/dashboard/liquidadas`,
      body,
    );

    if (!response || response.status !== 200) {
      throw new Error('Error getting dashboard data');
    }

    return response.data;
  }
}

export default new DashboardFidcService();
