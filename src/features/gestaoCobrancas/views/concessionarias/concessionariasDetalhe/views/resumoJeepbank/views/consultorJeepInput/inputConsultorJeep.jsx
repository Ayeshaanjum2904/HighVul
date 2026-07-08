import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputConsultorJeep = ({
  consultor, isDisabled, onChange, errors,
}) => (
  <FormInput
    type="text"
    label="Consultor Comercial Jeep Bank"
    value={consultor}
    disabled={isDisabled}
    setValue={(value) => onChange(value)}
    error={errors.some((e) => e.propertyName === 'ConsultorJeep')}
    errorMessage={errors.find((e) => e.propertyName === 'ConsultorJeep')?.message}
  />
);

InputConsultorJeep.propTypes = {
  consultor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.array,
};

InputConsultorJeep.defaultProps = {
  consultor: '',
  isDisabled: true,
  onChange: () => {},
  errors: [],
};

export default InputConsultorJeep;
