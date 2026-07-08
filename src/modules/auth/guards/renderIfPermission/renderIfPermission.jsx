import PropTypes from 'prop-types';
import _ from 'lodash';

import { hasPermissions, hasSomePermission } from 'modules/auth/authLogic';

const RenderIfPermission = ({
  requireAll, requireAny, permissions, children,
}) => {
  if (!_.isArray(permissions)) return null;
  if (!_.isArray(requireAll) && !_.isArray(requireAny)) return null;

  let permissionsOk = true;
  if (_.isArray(requireAll) && !hasPermissions(permissions, requireAll)) permissionsOk = false;
  if (_.isArray(requireAny) && !hasSomePermission(permissions, requireAny)) permissionsOk = false;

  return permissionsOk ? (children) : null;
};

RenderIfPermission.propTypes = {
  permissions: PropTypes.array,
  requireAll: PropTypes.array,
  requireAny: PropTypes.array,
  children: PropTypes.node.isRequired,
};

RenderIfPermission.defaultProps = {
  permissions: null,
  requireAll: null,
  requireAny: null,
};

export default RenderIfPermission;
