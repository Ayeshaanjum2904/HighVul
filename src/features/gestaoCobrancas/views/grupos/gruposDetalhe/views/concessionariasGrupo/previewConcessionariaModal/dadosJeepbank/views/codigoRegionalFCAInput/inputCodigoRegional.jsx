import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputCodigoRegional = ({
  codigo,
}) => (
  <FormInput
    type="number"
    label="Código Regional FCA"
    value={codigo}
    disabled
  />
);

InputCodigoRegional.propTypes = {
  codigo: PropTypes.any,
};

InputCodigoRegional.defaultProps = {
  codigo: null,
};

export default InputCodigoRegional;
