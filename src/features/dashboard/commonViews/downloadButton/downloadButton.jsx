import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import { Download, Loader } from 'react-feather';

import ButtonIcon from 'common/controls/buttonIcon';

import './downloadButton.scss';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    width: '40px',
    height: '40px',
    background: colors.secundary_color_700,
    borderRadius: '4px',
    color: 'white',
    '&:hover': {
      background: colors.secundary_color_800,
    },
    '&:focus': {
      background: colors.secundary_color_900,
    },
    '&.MuiIconButton-root.Mui-disabled': {
      background: colors.secundary_color_100,
      color: colors.secundary_color_800,
    },
  },
  loading: {
    animation: 'spin 2s linear infinite',
  },
});

const DownloadButton = ({
  onClick,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const classes = useStyles();

  const download = async () => {
    setIsDownloading(true);
    await onClick();
    setIsDownloading(false);
  };

  return (
    <ButtonIcon
      onClick={download}
      isLoading={isDownloading}
      disabled={isDownloading}
      className={classes.container}
      mixpanelTarget="Download Dashboard"
      mixpanelPage={trackedProperties.dashboardPage}
    >
      {isDownloading
        ? <Loader size="25" color="white" className={classes.loading} />
        : <Download size="25" color="white" />}

    </ButtonIcon>

  );
};

DownloadButton.propTypes = {
  onClick: PropTypes.func,
};

DownloadButton.defaultProps = {
  onClick: null,
};

export default DownloadButton;
