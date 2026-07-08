import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '210px',
    height: '40px',
  },
});

const ConcluirButton = ({ closeModal, disabled }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={closeModal}
      className={classes.button}
      disabled={disabled}
    >
      Concluir
    </Button>
  );
};

ConcluirButton.propTypes = {
  closeModal: PropTypes.func,
  disabled: PropTypes.bool,
};

ConcluirButton.defaultProps = {
  closeModal: () => {},
  disabled: false,
};

export default ConcluirButton;
