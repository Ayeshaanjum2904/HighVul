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

const BuscarCartaMes = ({
  cartaMes, setCartaMes, isLoading,
}) => {
  const classes = useStyles();
  return (
    <TextFilterDebounce
      dataCy="inputBusca"
      label=""
      placeholder="Buscar carta do mês"
      value={cartaMes}
      setValue={setCartaMes}
      InputProps={{ classes: { input: classes.input } }}
      showSearchIcon
      disabled={isLoading}
    />
  );
};

BuscarCartaMes.propTypes = {
  cartaMes: PropTypes.string,
  setCartaMes: PropTypes.func,
  isLoading: PropTypes.bool,
};

BuscarCartaMes.defaultProps = {
  cartaMes: '',
  setCartaMes: () => {},
  isLoading: false,
};

export default BuscarCartaMes;
