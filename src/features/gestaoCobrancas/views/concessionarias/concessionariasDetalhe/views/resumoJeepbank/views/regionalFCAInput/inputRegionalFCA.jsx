import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRegionalFCA = ({
  regional, onChange, isDisabled, errors,
}) => (
  <FormInput
    type="text"
    label="Descrição Regional FCA"
    value={regional}
    disabled={isDisabled}
    setValue={(value) => onChange(value)}
    error={errors.some((e) => e.propertyName === 'RegionalFCA')}
    errorMessage={errors.find((e) => e.propertyName === 'RegionalFCA')?.message}
  />
);

InputRegionalFCA.propTypes = {
  regional: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  errors: PropTypes.array,
};

InputRegionalFCA.defaultProps = {
  regional: '',
  onChange: () => {},
  isDisabled: true,
  errors: [],
};

export default InputRegionalFCA;
