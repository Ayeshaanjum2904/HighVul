import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { PATH_LOGIN } from '../paths';

// TODO: passar checagem de se tem permissão X para dentro do módulo auth
// ex: Auth.checkPermission(permissions, requiredPerm)
// ex2: state.auth.hasPermissionX
const canAccess = (isAuthenticated, authorizations, requiredAuthorizations) => {
  if (!isAuthenticated) return false;

  return requiredAuthorizations.every((required) => (
    authorizations.includes(required)
  ));
};

const PrivateRoute = ({
  isAuthenticated, authorizations, requiredAuthorizations,
  path, exact, children,
}) => (
  canAccess(isAuthenticated, authorizations, requiredAuthorizations)
    ? (
      <Route exact={exact} path={path}>
        { children }
      </Route>
    )
    : <Redirect push to={PATH_LOGIN} />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  authorizations: PropTypes.array,
  requiredAuthorizations: PropTypes.array,
  children: PropTypes.node.isRequired,
};

PrivateRoute.defaultProps = {
  exact: false,
  isAuthenticated: false,
  authorizations: [],
  requiredAuthorizations: [],
};

export default PrivateRoute;
