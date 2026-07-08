import React from 'react';
import PropTypes from 'prop-types';
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

const FooterError = ({ isUpdateError, isComentarioError }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningSvg
        width="25px"
        height="25px"
      />
      <div className={classes.text}>
        {isUpdateError ? 'Falha ao atualizar a solicitação!' : null}
        {isComentarioError ? 'Falha ao inserir o comentário!' : null}
      </div>
    </div>
  );
};

FooterError.propTypes = {
  isUpdateError: PropTypes.bool,
  isComentarioError: PropTypes.bool,
};

FooterError.defaultProps = {
  isUpdateError: false,
  isComentarioError: false,
};

export default FooterError;
