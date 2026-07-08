import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputCnpj = ({ cnpj, updateGrupoProperty, errors }) => (
  <FormInput
    type="number"
    label="CNPJ"
    value={cnpj}
    setValue={(value) => {
      updateGrupoProperty('cnpj', value);
    }}
    disabled={false}
    format="##.###.###/####.##"
    error={errors.some((e) => e.propertyName === 'Cnpj')}
    errorMessage={errors.find((e) => e.propertyName === 'Cnpj')?.message}
  />
);

InputCnpj.propTypes = {
  updateGrupoProperty: PropTypes.func,
  cnpj: PropTypes.string,
  errors: PropTypes.array,
};

InputCnpj.defaultProps = {
  updateGrupoProperty: () => {},
  cnpj: null,
  errors: [],
};

export default InputCnpj;
