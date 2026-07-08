/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import axios from 'axios';
import { permissions } from 'modules/auth/permissions';
import { hasPermission, getUserRegions, hasPermissions } from 'modules/auth/authLogic';

import logger from 'utils/logger';

class SolicitacoesService {
  getListType(user) {
    if (hasPermission(user, permissions.limite.listarTodos)) return 'todos';
    if (hasPermission(user, permissions.limite.listarAnaliseCredito)) return 'credito';
    if (hasPermission(user, permissions.limite.listarComercial)) return 'comercial';
    throw new Error();
  }

  getListTypePermission(user) {
    if (hasPermission(user, permissions.limite.listarTodos)) {
      return permissions.limite.listarTodos;
    }
    if (hasPermission(user, permissions.limite.listarAnaliseCredito)) {
      return permissions.limite.listarAnaliseCredito;
    }
    if (hasPermission(user, permissions.limite.listarComercial)) {
      return permissions.limite.listarComercial;
    }
    throw new Error();
  }

  getRegions(user) {
    const regionsSecurity = [];

    const listTypePermission = this.getListTypePermission(user);

    const regions = getUserRegions(user);

    if (_.isArray(regions) && regions?.length > 0) {
      regions.forEach((r) => {
        if (!r?.permissions) { return; }
        const permissoes = r.permissions.map((p) => p.permissionId);
        if (hasPermissions(permissoes, [listTypePermission])) {
          regionsSecurity.push(r.id);
        }
      });
    }
    return regionsSecurity;
  }

  async getSolicitacoes(user, filters) {
    const body = {
      RegionalFiltro: filters.regiaoFilter,
      StatusFiltro: filters.statusFilter,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/solicitacoes/filters`, body, {
      params: {
        page: filters.page,
        ipp: filters.ipp,
        tipo: this.getListType(user),
        regiao: this.getRegions(user),
        texto: filters.texto,
      },
    });

    if (response.status === 200) {
      if (_.isArray(response?.data?.solicitacoes)) {
        response.data.solicitacoes.forEach((p) => {
          // eslint-disable-next-line no-param-reassign
          p.data = new Date(p.data);
        });
      }
      return response.data;
    }

    const errorMsg = `getSolicitacoesLimite failed with status code ${response.status}`;
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
}

export default new SolicitacoesService();
