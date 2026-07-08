import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { ModalEmail } from '../../../../../../../redux/enums';

const useStyles = makeStyles({
  button: {
    width: '174px',
  },
});

const VoltarButton = ({ setModalStatus, isLoading }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => setModalStatus(ModalEmail.edicaoEmail)}
      color="new-gray"
      disabled={isLoading}
    >
      Voltar
    </Button>
  );
};

VoltarButton.propTypes = {
  setModalStatus: PropTypes.func,
  isLoading: PropTypes.bool,
};

VoltarButton.defaultProps = {
  setModalStatus: () => {},
  isLoading: false,
};

export default VoltarButton;
