import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import AddIcon from '@material-ui/icons/Add';
import ButtonIcon from 'common/controls/buttonIcon';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    padding: '8px 0px 8px 21px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderTop: 'solid 1px #edf1f7',
    color: colors.primary_color_600,
    fontSize: '14px',
  },
  icon: {
    width: '20px',
    marginRight: '20px',
    color: colors.primary_color_600,
  },
  button: {
    width: '100%',
  },
});

const ModeloAdd = ({ modelo, openCadastroModelo }) => {
  const classes = useStyles();
  return (
    <ButtonIcon
      className={classes.button}
      onClick={() => openCadastroModelo(null)}
      mixpanelTarget={modelo?.text}
      mixpanelPage={trackedProperties.veiculosPage}
    >
      <div
        className={classes.container}
        data-cy="novo-modelo"
      >
        <div className={classes.icon}>
          <AddIcon />
        </div>
        {modelo?.text}
      </div>
    </ButtonIcon>
  );
};

ModeloAdd.propTypes = {
  openCadastroModelo: PropTypes.func,
  modelo: PropTypes.object,
};

ModeloAdd.defaultProps = {
  openCadastroModelo: () => {},
  modelo: null,
};

export default ModeloAdd;
