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

const ProximoButton = ({ setModalStatus, disabled }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => setModalStatus(ModalEmail.previewEmail)}
      disabled={disabled}
      color="new-gray"
    >
      Próximo
    </Button>
  );
};

ProximoButton.propTypes = {
  setModalStatus: PropTypes.func,
  disabled: PropTypes.bool,
};

ProximoButton.defaultProps = {
  setModalStatus: () => {},
  disabled: false,
};

export default ProximoButton;
