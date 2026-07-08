import React from 'react';

import { makeStyles } from '@material-ui/styles';
import InputNovoValor from './inputNovoValor';
import InputMotivo from './inputMotivo';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateAreas: "'newValue  reason'",
    gridTemplateColumns: '160px  1fr',
    gridTemplateRows: 'auto',
    columnGap: '20px',
  },
  valor: {
    gridArea: 'newValue',
  },
  motivo: {
    gridArea: 'reason',
  },
});

const AlteracaoLimiteParcial = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.valor}>
        <InputNovoValor />
      </div>
      <div className={classes.motivo}>
        <InputMotivo />
      </div>
    </div>
  );
};

export default AlteracaoLimiteParcial;
