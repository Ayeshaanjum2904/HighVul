import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  error: {
    marginTop: '2px',
    color: '#555770',
    fontSize: '10px',
  },
});

const InputNovoValor = ({
  novoValor, updateNovoValor, isNovoValorValido,
}) => {
  const classes = useStyles();
  return (
    <>
      <FormatNumber
        type="currency"
        label="Novo valor"
        value={novoValor}
        setValue={(value) => { updateNovoValor(value); }}
      />

      {!isNovoValorValido ? (
        <div className={classes.error}>
          * Novo valor maior que o solicitado
        </div>
      ) : null}
    </>
  );
};

InputNovoValor.propTypes = {
  novoValor: PropTypes.any,
  updateNovoValor: PropTypes.func,
  isNovoValorValido: PropTypes.bool,

};

InputNovoValor.defaultProps = {
  novoValor: null,
  updateNovoValor: () => {},
  isNovoValorValido: false,
};

export default InputNovoValor;
