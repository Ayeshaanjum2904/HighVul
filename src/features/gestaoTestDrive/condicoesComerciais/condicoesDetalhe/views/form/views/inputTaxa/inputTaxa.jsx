import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FormInput from 'common/controls/input/formInput';

const useStyles = makeStyles({
  input: {
    width: '92px !important',
  },
});

const InputTaxa = ({ taxa, setTaxa }) => {
  const classes = useStyles();
  return (
    <FormInput
      className={classes.input}
      type="percent"
      label="Taxa (%)"
      value={taxa}
      setValue={(v) => {
        setTaxa(v);
      }}
      disabled={false}
    />
  );
};

InputTaxa.propTypes = {
  taxa: PropTypes.number,
  setTaxa: PropTypes.func,
};

InputTaxa.defaultProps = {
  taxa: null,
  setTaxa: () => {},
};

export default InputTaxa;
