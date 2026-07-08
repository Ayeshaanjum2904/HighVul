import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'   .  aprovado   reprovado    total '",
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
  aprovado: {
    gridArea: 'aprovado',
  },
  reprovado: {
    gridArea: 'reprovado',
  },
  total: {
    gridArea: 'total',
  },
});

const DetalheCreditoRegiaoHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.aprovado}`}>
        Aprovado
      </div>
      <div className={`${classes.item} ${classes.reprovado}`}>
        Reprovado
      </div>
      <div className={`${classes.item} ${classes.total}`}>
        Total
      </div>
    </div>
  );
};

export default DetalheCreditoRegiaoHeader;
