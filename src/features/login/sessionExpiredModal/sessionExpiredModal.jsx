import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

import Button from 'common/controls/button';
import WarningSvg from '../../../assets/icons/warning';
import './sessionExpiredModal.scss';

const styles = () => ({
  paper:
  {
    borderRadius: '11px',
    padding: '32px 62px',
  },
});

const SessionExpiredModal = (
  {
    className, classes, sessionExpired, invalidateSession,
  },
) => (
  (sessionExpired) ? (
    <Dialog
      className={className}
      classes={classes}
      open
    >
      <div className="session-modal-line">
        <WarningSvg
          width="56px"
          height="56px"
          className="session-modal-image"
        />
      </div>
      <div className="session-modal-line">
        <div>
          <div className="session-modal-line-block">
            <span className="session-modal-line-smaller">Sua sessão expirou!</span>
          </div>
          <span className="session-modal-line-bigger">Favor efetuar seu login novamente.</span>
        </div>
      </div>
      <Button
        className="session-modal-button"
        onClick={() => { invalidateSession(); }}
      >
        Ir para página de login
      </Button>
    </Dialog>
  ) : null
);

SessionExpiredModal.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  sessionExpired: PropTypes.bool,
  invalidateSession: PropTypes.func,
};

SessionExpiredModal.defaultProps = {
  className: '',
  sessionExpired: false,
  invalidateSession: () => {},
};

export default withStyles(styles)(SessionExpiredModal);
