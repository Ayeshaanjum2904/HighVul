import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';

import FormInput from 'common/controls/input/formInput';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  input: {
    '&::placeholder': {
      opacity: 1,
    },
  },
  root: {
    height: '40px',
  },
}));

const TextFilter = ({
  taxa, setTaxa, isLoading,
}) => {
  const classes = useStyles();
  return (
    <FormInput
      label=""
      placeholder="Buscar taxa do mês"
      value={taxa}
      setValue={setTaxa}
      disabled={isLoading}
      type="number"
      InputProps={{
        startAdornment: (<SearchIcon style={{ fill: '#8f9bb3', color: '#8f9bb3', marginRight: '8px' }} />),
        classes: { input: classes.input, root: classes.root },
      }}
    />
  );
};

TextFilter.propTypes = {
  taxa: PropTypes.string,
  setTaxa: PropTypes.func,
  isLoading: PropTypes.bool,
};

TextFilter.defaultProps = {
  taxa: '',
  setTaxa: () => {},
  isLoading: false,
};

export default TextFilter;
