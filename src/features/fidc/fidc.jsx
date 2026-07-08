import React from 'react';

import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { permissions } from 'modules/auth/permissions';

import MenuFidc from './menuFidc';
import ContaCorrenteDealerPage from './views/contaCorrenteDealer';
import ResgatesPage from './views/resgatesFidc/resgatesFidcPage';

import './fidc.scss';

const Fidc = () => {
  const { path } = useRouteMatch();
  const defaultPath = 'conta-corrente-dealer';

  return (
    <div className="fidc-page__page">
      <div className="fidc-page__menu">
        <MenuFidc />
      </div>
      <div className="fidc-page__content">
        <Switch>
          <PermissionRoute
            path={`${path}/conta-corrente-dealer`}
            requireAll={[permissions.contaCorrenteDealer]}
          >
            <ContaCorrenteDealerPage />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/resgates`}
            requireAll={[permissions.resgatesFidc]}
          >
            <ResgatesPage />
          </PermissionRoute>

          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Fidc;
