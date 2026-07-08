/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  page: {
    fontFamily: 'CircularStd',
    color: '#555770',
    padding: '0 32px',
  },

  title: {
    fontSize: '24px',
    fontWeight: '500',
  },

  section: {
    width: '100%',
    padding: '16px',
  },

  sectionTitle: {
    padding: '0 0 16px 0',
    fontSize: '18px',
    fontWeight: '300',
  },
});

export const Page = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>{children}</div>
  );
};

export const Title = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      {children}
    </div>
  );
};

export const Section = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.sectionTitle}>{title}</div>
      <div>
        {children}
      </div>
    </div>
  );
};
