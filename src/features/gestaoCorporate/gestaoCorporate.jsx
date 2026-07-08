import React from 'react';

import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { permissions } from 'modules/auth/permissions';

import MenuGestaoCorporate from './menuGestaoCorporate';
import SimuladorCorporate from './views/simulador/simuladorCorporate';

import { PageContainer, MenuContainer, ContentContainer } from './gestaoCorporate.styles';

const GestaoCorporate = () => {
  const { path } = useRouteMatch();
  const defaultPath = 'simulador';

  return (
    <PageContainer>
      <MenuContainer>
        <MenuGestaoCorporate />
      </MenuContainer>
      <ContentContainer>
        <Switch>
          <PermissionRoute
            path={`${path}/simulador`}
            requireAll={[permissions.gestaoCorporate]}
          >
            <SimuladorCorporate />
          </PermissionRoute>

          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </ContentContainer>
    </PageContainer>
  );
};

export default GestaoCorporate;
