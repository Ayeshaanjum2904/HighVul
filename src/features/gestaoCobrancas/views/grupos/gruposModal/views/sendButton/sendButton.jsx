import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '174px',
  },
});

const SendButton = ({
  insertGrupo, isLoading, disabled,
}) => {
  const classes = useStyles();
  return (
    <Button
      disabled={disabled}
      isLoading={isLoading}
      className={classes.button}
      onClick={() => insertGrupo()}
    >
      Criar grupo
    </Button>
  );
};

SendButton.propTypes = {
  insertGrupo: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

SendButton.defaultProps = {
  insertGrupo: () => {},
  isLoading: false,
  disabled: false,
};

export default SendButton;
