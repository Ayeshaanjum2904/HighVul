/* eslint-disable class-methods-use-this */
import axios from 'axios';

class GruposUpdateConcessionariaService {
  async deleteConcessionaria(idGrupo, codigoConcessionaria) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}/concessionarias`,
      { params: { codigoConcessionaria } },
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao remover a concessionaria ${codigoConcessionaria} associada ao grupo: ${idGrupo}`);
    }

    return response.data;
  }

  async getDetalheConcessionaria(codigoConcessionaria) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/cobrancas/concessionarias/${codigoConcessionaria}`,
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao buscar os detalhes da concessionária: ${codigoConcessionaria}`);
    }

    return response.data;
  }

  async insertConcessionarias(idGrupo, concessionarias) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/cobrancas/grupos/${idGrupo}/concessionarias`,
      { associacoes: concessionarias.map((c) => c.codBuc) },
    );

    if (!response || response.status !== 200) {
      throw new Error(`Erro ao associar as concessionárias ao grupo: ${idGrupo}`);
    }

    return response.data;
  }
}

export default new GruposUpdateConcessionariaService();
