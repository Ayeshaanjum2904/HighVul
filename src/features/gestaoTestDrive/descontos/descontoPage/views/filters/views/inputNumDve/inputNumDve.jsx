import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextFilterDebounce from 'common/controls/textFilterDebounce';

const useStyles = makeStyles(() => ({
  input: {
    '&::placeholder': {
      opacity: 1,
    },
  },
}));

const InputNumDve = ({
  numeroDve, setNumeroDve, isLoading,
}) => {
  const classes = useStyles();
  return (
    <TextFilterDebounce
      label=""
      placeholder="Buscar por DVE"
      value={numeroDve}
      setValue={setNumeroDve}
      InputProps={{ classes: { input: classes.input } }}
      showSearchIcon
      disabled={isLoading}
    />
  );
};

InputNumDve.propTypes = {
  numeroDve: PropTypes.string,
  setNumeroDve: PropTypes.func,
  isLoading: PropTypes.bool,
};

InputNumDve.defaultProps = {
  numeroDve: '',
  setNumeroDve: () => {},
  isLoading: false,
};

export default InputNumDve;
