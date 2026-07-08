import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationRow from '../notificationRow';

import { getRegistryByType } from '../../redux/notificationRegistry';

import ErroConexao from '../../../../common/layout/erroConexao/erroConexao';

import './notificationContent.scss';

const NotificationContent = ({
  isOpen, getNotifications, markNotificationsRead, notifications,
  isError, loadingPost, loading, isPostSending, isErrorLastGet, onClose,
}) => {
  const postReadNotifications = async () => {
    const autoMarkNotifications = notifications.filter((n) => {
      if (n.lido) return false;
      const registry = getRegistryByType(n.tipo);
      return registry?.autoMarkAsRead === true;
    });

    if (autoMarkNotifications.length > 0) {
      await markNotificationsRead(autoMarkNotifications);
    }
    await getNotifications();
  };

  useEffect(() => {
    if (isOpen && !loadingPost && !loading && !isPostSending) {
      postReadNotifications();
    }
  }, [isOpen, loadingPost, loading, isPostSending, notifications]);

  const contentForStep = (notificationsList, hasError, hasErrorLastGet) => {
    if ((hasError && hasErrorLastGet) || notificationsList.length === 0) {
      return (
        <ErroConexao title="Não existem notificações.">
          <NotificationsOffIcon fontSize="large" className="notifications-off" />
        </ErroConexao>
      );
    }

    return notificationsList.map((notification, index) => (
      <NotificationRow
        notification={notification}
        key={`notification-row${index}`}
        onClose={onClose}
        markNotificationsRead={markNotificationsRead}
        getNotifications={getNotifications}
      />
    ));
  };

  return (
    <div>
      <div className="notifications-page-title">Notificações</div>
      {contentForStep(notifications, isError, isErrorLastGet)}
    </div>
  );
};

NotificationContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  getNotifications: PropTypes.func.isRequired,
  markNotificationsRead: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  loadingPost: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isPostSending: PropTypes.bool.isRequired,
  isErrorLastGet: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationContent;
