import _ from 'lodash';
import { createSelector } from 'reselect';
import { camelFormat } from 'utils/format';

const gruposSolicitacoes = createSelector(
  (limites) => limites?.page?.solicitacoesList?.solicitacoes,
  (solicitacoes) => {
    const grupos = new Map();

    (solicitacoes || []).forEach((p) => {
      if (!_.isString(p?.status)) { return; }

      if (grupos.has(p.status)) {
        const solicitacoesForStatus = grupos.get(p.status);
        solicitacoesForStatus.push(p);
      } else {
        grupos.set(p.status, [p]);
      }
    });

    const result = [];
    grupos.forEach((solicitacoesForStatus, status) => {
      result.push({
        label: status,
        solicitacoes: solicitacoesForStatus,
      });
    });
    return result;
  },
);
const regiaoFilter = createSelector(
  (state) => state.page.filters.regiaoFilter,
  (listRegioes) => (listRegioes || []).map((regiao) => ({
    value: regiao.id,
    text: `${regiao.codigo} - ${camelFormat(regiao.nome)}`,
  })),
);

const statusFilter = createSelector(
  (state) => state.page.filters.statusFilter,
  (statusItens) => (statusItens || []).map((status) => ({
    value: status,
    text: camelFormat(status),
  })),
);

export default {
  gruposSolicitacoes,
  statusFilter,
  regiaoFilter,
};
