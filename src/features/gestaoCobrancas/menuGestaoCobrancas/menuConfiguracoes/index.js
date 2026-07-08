import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuConfiguracoes from './menuConfiguracoes';

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => { dispatch(push(path)); },
});

export default connect(null, mapDispatchToProps)(MenuConfiguracoes);
