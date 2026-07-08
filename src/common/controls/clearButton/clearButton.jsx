import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '../button';

const useStyles = makeStyles(() => ({
  button: {
    width: '135px',
    height: '40px',
    color: '#FFFFFF',
  },
}));

const ClearButton = ({ title, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      color="new-gray"
      className={classes.button}
      {...props}
    >
      {title}
    </Button>
  );
};

ClearButton.propTypes = {
  title: PropTypes.string,
};

ClearButton.defaultProps = {
  title: 'Limpar filtros',
};

export default ClearButton;
