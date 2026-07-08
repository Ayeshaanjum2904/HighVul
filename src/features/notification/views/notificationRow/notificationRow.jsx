import React, { useState } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { useHistory } from 'react-router-dom';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { getRegistryByType } from '../../redux/notificationRegistry';

import Date from '../../../../common/date';

import './notificationsRow.scss';

const dateFormat = (date) => {
  const today = moment();
  return moment(date).isSame(today, 'day') ? 'HH:mm' : 'DD/MM';
};

const NotificationRow = ({
  className, notification, onClose, markNotificationsRead, getNotifications,
}) => {
  const history = useHistory();
  const [markingAsRead, setMarkingAsRead] = useState(false);
  const registry = getRegistryByType(notification.tipo);

  const IconComponent = registry?.icon;

  const handleActionClick = () => {
    if (!registry) return;
    const action = registry.getAction(notification);
    history.push(action.route, action.state);
    onClose();
  };

  const handleMarkAsRead = async () => {
    if (markingAsRead) return;
    setMarkingAsRead(true);
    try {
      await markNotificationsRead([notification]);
      await getNotifications();
    } catch (error) {
      setMarkingAsRead(false);
    }
  };

  return (
    <div className={`notifications-row ${className}`}>
      <div className="notifications-row-icon">
        {IconComponent && (
        <div className="notifications-row-reproved-icon-container">
          <IconComponent className="notifications-row-reproved-icon" />
        </div>
        )}
      </div>
      <div className="notifications-row-info">
        <div className="notifications-row-info-title">{notification.detalheTipo}</div>

        <Date
          className="notifications-row-info-date"
          format={dateFormat(notification.dataHora)}
          date={notification.dataHora}
        />

        <div className="notifications-row-info-descricao">{notification.descricao}</div>
      </div>
      <div className="notifications-row-actions">
        {registry && !registry.autoMarkAsRead && (
        <button
          type="button"
          className="notifications-row-mark-read"
          onClick={handleMarkAsRead}
          disabled={markingAsRead}
        >
          <span>{markingAsRead ? 'Marcando...' : 'Marcar como lido'}</span>
        </button>
        )}
        <button
          type="button"
          className="notifications-row-action"
          onClick={handleActionClick}
        >
          <span>Ver</span>
          <ArrowForwardRoundedIcon className="notifications-row-action-icon" />
        </button>
      </div>
    </div>
  );
};

NotificationRow.propTypes = {
  className: PropTypes.string,
  notification: PropTypes.shape({
    dataHora: PropTypes.string,
    tipo: PropTypes.string,
    detalheTipo: PropTypes.string,
    lido: PropTypes.bool,
    itemId: PropTypes.number,
    descricao: PropTypes.string,
    detalhes: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  markNotificationsRead: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
};

NotificationRow.defaultProps = {
  className: '',
};

export default NotificationRow;
