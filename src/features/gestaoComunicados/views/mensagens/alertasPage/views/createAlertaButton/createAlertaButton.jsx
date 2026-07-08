import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '198px',
    height: '40px',
  },
});

const CreateAlertaButton = ({ openModalAlerta }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => openModalAlerta()}
      fullWidth
      dataCy="botao-criar-alerta"
      mixpanelTarget="Criar novo alerta"
      mixpanelPage={trackedProperties.alertasPage}
    >
      Criar novo alerta
    </Button>
  );
};

CreateAlertaButton.propTypes = {
  openModalAlerta: PropTypes.func,
};

CreateAlertaButton.defaultProps = {
  openModalAlerta: () => {},
};

export default CreateAlertaButton;
