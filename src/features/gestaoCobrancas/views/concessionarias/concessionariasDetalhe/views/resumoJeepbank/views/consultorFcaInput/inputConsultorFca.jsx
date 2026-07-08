import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputConsultorFca = ({
  consultor, isDisabled, onChange, errors,
}) => (
  <FormInput
    type="text"
    label="Consultor de Vendas FCA"
    value={consultor}
    disabled={isDisabled}
    setValue={(value) => onChange(value)}
    error={errors.some((e) => e.propertyName === 'ConsultorFca')}
    errorMessage={errors.find((e) => e.propertyName === 'ConsultorFca')?.message}
  />
);

InputConsultorFca.propTypes = {
  consultor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.array,
};

InputConsultorFca.defaultProps = {
  consultor: '',
  isDisabled: true,
  onChange: () => {},
  errors: [],
};

export default InputConsultorFca;
