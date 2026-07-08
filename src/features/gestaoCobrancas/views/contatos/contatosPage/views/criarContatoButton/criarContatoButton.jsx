import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '135px',
    height: '40px',
  },
});

const CriarContatoButton = ({ openModal }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => openModal(true)}
      className={classes.button}
      mixpanelTarget="Criar novo Contato"
      mixpanelPage={trackedProperties.contatosPage}
    >
      Novo contato
    </Button>
  );
};

CriarContatoButton.propTypes = {
  openModal: PropTypes.func,
};

CriarContatoButton.defaultProps = {
  openModal: () => {},
};

export default CriarContatoButton;
