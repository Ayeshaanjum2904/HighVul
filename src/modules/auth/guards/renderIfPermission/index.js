import { connect } from 'react-redux';

import * as selectors from 'modules/auth/redux/authSelectors';
import RenderIfPermission from './renderIfPermission';

const mapStateToProps = ({ auth }) => ({
  permissions: selectors.getPermissions(auth),
});

export default connect(mapStateToProps)(RenderIfPermission);
