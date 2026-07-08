import { createSelector } from 'reselect';

import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';

const hasPermissionCadastroVeiculo = createSelector(
  (state) => state?.user,
  (user) => hasPermission(user, permissions.veiculos.cadastrar),
);
export default {
  hasPermissionCadastroVeiculo,
};
