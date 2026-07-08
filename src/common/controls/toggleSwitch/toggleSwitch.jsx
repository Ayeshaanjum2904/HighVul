import React from 'react';
import PropTypes from 'prop-types';

import BaseSwitch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/styles';

import { Mixpanel } from 'modules';
import { switchStyles } from './toggleSwitchStyles';

const useStyles = makeStyles(switchStyles);

const ToggleSwitch = ({
  disabled, checked, onClick, isLoading, mixpanelTarget, mixpanelPage,
}) => {
  const classes = useStyles();
  return (
    !isLoading ? (
      <BaseSwitch
        checked={checked}
        onChange={(value) => {
          Mixpanel.trackButtonClick(mixpanelTarget, mixpanelPage);
          onClick(value);
        }}
        disabled={disabled}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
          disabled: classes.disabled,
        }}
      />
    ) : (
      <div className={classes.loading}>
        <CircularProgress color="inherit" size="18px" />
      </div>
    )
  );
};

ToggleSwitch.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  mixpanelTarget: PropTypes.string.isRequired,
  mixpanelPage: PropTypes.string.isRequired,
};

ToggleSwitch.defaultProps = {
  disabled: false,
  checked: false,
  onClick: () => {},
  isLoading: false,
};

export default ToggleSwitch;
