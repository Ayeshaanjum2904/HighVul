import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  buttonSalvar: {
    width: '184px',
    height: '40px',
  },
  buttonLimpar: {
    width: '164px',
    height: '40px',
    marginLeft: '26px',
  },
});

const ButtonsTaxa = ({ onSubmit, clearForm }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={onSubmit}
        className={classes.buttonSalvar}
      >
        Salvar taxas inseridas
      </Button>
      <Button
        onClick={clearForm}
        color="gray"
        className={classes.buttonLimpar}
      >
        Limpar campos
      </Button>
    </div>
  );
};

ButtonsTaxa.propTypes = {
  onSubmit: PropTypes.func,
  clearForm: PropTypes.func,
};

ButtonsTaxa.defaultProps = {
  onSubmit: () => {},
  clearForm: () => {},
};

export default ButtonsTaxa;
