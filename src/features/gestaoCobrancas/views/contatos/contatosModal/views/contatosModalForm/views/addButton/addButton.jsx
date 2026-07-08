import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    width: '32px',
  },
});

const AddButton = ({
  disabled, onClick, isLoading,
}) => {
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      isLoading={isLoading}
      color="new-gray"
      className={classes.container}
      disabled={disabled}
    >
      <AddIcon />
    </Button>
  );
};

AddButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

AddButton.defaultProps = {
  disabled: false,
  onClick: () => {},
  isLoading: false,
};

export default AddButton;
