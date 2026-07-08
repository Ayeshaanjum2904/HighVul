import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuDashboard from './menuDashboard';

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => dispatch(push(path)),
});

export default connect(null, mapDispatchToProps)(MenuDashboard);
