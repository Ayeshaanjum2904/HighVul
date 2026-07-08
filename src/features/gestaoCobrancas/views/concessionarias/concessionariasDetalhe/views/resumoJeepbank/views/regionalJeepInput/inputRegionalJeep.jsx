import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRegionalJeep = ({
  regional, onChange, isDisabled, errors,
}) => (
  <FormInput
    type="text"
    label="Regional Jeep Bank"
    value={regional}
    disabled={isDisabled}
    setValue={(value) => onChange(value)}
    error={errors.some((e) => e.propertyName === 'RegionalJeep')}
    errorMessage={errors.find((e) => e.propertyName === 'RegionalJeep')?.message}
  />
);

InputRegionalJeep.propTypes = {
  regional: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  errors: PropTypes.array,
};

InputRegionalJeep.defaultProps = {
  regional: '',
  onChange: () => {},
  isDisabled: true,
  errors: [],
};

export default InputRegionalJeep;
