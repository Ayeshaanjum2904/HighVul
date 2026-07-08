/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { permissions } from 'modules/auth/permissions';

import MenuGestaoCobrancas from './menuGestaoCobrancas';
import Contatos from './views/contatos/contatosPage';
import Concessionarias from './views/concessionarias';
import Grupos from './views/grupos';
import Emails from './views/emails/emailsPage';
import Historico from './views/historico/historicoPage';
import Analistas from './views/analistas/analistasPage';
import Gerentes from './views/gerentes/gerentesPage';

import './gestaoCobrancas.scss';

const GestaoCobrancas = () => {
  const { path } = useRouteMatch();
  const defaultPath = 'contatos';

  return (
    <div className="gestao-cobrancas-page__page">
      <div className="gestao-cobrancas-page__menu">
        <MenuGestaoCobrancas />
      </div>
      <div className="gestao-cobrancas-page__content">
        <Switch>

          <PermissionRoute
            path={`${path}/contatos`}
            requireAll={[permissions.cobrancas.master]}
          >
            <Contatos />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/concessionarias`}
            requireAll={[permissions.cobrancas.master]}
          >
            <Concessionarias />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/grupos`}
            requireAll={[permissions.cobrancas.master]}
          >
            <Grupos />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/emails`}
            requireAny={[permissions.cobrancas.master]}
          >
            <Emails />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/historico`}
            requireAny={[permissions.cobrancas.master]}
          >
            <Historico />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/analistas`}
            requireAny={[permissions.cobrancas.master]}
          >
            <Analistas />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/gerentes`}
            requireAny={[permissions.cobrancas.master]}
          >
            <Gerentes />
          </PermissionRoute>

          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default GestaoCobrancas;
