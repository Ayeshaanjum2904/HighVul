import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    color: '#555770',
  },
});

const ChartLoading = ({ size }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress
        color="inherit"
        size={`${size}px`}
      />
    </div>
  );
};

ChartLoading.propTypes = {
  size: PropTypes.number,
};
ChartLoading.defaultProps = {
  size: 30,
};

export default ChartLoading;
