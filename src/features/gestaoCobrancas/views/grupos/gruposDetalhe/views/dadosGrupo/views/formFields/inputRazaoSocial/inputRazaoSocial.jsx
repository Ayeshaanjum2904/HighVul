import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRazaoSocial = ({
  razaoSocial, updateGrupoProperty, errors, isEditing,
}) => (
  <FormInput
    type="text"
    label="Razão Social"
    value={razaoSocial}
    setValue={(value) => {
      updateGrupoProperty('razaoSocial', value);
    }}
    error={errors.some((e) => e.propertyName === 'RazaoSocial')}
    errorMessage={errors.find((e) => e.propertyName === 'RazaoSocial')?.message}
    disabled={!isEditing}
  />
);

InputRazaoSocial.propTypes = {
  updateGrupoProperty: PropTypes.func,
  razaoSocial: PropTypes.string,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

InputRazaoSocial.defaultProps = {
  updateGrupoProperty: () => {},
  razaoSocial: null,
  errors: [],
  isEditing: false,
};

export default InputRazaoSocial;
