import React from 'react';
import PropTypes from 'prop-types';

import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { permissions } from 'modules/auth/permissions';
import { hasPermission } from 'modules/auth/authLogic';

import { ThemeProviderV5 } from 'setup/themes';
import MenuDashboard from './menuDashboard';
import DashboardMainPage from './principal';
import DashboardLiquidadasPage from './dashboardLiquidadas';
import { Page } from './principal/redux/enums';

import './dashboard.scss';

const Dashboard = ({ user }) => {
  const { path } = useRouteMatch();

  const hasPrincipalPermission = hasPermission(user, permissions.dashboard.principal);
  const hasFidcPermission = hasPermission(user, permissions.dashboard.fidc);

  let defaultPath = ' ';
  if (hasFidcPermission) defaultPath = Page.fidc;
  if (hasPrincipalPermission) defaultPath = Page.principal;

  return (
    <div className="dashboard-page__page">
      <div className="dashboard-page__menu">
        <MenuDashboard />
      </div>
      <div className="dashboard-page__content">
        <Switch>
          <PermissionRoute
            path={`${path}/ `}
            requireAll={[permissions.dashboard.principal]}
          >
            <DashboardMainPage />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/fidc/duplicatas-liquidadas`}
            requireAll={[permissions.dashboard.fidc]}
          >
            <ThemeProviderV5>
              <DashboardLiquidadasPage />
            </ThemeProviderV5>
          </PermissionRoute>

          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Dashboard;
