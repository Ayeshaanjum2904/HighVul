import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import history from '../setup/store/history';
import {
  PATH_LOGIN, PATH_GESTAO_TEST_DRIVE, PATH_GESTAO_LIMITES,
  PATH_DASHBOARD, PATH_COMUNICADOS, PATH_COBRANCAS,
  PATH_FIDC, PATH_CORPORATE,
} from './paths';

import WithMenuAside from './view/withMenuAside';
import TrackRoutes from './trackRoutes';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

import SignInPage from '../features/login/views/signInPage';
import GestaoTestDrive from '../features/gestaoTestDrive';
import GestaoLimites from '../features/gestaoLimites';
import Dashboard from '../features/dashboard';
import GestaoComunicados from '../features/gestaoComunicados';
import GestaoCobrancas from '../features/gestaoCobrancas';
import Fidc from '../features/fidc';
import GestaoCorporate from '../features/gestaoCorporate';

// TODO: passar checagem de se tem permissão X para dentro do módulo auth
// ex: Auth.checkPermission(permissions, requiredPerm)

// eslint-disable-next-line arrow-body-style
const Routes = ({ defaultRoute, refreshToken }) => {
  return (
    <ConnectedRouter history={history}>
      <TrackRoutes refreshToken={refreshToken}>
        <Switch>
          <PrivateRoute
            path={PATH_GESTAO_TEST_DRIVE}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <GestaoTestDrive />
            </WithMenuAside>
          </PrivateRoute>

          <PrivateRoute
            path={PATH_GESTAO_LIMITES}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <GestaoLimites />
            </WithMenuAside>
          </PrivateRoute>

          <PrivateRoute
            path={PATH_DASHBOARD}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <Dashboard />
            </WithMenuAside>
          </PrivateRoute>

          <PrivateRoute
            path={PATH_COMUNICADOS}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <GestaoComunicados />
            </WithMenuAside>
          </PrivateRoute>

          <PrivateRoute
            path={PATH_COBRANCAS}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <GestaoCobrancas />
            </WithMenuAside>
          </PrivateRoute>

          <PrivateRoute
            path={PATH_FIDC}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <Fidc />
            </WithMenuAside>
          </PrivateRoute>

          <PrivateRoute
            path={PATH_CORPORATE}
            requiredAuthorizations={[]}
          >
            <WithMenuAside>
              <GestaoCorporate />
            </WithMenuAside>
          </PrivateRoute>

          <PublicRoute
            exact
            path={PATH_LOGIN}
            component={SignInPage}
          />
          <Redirect
            path="*"
            to={defaultRoute}
          />
        </Switch>
      </TrackRoutes>
    </ConnectedRouter>
  );
};

Routes.propTypes = {
  defaultRoute: PropTypes.string.isRequired,
  refreshToken: PropTypes.func.isRequired,
};

Routes.defaultProps = {

};

export default Routes;
