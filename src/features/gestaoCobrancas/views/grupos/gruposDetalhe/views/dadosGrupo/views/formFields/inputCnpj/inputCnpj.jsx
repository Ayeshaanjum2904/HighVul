import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputCnpj = ({
  cnpj, updateGrupoProperty, errors, isEditing,
}) => (
  <FormInput
    type="number"
    label="CNPJ"
    value={cnpj}
    setValue={(value) => {
      updateGrupoProperty('cnpj', value);
    }}
    format="##.###.###/####-##"
    error={errors.some((e) => e.propertyName === 'Cnpj')}
    errorMessage={errors.find((e) => e.propertyName === 'Cnpj')?.message}
    disabled={!isEditing}
  />
);

InputCnpj.propTypes = {
  updateGrupoProperty: PropTypes.func,
  cnpj: PropTypes.string,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

InputCnpj.defaultProps = {
  updateGrupoProperty: () => {},
  cnpj: null,
  errors: [],
  isEditing: false,
};

export default InputCnpj;
