import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputModelYear = ({
  modelYear, updateVeiculoProperty,
}) => (
  <FormatInput
    type="number"
    label="Model/Year"
    value={modelYear}
    setValue={(value) => { updateVeiculoProperty('modelYear', value); }}
    format="####"
  />
);

InputModelYear.propTypes = {
  modelYear: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
};

InputModelYear.defaultProps = {
  updateVeiculoProperty: () => {},
  modelYear: null,
};

export default InputModelYear;
