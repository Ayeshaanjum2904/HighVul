import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputCor = ({
  cor,
}) => (
  <FormatNumber
    type="text"
    label="Cor"
    value={cor}
    disabled
  />
);

InputCor.propTypes = {
  cor: PropTypes.string,
};

InputCor.defaultProps = {
  cor: '',
};

export default InputCor;
