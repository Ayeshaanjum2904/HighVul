import { makeStyles } from '@material-ui/styles';
import React from 'react';
import PropTypes from 'prop-types';

import {
  ChartEmpty,
  ChartLoading, ChartError,
} from '../../../../../../commonViews/chartState/state';

const useStyles = makeStyles({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SelectState = ({
  isError, isEmpty, isLoading, children,
}) => {
  const classes = useStyles();
  if (isError) {
    return (
      <div className={classes.content}>
        <ChartError />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={classes.content}>
        <ChartLoading />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={classes.content}>
        <ChartEmpty iconSmall />
      </div>
    );
  }

  return (
    children
  );
};

SelectState.propTypes = {
  children: PropTypes.node,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
};

SelectState.defaultProps = {
  children: null,
  isError: false,
  isLoading: false,
  isEmpty: false,
};

export default SelectState;
