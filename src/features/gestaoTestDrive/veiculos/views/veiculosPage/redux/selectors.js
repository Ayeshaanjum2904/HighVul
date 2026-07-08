import { createSelector } from 'reselect';

import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';

import { camelFormat } from 'utils/format';

const hasPermissionCadastroVeiculo = createSelector(
  (state) => state?.user,
  (user) => hasPermission(user, permissions.veiculos.cadastrar),
);

const mapMarca = createSelector(
  (state) => state?.page?.veiculosList?.marcas,
  (marcas) => (marcas || []).map((m) => ({
    text: camelFormat(m),
    value: camelFormat(m),
  })),
);

const mapStatus = createSelector(
  () => [
    { text: 'Pendente', value: 'Pendente' },
    { text: 'Completo', value: 'Completo' },
  ],
  (statusOptions) => statusOptions,
);

export default {
  hasPermissionCadastroVeiculo,
  mapMarca,
  mapStatus,
};
