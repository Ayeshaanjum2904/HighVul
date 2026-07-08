import { connect } from 'react-redux';

import GestaoTestDrive from './gestaoTestDrive';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(GestaoTestDrive);
