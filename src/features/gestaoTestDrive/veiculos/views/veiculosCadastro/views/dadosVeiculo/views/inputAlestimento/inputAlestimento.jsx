import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputAlestimento = ({
  allestimento, updateVeiculoProperty, disabled,
}) => (
  <FormatInput
    type="text"
    label="Alestimento"
    value={allestimento}
    setValue={(value) => { updateVeiculoProperty('allestimento', value); }}
    disabled={disabled}
  />
);

InputAlestimento.propTypes = {
  allestimento: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
  disabled: PropTypes.bool,
};

InputAlestimento.defaultProps = {
  updateVeiculoProperty: () => {},
  allestimento: null,
  disabled: false,
};

export default InputAlestimento;
