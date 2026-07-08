import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '120px',
  },
});

const ProximoButton = ({ onClick, disabled, isUploadingImagem }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={onClick}
      disabled={disabled || isUploadingImagem}
      color="new-gray"
    >
      Próximo
    </Button>
  );
};

ProximoButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isUploadingImagem: PropTypes.bool,
};

ProximoButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  isUploadingImagem: false,
};

export default ProximoButton;
