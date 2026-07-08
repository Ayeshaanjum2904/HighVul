import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { hasPermissions, hasSomePermission } from 'modules/auth/authLogic';

const PermissionRoute = ({
  requireAll, requireAny, permissions, children, ...props
}) => {
  if (!_.isArray(permissions)) return null;
  if (!_.isArray(requireAll) && !_.isArray(requireAny)) return null;

  let permissionsOk = true;
  if (_.isArray(requireAll) && !hasPermissions(permissions, requireAll)) permissionsOk = false;
  if (_.isArray(requireAny) && !hasSomePermission(permissions, requireAny)) permissionsOk = false;

  return permissionsOk ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...props}>
      {children}
    </Route>
  ) : null;
};

PermissionRoute.propTypes = {
  permissions: PropTypes.array,
  requireAll: PropTypes.array,
  requireAny: PropTypes.array,
  children: PropTypes.node.isRequired,
};

PermissionRoute.defaultProps = {
  permissions: null,
  requireAll: null,
  requireAny: null,
};

export default PermissionRoute;
