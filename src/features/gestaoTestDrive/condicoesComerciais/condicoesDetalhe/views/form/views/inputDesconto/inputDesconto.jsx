import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FormInput from 'common/controls/input/formInput';

const useStyles = makeStyles({
  input: {
    width: '92px !important',
  },
});

const InputDesconto = ({ desconto, setDesconto }) => {
  const classes = useStyles();
  return (
    <FormInput
      className={classes.input}
      type="percent"
      label="Desconto (%)"
      value={desconto}
      setValue={(v) => {
        setDesconto(v);
      }}
      disabled={false}
    />
  );
};

InputDesconto.propTypes = {
  desconto: PropTypes.number,
  setDesconto: PropTypes.func,
};

InputDesconto.defaultProps = {
  desconto: null,
  setDesconto: () => {},
};

export default InputDesconto;
