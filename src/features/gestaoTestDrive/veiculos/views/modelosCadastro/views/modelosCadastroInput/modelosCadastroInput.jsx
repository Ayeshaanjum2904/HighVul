import { makeStyles } from '@material-ui/styles';
import React from 'react';

import SelectMarca from './views/selectMarca';
import InputCodigo from './views/inputCodigo';
import InpudDescricao from './views/inputDescricao';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '170px 100px 1fr',
    gridTemplateRows: '64px',
    columnGap: '20px',
    gridTemplateAreas: "'marca codigo descricao'",
  },
  marca: {
    gridArea: 'marca',
    marginLeft: '8px',
  },
  codigo: {
    gridArea: 'codigo',
  },
  descricao: {
    gridArea: 'descricao',
  },
});

const ModelosCadastroInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        className={classes.marca}
        data-cy="selectMarca"
      >
        <SelectMarca />
      </div>
      <div
        className={classes.codigo}
        data-cy="inputCodigo"
      >
        <InputCodigo />
      </div>
      <div
        className={classes.descricao}
        data-cy="inputDescricao"
      >
        <InpudDescricao />
      </div>
    </div>
  );
};

export default ModelosCadastroInput;
