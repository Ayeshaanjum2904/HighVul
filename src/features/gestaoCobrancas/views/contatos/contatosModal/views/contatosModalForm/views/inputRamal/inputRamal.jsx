import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  numberFormat: {
    marginTop: '-19px !important',
  },
});

const InputRamal = ({
  ramal, setRamal, hideLabel, disabled,
}) => {
  const classes = useStyles({ hideLabel });

  return (
    <FormInput
      className={hideLabel ? classes.numberFormat : ''}
      type="number"
      label={hideLabel ? null : 'Ramal'}
      value={ramal}
      setValue={(value) => {
        setRamal(value);
      }}
      format="####"
      disabled={disabled}
    />
  );
};

InputRamal.propTypes = {
  setRamal: PropTypes.func,
  ramal: PropTypes.string,
  hideLabel: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputRamal.defaultProps = {
  setRamal: () => {},
  ramal: '',
  hideLabel: false,
  disabled: false,
};

export default InputRamal;
