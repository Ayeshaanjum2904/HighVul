import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import WarningSvg from 'assets/icons/warning';

const useStyles = makeStyles(() => ({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    paddingLeft: '6px',
    paddingTop: '4px',
    color: '#555770',
    fontSize: '14px',
    fontWeight: 900,
  },
}));

const FooterError = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningSvg
        width="25px"
        height="25px"
      />
      <div className={classes.text}>
        Erro ao editar template!
      </div>
    </div>
  );
};

export default FooterError;
