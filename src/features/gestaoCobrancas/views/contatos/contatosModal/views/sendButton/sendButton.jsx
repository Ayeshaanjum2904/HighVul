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
  sendContato, isLoading, title, disabled,
}) => {
  const classes = useStyles();
  return (
    <Button
      disabled={disabled}
      isLoading={isLoading}
      className={classes.button}
      onClick={() => sendContato()}
    >
      {title}
    </Button>
  );
};

SendButton.propTypes = {
  sendContato: PropTypes.func,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

SendButton.defaultProps = {
  sendContato: () => {},
  isLoading: false,
  title: null,
  disabled: false,
};

export default SendButton;
