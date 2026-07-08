import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputMarca = ({
  marca,
}) => (
  <FormatNumber
    type="text"
    label="Marca"
    value={marca}
    disabled
  />
);

InputMarca.propTypes = {
  marca: PropTypes.string,
};

InputMarca.defaultProps = {
  marca: '',
};

export default InputMarca;
