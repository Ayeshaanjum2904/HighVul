import { connect } from 'react-redux';

import Fidc from './fidc';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(Fidc);
