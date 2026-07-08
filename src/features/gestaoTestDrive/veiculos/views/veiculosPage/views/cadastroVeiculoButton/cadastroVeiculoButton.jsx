import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

import { trackedProperties } from 'modules';
import { Pages } from '../../../../redux/enums';

const useStyles = makeStyles({
  button: {
    width: '130px',
    height: '40px',
  },
});

const CadastroVeiculoButton = ({ setVeiculosPage, hasPermissionCadastroVeiculo }) => {
  const classes = useStyles();
  return (
    hasPermissionCadastroVeiculo ? (
      <Button
        onClick={() => setVeiculosPage(Pages.cadastroVeiculo)}
        className={classes.button}
        mixpanelTarget="Cadastrar novo veículo"
        mixpanelPage={trackedProperties.veiculosPage}
      >
        Novo Veículo
      </Button>
    ) : null
  );
};

CadastroVeiculoButton.propTypes = {
  setVeiculosPage: PropTypes.func,
  hasPermissionCadastroVeiculo: PropTypes.bool,
};

CadastroVeiculoButton.defaultProps = {
  setVeiculosPage: () => {},
  hasPermissionCadastroVeiculo: false,
};

export default CadastroVeiculoButton;
