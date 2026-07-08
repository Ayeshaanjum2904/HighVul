import { connect } from 'react-redux';

import { AuthOperations } from '../../../modules/auth/redux';

import SessionExpiredModal from './sessionExpiredModal';

const mapStateToProps = ({ auth }) => ({
  sessionExpired: auth.sessionExpired,
});

const mapDispatchToProps = (dispatch) => ({
  invalidateSession: () => dispatch(AuthOperations.invalidateSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionExpiredModal);
