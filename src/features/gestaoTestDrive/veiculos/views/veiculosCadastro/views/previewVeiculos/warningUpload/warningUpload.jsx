import React from 'react';

import Warning from 'assets/icons/warning-color';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '40px',
    padding: '12px 24px 12px 14px',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 182, 0, 0.08)',
    border: '1px solid rgba(255, 182, 0, 0.32)',
    borderRadius: '4px',
  },
  text: {
    fontSize: '12px',
    color: '#BF8900',
    marginLeft: '10px',
  },
});

const WarningUpload = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Warning width={24} height={24} color="#BF8900" />
      <div className={classes.text}>
        Para selecionar uma imagem já existente, remova a imagem inserida.
      </div>
    </div>
  );
};

export default WarningUpload;
