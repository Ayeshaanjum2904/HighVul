import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Mixpanel } from 'modules';
import IconButton from '@material-ui/core/IconButton';
import DownloadIcon from 'assets/icons/download-2';
import colors from 'assets/styles/colors';

const useStyles = makeStyles(() => ({
  button: {
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

const DownloadFileButton = ({
  disabled, fileUrl, mixpanelAction, color, onDownload,
}) => {
  const classes = useStyles();
  const canDownload = !!onDownload || fileUrl !== null;

  const handleClick = () => {
    Mixpanel.trackPreviewFiles(mixpanelAction);

    if (onDownload) {
      onDownload();
      return;
    }

    window.open(fileUrl);
  };

  return (
    <IconButton
      className={classes.button}
      disabled={disabled || !canDownload}
      onClick={handleClick}
      disableRipple
    >
      <DownloadIcon style={{ color: disabled ? colors.secundary_color_100 : color }} />
    </IconButton>
  );
};

DownloadFileButton.propTypes = {
  fileUrl: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  mixpanelAction: PropTypes.string.isRequired,
  onDownload: PropTypes.func,

};

DownloadFileButton.defaultProps = {
  disabled: false,
  fileUrl: null,
  color: colors.secundary_color_700,
  onDownload: null,
};

export default DownloadFileButton;
