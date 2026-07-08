import { connect } from 'react-redux';

import operations from '../../redux/operations';
import NotificationContent from './notificationContent';

const mapDispatchToProps = (dispatch) => ({
  getNotifications: (idLimite) => (
    dispatch(operations.getNotifications(idLimite))
  ),
  markNotificationsRead: (notifications) => (
    dispatch(operations.markNotificationsRead(notifications))
  ),
});

const mapStateToProps = ({ notificationStore }) => ({
  notifications: notificationStore.notifications.listNotifications,
  isError: notificationStore.isError,
  loadingPost: notificationStore.loadingPost,
  isPostSending: notificationStore.isPostSending,
  loading: notificationStore.loading,
  isErrorLastGet: notificationStore.isErrorLastGet,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContent);
