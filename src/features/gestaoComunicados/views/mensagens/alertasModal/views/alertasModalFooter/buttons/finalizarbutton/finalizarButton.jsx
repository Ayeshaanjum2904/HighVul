import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '101px',
  },
});

const FinalizarButton = ({ sendAlerta, isLoading }) => {
  const classes = useStyles();
  return (
    <Button
      disabled={false}
      isLoading={isLoading}
      className={classes.button}
      onClick={() => sendAlerta()}
    >
      Publicar
    </Button>
  );
};

FinalizarButton.propTypes = {
  sendAlerta: PropTypes.func,
  isLoading: PropTypes.bool,
};

FinalizarButton.defaultProps = {
  sendAlerta: () => {},
  isLoading: false,
};

export default FinalizarButton;
