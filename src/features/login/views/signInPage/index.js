import { connect } from 'react-redux';

import SignInPage from './signInPage';
import { AuthOperations } from '../../../../modules/auth/redux';

const mapStateToProps = ({ auth }) => ({
  loginLoading: auth.isLoading,
  isLoginError: auth.isLoginError,
  sessionExpired: auth.sessionExpired,
  errorMessage: auth.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(AuthOperations.login(email, password)),
  invalidateSession: () => dispatch(AuthOperations.invalidateSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
