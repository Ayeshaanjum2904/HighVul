import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputConcessionariaNome = ({
  concessionariaNome,
}) => (
  <FormatNumber
    type="text"
    label="Concessionária"
    value={concessionariaNome}
    disabled
  />
);

InputConcessionariaNome.propTypes = {
  concessionariaNome: PropTypes.string,
};

InputConcessionariaNome.defaultProps = {
  concessionariaNome: '',
};

export default InputConcessionariaNome;
