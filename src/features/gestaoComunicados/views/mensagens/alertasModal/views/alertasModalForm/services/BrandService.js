import axios from 'axios';
import { camelFormat } from 'utils/format';

class BrandService {
  constructor() {
    this.URL_API = window.env.REACT_APP_API_URL;
  }

  async getBrands() {
    const response = await axios.get(`${this.URL_API}/modelos/marcas`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de marcas!');
    }
    return response.data.map((d) => ({
      text: camelFormat(d),
      value: camelFormat(d),
    }));
  }
}

export default new BrandService();
