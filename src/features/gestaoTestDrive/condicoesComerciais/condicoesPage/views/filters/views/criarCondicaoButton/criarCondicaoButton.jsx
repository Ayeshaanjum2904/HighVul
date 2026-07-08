import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '312px',
    height: '40px',
  },
});

const CriarCondicaoButton = ({ setPage }) => {
  const classes = useStyles();
  return (
    <Button
      dataCy="cadastrarCondicaoComercial"
      onClick={() => setPage()}
      className={classes.button}
      mixpanelTarget="Cadastrar condição comercial"
      mixpanelPage={trackedProperties.condicoesPage}
    >
      Cadastrar condição comercial
    </Button>
  );
};

CriarCondicaoButton.propTypes = {
  setPage: PropTypes.func,
};

CriarCondicaoButton.defaultProps = {
  setPage: () => {},
};

export default CriarCondicaoButton;
