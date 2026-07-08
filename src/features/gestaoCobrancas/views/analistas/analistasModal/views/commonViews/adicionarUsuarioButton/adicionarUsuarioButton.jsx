import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '93px',
    height: '40px',
  },
});

const AdicionarUsuarioButton = ({ onClick, isLoading, disabled }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      color="new-gray"
      className={classes.button}
      isLoading={isLoading}
      disabled={disabled}
      mixpanelTarget="Adicionar analista"
      mixpanelPage={trackedProperties.analistasPage}
    >
      Adicionar
    </Button>
  );
};

AdicionarUsuarioButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

AdicionarUsuarioButton.defaultProps = {
  onClick: () => {},
  isLoading: null,
  disabled: null,
};

export default AdicionarUsuarioButton;
