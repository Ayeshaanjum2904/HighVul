import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputProduto = ({
  produto,
}) => (
  <FormatNumber
    type="text"
    label="Produto"
    value={produto}
    disabled
  />
);

InputProduto.propTypes = {
  produto: PropTypes.any,
};

InputProduto.defaultProps = {
  produto: '',
};

export default InputProduto;
