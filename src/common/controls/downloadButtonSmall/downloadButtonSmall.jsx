import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import { Download } from 'react-feather';

const useStyles = makeStyles({
  container: {
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    backgroundColor: '#C5CEE0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'white',
  },

  icon: {
    padding: '8px',
    color: 'white',
  },
});

const DownloadButtonSmall = ({
  onClick,
}) => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
      className={classes.container}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="button"
    >
      <Download />
    </div>
  );
};

DownloadButtonSmall.propTypes = {
  onClick: PropTypes.func,
};

DownloadButtonSmall.defaultProps = {
  onClick: null,
};

export default DownloadButtonSmall;
