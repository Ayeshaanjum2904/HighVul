/* eslint-disable class-methods-use-this */
import axios from 'axios';

class GruposUpdateGrupoService {
  makeGrupoDto(grupo, novoGrupo) {
    return {
      id: grupo.id,
      nomeConta: novoGrupo.nomeConta ?? grupo.nomeConta,
      razaoSocial: novoGrupo.razaoSocial ?? grupo.razaoSocial,
      cnpj: novoGrupo.cnpj ?? grupo.cnpj,
      marcaId: novoGrupo.marcaId ?? grupo.marcaId,
      regionalId: novoGrupo.regionalId ?? grupo.regionalId,
      emailSupervisor: (novoGrupo.emailSupervisor ?? grupo.emailSupervisor).trim(),
      analistaRede: novoGrupo.analistaRede ?? grupo.analistaRede,
      inscricaoMunicipal: novoGrupo.inscricaoMunicipal ?? grupo.inscricaoMunicipal,
      inscricaoEstadual: novoGrupo.inscricaoEstadual ?? grupo.inscricaoEstadual,
    };
  }
  async updateGrupo(grupo, novoGrupo) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/cobrancas/grupos/${grupo.id}`, this.makeGrupoDto(grupo, novoGrupo));

    if (!response || response.status !== 200) {
      throw new Error(`Erro atualizar as informações do grupo ${grupo?.id}`);
    }

    return response.data;
  }
}

export default new GruposUpdateGrupoService();
