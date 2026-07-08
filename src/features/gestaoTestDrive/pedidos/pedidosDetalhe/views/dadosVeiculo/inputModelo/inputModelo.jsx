import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputModelo = ({
  modelo,
}) => (
  <FormatNumber
    type="number"
    label="Cód. Modelo"
    value={modelo}
    disabled
  />
);

InputModelo.propTypes = {
  modelo: PropTypes.any,
};

InputModelo.defaultProps = {
  modelo: '',
};

export default InputModelo;
