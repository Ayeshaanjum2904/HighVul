import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Mixpanel } from 'modules';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton, SvgIcon } from '@mui/material';
import colors from 'assets/styles/colors';

const useStyles = makeStyles(() => ({
  button: {
    color: colors.secundary_color_700,
    borderRadius: 0,
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
}));

const PreviewFileButton = ({
  disabled, fileUrl, mixpanelAction, onClick,
}) => {
  const classes = useStyles();
  const handleClick = onClick || (() => {
    Mixpanel.trackPreviewFiles(mixpanelAction);
    window.open(fileUrl);
  });
  return (
    <IconButton
      className={classes.button}
      disabled={disabled || (!onClick && fileUrl === null)}
      onClick={handleClick}
      disableRipple
    >
      <SvgIcon
        styles={{
          fontSize: '24px',
        }}
      >
        <VisibilityIcon />
      </SvgIcon>
    </IconButton>
  );
};

PreviewFileButton.propTypes = {
  fileUrl: PropTypes.string,
  disabled: PropTypes.bool,
  mixpanelAction: PropTypes.string,
  onClick: PropTypes.func,
};

PreviewFileButton.defaultProps = {
  disabled: false,
  mixpanelAction: null,
  onClick: null,
  fileUrl: null,
};

export default PreviewFileButton;
