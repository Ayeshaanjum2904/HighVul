import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FormInput from 'common/controls/input/formInput';

const useStyles = makeStyles({
  input: {
    width: '92px !important',
  },
});

const InputCoeficiente = ({ coeficiente, setCoeficiente }) => {
  const classes = useStyles();
  return (
    <FormInput
      className={classes.input}
      type="number"
      label="Coeficiente"
      value={coeficiente}
      setValue={(v) => {
        setCoeficiente(v);
      }}
      disabled={false}
    />
  );
};

InputCoeficiente.propTypes = {
  coeficiente: PropTypes.number,
  setCoeficiente: PropTypes.func,
};

InputCoeficiente.defaultProps = {
  coeficiente: null,
  setCoeficiente: () => {},
};

export default InputCoeficiente;
