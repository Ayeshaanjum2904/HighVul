import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NotificationContent from '../notificationContent';

import './notificationDrawer.scss';

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiPaper-root': {
    marginLeft: '64px',
    boxShadow: 'none',
    width: '290px',
  },
  '& .MuiBackdrop-root': {
    background: 'linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0.4), rgba(0,0,0,0.4), rgba(0,0,0,0.4), rgba(0,0,0,0.4), rgba(0,0,0,0.4),transparent)',
  },
}));

const NotificationDrawer = ({
  isOpen, openPosition, onClose, lastGet,
  getNotifications, getNotificationsLastGet,
}) => {
  useEffect(() => {
    getNotifications();
    const intervalId = setInterval(() => {
      getNotificationsLastGet(lastGet);
    }, 300000);

    return () => clearInterval(intervalId);
  }, [getNotifications, getNotificationsLastGet]);

  return (
    <StyledDrawer
      open={isOpen}
      anchor={openPosition}
      onClose={onClose}
      hideBackdrop={false}
    >
      <section className="notifications-page-section">
        <CloseRoundedIcon
          className="notifications-page-x"
          onClick={onClose}
        />
        <NotificationContent
          isOpen={isOpen}
          onClose={onClose}
        />
      </section>
    </StyledDrawer>
  );
};

NotificationDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  getNotifications: PropTypes.func.isRequired,
  openPosition: PropTypes.oneOf(['right', 'left', 'bottom', 'top']),
  getNotificationsLastGet: PropTypes.func.isRequired,
  lastGet: PropTypes.string,
};

NotificationDrawer.defaultProps = {
  openPosition: 'left',
  onClose: () => {},
  lastGet: null,
};

export default NotificationDrawer;
