import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    color: '#555770',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: '3px',
  },
  subtitle: {
    color: '#a6a8bb',
    fontSize: '12px',
    lineHeight: '16px',
  },
});

const CardTitle = ({ title, dateFilter }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.subtitle}>
        {dateFilter}
      </div>
    </>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string,
  dateFilter: PropTypes.string,
};

CardTitle.defaultProps = {
  title: '',
  dateFilter: '',
};

export default CardTitle;
