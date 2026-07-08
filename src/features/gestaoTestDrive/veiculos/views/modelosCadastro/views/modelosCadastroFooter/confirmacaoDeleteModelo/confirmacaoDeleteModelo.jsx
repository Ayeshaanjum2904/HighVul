import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { trackedProperties } from 'modules';
import Button from 'common/controls/button';

import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    fontSize: '14px',
    alignItems: 'center',
  },
  text: {
    color: colors.secundary_color_700,
    paddingRight: '65px',
  },
  voltar: {
    textAlign: 'center',
  },
  excluir: {
    textAlign: 'center',
    marginLeft: '8px',
  },
  botao: {
    padding: '10px 16px',
  },
});

const ConfirmacaoDeleteModelo = ({
  voltar, deleteModelo, isLoading, disabled,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        Deseja mesmo excluir o modelo?
      </div>
      <div className={classes.voltar}>
        <Button
          onClick={voltar}
          disabled={disabled}
          color="dark_gray_border"
          className={classes.botao}
        >
          Voltar
        </Button>
      </div>
      <div className={classes.excluir}>
        {isLoading
          ? <CircularProgress color="inherit" size="18px" /> : (
            <Button
              onClick={deleteModelo}
              disabled={disabled}
              mixpanelTarget="Delete Modelo"
              mixpanelPage={trackedProperties.veiculosPage}
              color="new-gray"
              className={classes.botao}
            >
              Excluir Modelo
            </Button>
          )}

      </div>
    </div>
  );
};

ConfirmacaoDeleteModelo.propTypes = {
  deleteModelo: PropTypes.func,
  voltar: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

ConfirmacaoDeleteModelo.defaultProps = {
  deleteModelo: () => {},
  voltar: () => {},
  isLoading: false,
  disabled: PropTypes.bool,
};

export default ConfirmacaoDeleteModelo;
