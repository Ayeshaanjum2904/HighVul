/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { ChartLoading, ChartEmpty, ChartError } from './state';
import CardTtile from '../cardTitle';

import './chartState.scss';

const useStlyes = makeStyles({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: (props) => props.backgroundColor,
  },
  title: {
    position: 'absolute',
    top: (props) => props.top,
    left: (props) => props.left,
  },
});

const ChartState = ({
  isError, isLoading, children, isEmpty,
  title, dateFilter, top, left, iconSmall, breakLine, backgroundColor,
}) => {
  const classes = useStlyes({ top, left, backgroundColor });

  if (isError) {
    return (
      <div className={classes.content}>
        <div className={classes.title}>
          <CardTtile title={title} dateFilter={dateFilter} />
        </div>
        <ChartError breakLine={breakLine} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={classes.content}>
        <div className={classes.title}>
          <CardTtile title={title} dateFilter={dateFilter} />
        </div>
        <ChartLoading />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={classes.content}>
        <div className={classes.title}>
          <CardTtile title={title} dateFilter={dateFilter} />
        </div>
        <ChartEmpty iconSmall={iconSmall} breakLine={breakLine} />
      </div>
    );
  }

  return (
    <div className={classes.content}>
      {children}
    </div>
  );
};

ChartState.propTypes = {
  children: PropTypes.node,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  title: PropTypes.string,
  dateFilter: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  iconSmall: PropTypes.bool,
  breakLine: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

ChartState.defaultProps = {
  children: null,
  isError: false,
  isLoading: false,
  isEmpty: false,
  title: '',
  dateFilter: '',
  top: '16px',
  left: '16px',
  iconSmall: false,
  breakLine: false,
  backgroundColor: '#f7f9fc',
};

export default ChartState;
