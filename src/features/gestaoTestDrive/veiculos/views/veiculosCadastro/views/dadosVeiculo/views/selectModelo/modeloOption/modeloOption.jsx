import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Edit3 } from 'react-feather';
import ButtonIcon from 'common/controls/buttonIcon';
import { validateUrl } from 'utils/validate';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: '8px 20px 8px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#555770',
    fontSize: '14px',

    '&:hover $button': {
      display: 'block',
    },
    '&:hover $img': {
      display: 'none',
    },
  },
  button: {
    display: 'none',
    width: '30px',
    height: '100%',
    color: '#555770',
    textAlign: 'center',
  },
  img: {
    width: '30px',
    height: '100%',
    textAlign: 'center',
  },
});

const ModeloOption = ({ modelo, openCadastroModelo }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      data-cy={modelo.value}
    >
      {modelo.text}
      <ButtonIcon
        className={classes.button}
        onClick={() => openCadastroModelo(modelo.value)}
      >
        <Edit3 size={20} />
      </ButtonIcon>
      {validateUrl(modelo.urlModelo)
        ? <img className={classes.img} src={modelo.urlModelo} alt="Veiculo" />
        : null}
    </div>
  );
};

ModeloOption.propTypes = {
  modelo: PropTypes.object,
  openCadastroModelo: PropTypes.func,
};

ModeloOption.defaultProps = {
  modelo: null,
  openCadastroModelo: () => {},
};

export default ModeloOption;
