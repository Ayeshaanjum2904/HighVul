import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import CloseButton from '../modal/closeModalButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: (props) => props.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: (props) => props.drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: (props) => -props.drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  closeButton: {
    zIndex: '1',
    position: 'absolute',
    top: '18px',
    right: '24px',
    width: '36px',
    height: '40px',
    color: '#555770',
  },
}));

const SideSheet = ({
  open, onClickClose, anchor, width, children, hideCloseButton,
}) => {
  const classes = useStyles({ drawerWidth: width });

  return (
    <div className={classes.root}>
      <div
        className={`${classes.content} ${open ? classes.contentShift : ''}`}
      >
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor={anchor}
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {!hideCloseButton
            ? (
              <div className={classes.closeButton}>
                <CloseButton onClick={onClickClose} />
              </div>
            ) : null}
          {children}
        </Drawer>
      </div>
    </div>
  );
};

SideSheet.propTypes = {
  open: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func,
  anchor: PropTypes.string,
  width: PropTypes.number,
  children: PropTypes.node,
  hideCloseButton: PropTypes.bool,
};

SideSheet.defaultProps = {
  anchor: 'right',
  width: 240,
  onClickClose: () => {},
  children: null,
  hideCloseButton: false,
};

export default SideSheet;
