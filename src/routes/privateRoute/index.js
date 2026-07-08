import { connect } from 'react-redux';
import * as AuthSelectors from '../../modules/auth/redux/authSelectors';

import PrivateRoute from './privateRoute';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: AuthSelectors.isAuthenticated(auth),
  authorizations: AuthSelectors.getPermissions(auth),
});

export default connect(mapStateToProps, null)(PrivateRoute);
