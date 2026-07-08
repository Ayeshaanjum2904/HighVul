import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FormInput from 'common/controls/input/formInput';

const useStyles = makeStyles({
  input: {
    width: '92px !important',
  },
});

const InputPrazo = ({ prazo, setPrazo }) => {
  const classes = useStyles();
  return (
    <FormInput
      className={classes.input}
      type="number"
      label="Prazo venc. (dias)"
      value={prazo}
      setValue={(v) => {
        setPrazo(v);
      }}
      disabled={false}
    />
  );
};

InputPrazo.propTypes = {
  prazo: PropTypes.number,
  setPrazo: PropTypes.func,
};

InputPrazo.defaultProps = {
  prazo: null,
  setPrazo: () => {},
};

export default InputPrazo;
