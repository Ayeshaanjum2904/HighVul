import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '174px',
  },
});

const FinalizarButton = ({ sendTemplate, isLoading }) => {
  const classes = useStyles();
  return (
    <Button
      disabled={false}
      isLoading={isLoading}
      className={classes.button}
      onClick={() => sendTemplate()}
    >
      Salvar
    </Button>
  );
};

FinalizarButton.propTypes = {
  sendTemplate: PropTypes.func,
  isLoading: PropTypes.bool,
};

FinalizarButton.defaultProps = {
  sendTemplate: () => {},
  isLoading: false,
};

export default FinalizarButton;
