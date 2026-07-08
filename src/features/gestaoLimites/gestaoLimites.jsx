import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';

import MenuGestaoLimites from './menuGestaoLimites';
import SolicitacaoLimitePage from './solicitacaoLimite/solicitacaoLimitePage';

import './gestaoLimites.scss';
import LimitesAprovadosCadastro from './aprovacoes/limitesAprovadosCadastro';
import LimitesAprovadosPage from './aprovacoes/limitesAprovadosPage';
import LimitesAprovadosJuridico from './aprovacoes/limitesAprovadosJuridico';
import LimitesAprovadosCredito from './aprovacoes/limitesAprovadosCredito';

const permsListarLimites = [
  permissions.limite.listarAnaliseCredito,
  permissions.limite.listarComercial,
  permissions.limite.listarTodos,
];

const permsListarLimiteAprovado = [
  permissions.limitesAprovados.gestaoFinanciamentoRede,
  permissions.limitesAprovados.gestaoCadastro,
  permissions.limitesAprovados.gestaoJuridico,
  permissions.limitesAprovados.gestaoCredito,
];
const GestaoLimites = ({ user, resetStore }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    resetStore();
  }, [resetStore]);

  const hasPermissionLimites = hasPermission(user, permissions.limite.listarAnaliseCredito)
                            || hasPermission(user, permissions.limite.listarComercial)
                            || hasPermission(user, permissions.limite.listarTodos);
  const hasPermissionAprovados = hasPermission(
    user,
    permissions.limitesAprovados.gestaoFinanciamentoRede,
  ) || hasPermission(user, permissions.limitesAprovados.gestaoCadastro)
    || hasPermission(user, permissions.limitesAprovados.gestaoJuridico);

  let defaultPath = '';
  if (hasPermissionAprovados) defaultPath = 'aprovacoes/limites-aprovados';
  if (hasPermissionLimites) defaultPath = 'acompanhamento';

  return (
    <div className="gestao-limites-page__page">
      <div className="gestao-limites-page__menu">
        <MenuGestaoLimites />
      </div>
      <div className="gestao-limites-page__content">
        <Switch>
          <PermissionRoute
            path={`${path}/acompanhamento`}
            requireAny={permsListarLimites}
          >
            <SolicitacaoLimitePage />
          </PermissionRoute>
          <PermissionRoute
            path={`${path}/aprovacoes/limites-aprovados`}
            requireAny={permsListarLimiteAprovado}
          >
            <LimitesAprovadosPage
              userPermission={hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede) ? 'DEALER_FINANCE' : null}
            />
          </PermissionRoute>
          <PermissionRoute
            path={`${path}/aprovacoes/lista-documentos`}
            requireAny={permsListarLimiteAprovado}
          >
            <LimitesAprovadosCadastro />
          </PermissionRoute>
          <PermissionRoute
            path={`${path}/aprovacoes/documentos-juridico`}
            requireAny={permsListarLimiteAprovado}
          >
            <LimitesAprovadosJuridico />
          </PermissionRoute>
          <PermissionRoute
            path={`${path}/aprovacoes/info-credito`}
            requireAny={permsListarLimiteAprovado}
          >
            <LimitesAprovadosCredito />
          </PermissionRoute>
          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

GestaoLimites.propTypes = {
  user: PropTypes.object.isRequired,
  resetStore: PropTypes.func,
};

GestaoLimites.defaultProps = {
  resetStore: () => {},
};

export default GestaoLimites;
