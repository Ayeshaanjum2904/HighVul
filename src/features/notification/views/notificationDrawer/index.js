import { connect } from 'react-redux';

import operations from '../../redux/operations';
import NotificationDrawer from './notificationDrawer';

const mapDispatchToProps = (dispatch) => ({
  getNotifications: () => (
    dispatch(operations.getNotifications())
  ),
  getNotificationsLastGet: (lastGet) => (
    dispatch(operations.getNotificationsLastGet(lastGet))
  ),
});

const mapStateToProps = ({ notificationStore }) => ({
  lastGet: notificationStore.lastGet,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationDrawer);
