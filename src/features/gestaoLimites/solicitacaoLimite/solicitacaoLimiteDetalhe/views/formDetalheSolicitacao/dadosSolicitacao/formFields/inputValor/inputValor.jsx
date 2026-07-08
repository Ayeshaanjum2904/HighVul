import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputValor = ({
  valor,
}) => (
  <FormatNumber
    type="currency"
    label="Valor"
    value={valor.toFixed(2)}
    disabled
  />
);

InputValor.propTypes = {
  valor: PropTypes.any,

};

InputValor.defaultProps = {
  valor: null,
};

export default InputValor;
