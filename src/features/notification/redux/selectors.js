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

    const isGestaoTestDriveOrdens = hasPermission(user, permissions.notificacoes.novaOrdem);
    const isGestaoPendenteCondicao = hasPermission(user, permissions.notificacoes.pendenteCondicao);
    const isGestaoAnaliseCredito = hasPermission(user, permissions.notificacoes.analiseCredito);
    const isGestaoVeiculoPendente = hasPermission(user, permissions.notificacoes.veiculoPendente);

    return {
      isGestaoFinanciamentoRede,
      isGestaoCadastro,
      isGestaoJuridico,
      isGestaoCredito,
      isGestaoTestDriveOrdens,
      isGestaoPendenteCondicao,
      isGestaoAnaliseCredito,
      isGestaoVeiculoPendente,
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
