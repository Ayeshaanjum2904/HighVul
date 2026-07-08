import { connect } from 'react-redux';

import * as AuthSelectors from '../../redux/authSelectors';
import RenderIfLoggedIn from './renderIfLoggedIn';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: AuthSelectors.isAuthenticated(auth),
});

export default connect(mapStateToProps)(RenderIfLoggedIn);
