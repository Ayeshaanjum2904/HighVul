/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ConcessionariaDetailService {
  makeConcessionariaDto(concessionaria, novaConcessionaria) {
    return {
      consultorJeep: novaConcessionaria.consultorJeep ?? concessionaria.consultorJeep,
      gerenteJeep: novaConcessionaria.gerenteJeep ?? concessionaria.gerenteJeep,
      consultorFca: novaConcessionaria.consultorFca ?? concessionaria.consultorFca,
      descricaoRegionalFca: novaConcessionaria.descricaoRegionalFca
?? concessionaria.descricaoRegionalFca,
      codigoRegionalFca: novaConcessionaria.codigoRegionalFca ?? concessionaria.codigoRegionalFca,
      regionalJeep: novaConcessionaria.regionalJeep ?? concessionaria.regionalJeep,
    };
  }

  makeNewConcessionaria(concessionaria, novaConcessionaria) {
    return {
      ...concessionaria,
      ...this.makeConcessionariaDto(concessionaria, novaConcessionaria),
    };
  }

  async getConcessionaria(id) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/concessionarias/${id}`,
    );

    if (!response || response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }

  async updateConcessionaria(updateDate, concessionaria) {
    try {
      const response = await axios.put(
        `${window.env.REACT_APP_API_URL}/cobrancas/concessionarias/${concessionaria.id}`,
        this.makeConcessionariaDto(concessionaria, updateDate),
      );
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }
      throw new Error(`Error when update concessionaria ${concessionaria.id}`);
    }
  }
}

export default new ConcessionariaDetailService();
