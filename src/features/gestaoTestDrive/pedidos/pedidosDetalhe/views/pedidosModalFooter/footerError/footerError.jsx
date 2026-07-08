import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

const FooterError = ({ isError, isErrorComentario }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningSvg
        width="25px"
        height="25px"
      />
      <div className={classes.text}>
        {isError ? 'Falha ao atualizar o pedido!' : null}
        {isErrorComentario ? 'Falha ao inserir um comentario!' : null}
      </div>
    </div>
  );
};

FooterError.propTypes = {
  isError: PropTypes.bool,
  isErrorComentario: PropTypes.bool,
};

FooterError.defaultProps = {
  isError: false,
  isErrorComentario: false,
};

export default FooterError;
