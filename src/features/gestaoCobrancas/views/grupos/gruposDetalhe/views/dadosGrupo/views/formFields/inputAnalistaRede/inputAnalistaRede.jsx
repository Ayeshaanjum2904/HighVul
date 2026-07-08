import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputAnalistaRede = ({
  analistaRede, updateGrupoProperty, errors, isEditing,
}) => (
  <FormInput
    type="text"
    label="Analista Financiamento de Rede"
    value={analistaRede}
    setValue={(value) => {
      updateGrupoProperty('analistaRede', value);
    }}
    error={errors.some((e) => e.propertyName === 'AnalistaRede')}
    errorMessage={errors.find((e) => e.propertyName === 'AnalistaRede')?.message}
    disabled={!isEditing}
  />
);

InputAnalistaRede.propTypes = {
  updateGrupoProperty: PropTypes.func,
  analistaRede: PropTypes.string,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

InputAnalistaRede.defaultProps = {
  updateGrupoProperty: () => {},
  analistaRede: null,
  errors: [],
  isEditing: false,
};

export default InputAnalistaRede;
