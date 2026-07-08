import { connect } from 'react-redux';

import * as selectors from 'modules/auth/redux/authSelectors';
import PermissionRoute from './permissionRoute';

const mapStateToProps = ({ auth }) => ({
  permissions: selectors.getPermissions(auth),
});

export default connect(mapStateToProps)(PermissionRoute);
