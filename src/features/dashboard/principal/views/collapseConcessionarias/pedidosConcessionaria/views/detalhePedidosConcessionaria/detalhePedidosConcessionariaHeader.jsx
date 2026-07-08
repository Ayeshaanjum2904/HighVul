import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'codBuc  marca concessionaria  regional  total  aVista  financiado '",
    gridTemplateColumns: '5em     4.5em      1fr          9em     4em    4em      4em',
    gridTemplateRows: '28px',
    width: '100%',
    borderBottom: '1px solid #EDF1F7',
    letterSpacing: '1.5px',
  },
  item: {
    color: '#8F9BB3',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  codBuc: {
    gridArea: 'codBuc',
  },
  concessionaria: {
    gridArea: 'concessionaria',
  },
  marca: {
    gridArea: 'marca',
  },
  regional: {
    gridArea: 'regional',
  },
  total: {
    gridArea: 'total',
  },
  aVista: {
    gridArea: 'aVista',
  },
  financiado: {
    gridArea: 'financiado',
  },
});

const DetalhePedidosConcessionariaHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.codBuc}`}>
        CÓD. BUC
      </div>
      <div className={`${classes.item} ${classes.marca}`}>
        MARCA
      </div>
      <div className={`${classes.item} ${classes.concessionaria}`}>
        CONCESSIONÁRIA
      </div>
      <div className={`${classes.item} ${classes.regional}`}>
        REGIONAL
      </div>
      <div className={`${classes.item} ${classes.total}`}>
        TOTAL
      </div>
      <div className={`${classes.item} ${classes.aVista}`}>
        À VISTA
      </div>
      <div className={`${classes.item} ${classes.financiado}`}>
        FINANC.
      </div>
    </div>
  );
};

export default DetalhePedidosConcessionariaHeader;
