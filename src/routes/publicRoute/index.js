import { connect } from 'react-redux';
import * as AuthSelectors from '../../modules/auth/redux/authSelectors';

import PublicRoute from './publicRoute';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: AuthSelectors.isAuthenticated(auth),
});

export default connect(mapStateToProps, null)(PublicRoute);
