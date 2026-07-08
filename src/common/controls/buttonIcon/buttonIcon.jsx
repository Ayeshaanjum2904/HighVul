/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Mixpanel } from 'modules';

import IconButton from '@material-ui/core/IconButton';
import LoadingIcon from '../loadingIcon';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 0,
    padding: 0,
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: 'inherit',
    },
    cursor: 'pointer',
  },
  input: {
    display: 'none',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));

const ButtonIcon = ({
  children, disabled, onClick, className, isLoading, changeProgress,
  mixpanelTarget, mixpanelPage, ...others
}) => {
  const classes = useStyles();
  return (
    <IconButton
      className={`${classes.button} ${className}`}
      disabled={disabled || isLoading}
      disableRipple
      onClick={() => {
        Mixpanel.trackButtonClick(mixpanelTarget, mixpanelPage);
        onClick();
      }}
      {...others}
    >
      {isLoading ? (
        <div className={classes.loading}>
          {changeProgress ? <LoadingIcon /> : <CircularProgress color="inherit" size="18px" />}
        </div>
      ) : children}
    </IconButton>
  );
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  changeProgress: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  mixpanelTarget: PropTypes.string,
  mixpanelPage: PropTypes.string,
};

ButtonIcon.defaultProps = {
  onClick: () => {},
  children: null,
  changeProgress: false,
  disabled: false,
  className: null,
  isLoading: false,
  mixpanelTarget: null,
  mixpanelPage: null,
};

export default ButtonIcon;
