import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuGestaoLimites from './menuGestaoLimites';

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => { dispatch(push(path)); },
});

export default connect(null, mapDispatchToProps)(MenuGestaoLimites);
