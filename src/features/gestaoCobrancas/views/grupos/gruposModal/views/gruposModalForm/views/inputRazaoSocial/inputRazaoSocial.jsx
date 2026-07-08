import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRazaoSocial = ({
  razaoSocial, updateGrupoProperty, errors,
}) => (
  <FormInput
    type="text"
    label="Razão Social"
    value={razaoSocial}
    setValue={(value) => {
      updateGrupoProperty('razaoSocial', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'RazaoSocial')}
    errorMessage={errors.find((e) => e.propertyName === 'RazaoSocial')?.message}
  />
);

InputRazaoSocial.propTypes = {
  updateGrupoProperty: PropTypes.func,
  razaoSocial: PropTypes.string,
  errors: PropTypes.array,
};

InputRazaoSocial.defaultProps = {
  updateGrupoProperty: () => {},
  razaoSocial: null,
  errors: [],
};

export default InputRazaoSocial;
