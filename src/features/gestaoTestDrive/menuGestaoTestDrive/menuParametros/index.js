import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuParametros from './menuParametros';

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => { dispatch(push(path)); },
});

export default connect(null, mapDispatchToProps)(MenuParametros);
