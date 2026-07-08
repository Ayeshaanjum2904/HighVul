import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FormInput from 'common/controls/input/formInput';

const useStyles = makeStyles({
  input: {
    width: '92px !important',
  },
});

const InputParcelas = ({ parcelas, setParcelas }) => {
  const classes = useStyles();
  return (
    <FormInput
      className={classes.input}
      type="number"
      label="Nº de parcelas"
      value={parcelas}
      setValue={(v) => {
        setParcelas(v);
      }}
      disabled={false}
    />
  );
};

InputParcelas.propTypes = {
  parcelas: PropTypes.number,
  setParcelas: PropTypes.func,
};

InputParcelas.defaultProps = {
  parcelas: null,
  setParcelas: () => {},
};

export default InputParcelas;
