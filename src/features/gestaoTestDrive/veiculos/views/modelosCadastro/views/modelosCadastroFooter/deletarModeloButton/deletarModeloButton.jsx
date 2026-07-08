import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '40px',
    height: '40px',
    marginLeft: '8px',
  },
});

const DeletarModeloButton = ({ onClick, id, disabled }) => {
  const classes = useStyles();
  return (
    id != null ? (
      <Button
        onClick={onClick}
        color="gray"
        className={classes.button}
        disabled={disabled}
      >
        <DeleteIcon />
      </Button>
    ) : null
  );
};

DeletarModeloButton.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.any,
  disabled: PropTypes.bool,
};

DeletarModeloButton.defaultProps = {
  onClick: () => {},
  id: null,
  disabled: null,
};

export default DeletarModeloButton;
