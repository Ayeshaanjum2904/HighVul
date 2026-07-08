import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'   .  financiado   aVista    total '",
    gridTemplateColumns: '1fr      100px       100px        40px',
    gridTemplateRows: '36px',
    width: '100%',
    borderBottom: '1px solid #e4e9f2',
  },
  item: {
    color: '#555770',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  financiado: {
    gridArea: 'financiado',
  },
  aVista: {
    gridArea: 'aVista',
  },
  total: {
    gridArea: 'total',
  },
});

const DetalheModalidadeRegiaoHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.financiado}`}>
        Financiado
      </div>
      <div className={`${classes.item} ${classes.aVista}`}>
        À Vista
      </div>
      <div className={`${classes.item} ${classes.total}`}>
        Total
      </div>
    </div>
  );
};

export default DetalheModalidadeRegiaoHeader;
