import React from 'react';
import { makeStyles } from '@material-ui/styles';

import FlexRow from 'common/layout/flexRow';
import IndicadorPagina from './indicadorPagina';
import SeletorPagina from './seletorPagina';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    padding: '0 40px 0 48px',
    display: 'flex',
  },
});

const PaginationFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FlexRow justifyContent="flex-end">
        <IndicadorPagina />
        <SeletorPagina />
      </FlexRow>
    </div>
  );
};

PaginationFooter.propTypes = {
};

PaginationFooter.defaultProps = {
};

export default PaginationFooter;
