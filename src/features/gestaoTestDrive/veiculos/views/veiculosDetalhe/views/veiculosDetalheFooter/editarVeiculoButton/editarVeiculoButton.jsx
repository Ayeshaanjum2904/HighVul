import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '100%',
    height: '40px',
  },
});

const EditarVeiculoButton = ({ editVeiculo }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={editVeiculo}
      className={classes.button}
      mixpanelTarget="Editar veículo"
      mixpanelPage={trackedProperties.veiculosPage}
    >
      Editar veículo
    </Button>
  );
};

EditarVeiculoButton.propTypes = {
  editVeiculo: PropTypes.func,
};

EditarVeiculoButton.defaultProps = {
  editVeiculo: () => {},
};

export default EditarVeiculoButton;
