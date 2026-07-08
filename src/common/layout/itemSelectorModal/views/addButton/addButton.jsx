import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: 'auto',
  },
});

const AddButton = ({
  onConfirm, pageName, textoBotao,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => onConfirm()}
      mixpanelTarget="Confirmar mvs selecionados"
      mixpanelPage={trackedProperties[pageName]}
    >
      {textoBotao}
    </Button>
  );
};

AddButton.propTypes = {
  onConfirm: PropTypes.func,
  pageName: PropTypes.string,
  textoBotao: PropTypes.string,
};

AddButton.defaultProps = {
  onConfirm: () => {},
  pageName: null,
  textoBotao: null,
};

export default AddButton;
