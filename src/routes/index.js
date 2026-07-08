import { connect } from 'react-redux';

import * as AuthSelectors from 'modules/auth/redux/authSelectors';
import * as AuthOperations from 'modules/auth/redux/authOperations';

import Routes from './routes';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: AuthSelectors.isAuthenticated(auth),
  hasTestDrivePermission: AuthSelectors.hasTestDrivePermission(auth),
  hasLimitesPermission: AuthSelectors.hasLimitesPermission(auth),
  defaultRoute: AuthSelectors.defaultRoute(auth),
});

const mapDispatchToProps = (dispatch) => ({
  refreshToken: () => dispatch(AuthOperations.refreshToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
