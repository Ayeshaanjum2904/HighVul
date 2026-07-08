/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { permissions } from 'modules/auth/permissions';

import MenuGestaoComunicados from './menuGestaoComunicados';
import MensagensPage from './views/mensagens/alertasPage';
import ComunicadosPage from './views/comunicados/comunicadosPage';

import './gestaoComunicados.scss';

const GestaoComunicados = () => {
  const { path } = useRouteMatch();
  const defaultPath = 'mensagens';

  return (
    <div className="gestao-comunicados-page__page">
      <div className="gestao-comunicados-page__menu">
        <MenuGestaoComunicados />
      </div>
      <div className="gestao-comunicados-page__content">
        <Switch>

          <PermissionRoute
            path={`${path}/mensagens`}
            requireAll={[permissions.alertas.criar]}
          >
            <MensagensPage />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/comunicados`}
            requireAll={[permissions.alertas.comunicados]}
          >
            <ComunicadosPage />
          </PermissionRoute>

          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default GestaoComunicados;
