import { connect } from 'react-redux';

import GestaoCorporate from './gestaoCorporate';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(GestaoCorporate);
