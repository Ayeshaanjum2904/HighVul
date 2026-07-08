import { createSelector } from 'reselect';
import { permissions } from 'modules/auth';
import { hasPermission } from 'modules/auth/authLogic';

const permissionList = createSelector(
  (auth) => auth?.user,
  (user) => {
    const isGestaoFinanciamentoRede = hasPermission(
      user,
      permissions.limitesAprovados.gestaoFinanciamentoRede,
    );
    const isGestaoCadastro = hasPermission(user, permissions.limitesAprovados.gestaoCadastro);
    const isGestaoJuridico = hasPermission(user, permissions.limitesAprovados.gestaoJuridico);
    const isGestaoCredito = hasPermission(user, permissions.limitesAprovados.gestaoCredito);

    return {
      isGestaoFinanciamentoRede,
      isGestaoCadastro,
      isGestaoJuridico,
      isGestaoCredito,
      isAny: isGestaoFinanciamentoRede || isGestaoCadastro || isGestaoJuridico || isGestaoCredito,
      isAnyExceptFinanciamentoRede: !isGestaoFinanciamentoRede
        && (isGestaoCadastro || isGestaoJuridico || isGestaoCredito),
      isAll: isGestaoFinanciamentoRede && isGestaoCadastro && isGestaoJuridico && isGestaoCredito,
      isAllExceptFinanciamentoRede: !isGestaoFinanciamentoRede
        && (isGestaoCadastro && isGestaoJuridico && isGestaoCredito),
    };
  },
);

export default {
  permissionList,
};
