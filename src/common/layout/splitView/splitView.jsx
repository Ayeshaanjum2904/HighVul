import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

import SideSheet from '../sideSheet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  mainContent: {
    height: '100%',
    overflow: 'auto',
  },

  mainContentExpanded: {
    width: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  mainContentShrinked: (props) => ({
    width: `calc(100% - ${props.drawerWidth}px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SplitView = ({
  open, renderSideSheetContent, sideSheetProps: sideSheetPropsRaw, children,
}) => {
  const sideSheetProps = (_.isObject(sideSheetPropsRaw)) ? sideSheetPropsRaw : {};
  if (!sideSheetProps?.width) sideSheetProps.width = 240;
  sideSheetProps.open = open;

  const classes = useStyles({ drawerWidth: sideSheetProps.width });

  return (
    <div className={classes.root}>
      <div className={`
        ${classes.mainContent}
        ${open ? classes.mainContentShrinked : classes.mainContentExpanded}
      `}
      >
        {children}
      </div>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SideSheet {...sideSheetProps}>
        {renderSideSheetContent?.()}
      </SideSheet>
    </div>
  );
};

SplitView.propTypes = {
  open: PropTypes.bool.isRequired,
  renderSideSheetContent: PropTypes.func,
  sideSheetProps: PropTypes.object,
  children: PropTypes.node,
};

SplitView.defaultProps = {
  sideSheetProps: {},
  renderSideSheetContent: () => null,
  children: null,
};

export default SplitView;
