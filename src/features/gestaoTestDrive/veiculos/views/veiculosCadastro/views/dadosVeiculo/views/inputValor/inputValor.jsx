import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  error: {
    marginTop: '2px',
    color: '#C31E10',
    fontSize: '10px',
  },
});

const InputValor = ({
  valor, updateVeiculoProperty, isNovoValorValido,
}) => {
  const classes = useStyles();
  return (
    <>
      <FormatNumber
        type="currency"
        label="Valor"
        value={valor}
        setValue={(value) => { updateVeiculoProperty('valor', value); }}
      />

      {!isNovoValorValido ? (
        <div className={classes.error}>
          * Valor inválido
        </div>
      ) : null}
    </>
  );
};

InputValor.propTypes = {
  valor: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
  isNovoValorValido: PropTypes.bool,
};

InputValor.defaultProps = {
  valor: null,
  updateVeiculoProperty: () => {},
  isNovoValorValido: false,
};

export default InputValor;
