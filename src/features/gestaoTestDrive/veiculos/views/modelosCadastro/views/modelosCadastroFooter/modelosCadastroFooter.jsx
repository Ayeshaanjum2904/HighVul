import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';

import CadastroModeloButton from './cadastroModeloButton';
import ConfirmacaoDeleteModelo from './confirmacaoDeleteModelo';
import DeleteModeloButton from './deletarModeloButton';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '40px',
  },
});

const ModelosCadastroFooter = () => {
  const classes = useStyles();
  const [isDelete, setIsDelete] = useState(false);
  return (
    <div className={classes.container}>
      {!isDelete ? (
        <>
          <CadastroModeloButton />
          <DeleteModeloButton onClick={() => setIsDelete(true)} />
        </>
      ) : <ConfirmacaoDeleteModelo voltar={() => setIsDelete(false)} />}

    </div>
  );
};

export default ModelosCadastroFooter;
