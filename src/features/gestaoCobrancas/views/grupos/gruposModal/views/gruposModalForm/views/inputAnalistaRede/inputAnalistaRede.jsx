import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputAnalistaRede = ({
  analistaRede, updateGrupoProperty, errors,
}) => (
  <FormInput
    type="text"
    label="Analista Financiamento de Rede"
    value={analistaRede}
    setValue={(value) => {
      updateGrupoProperty('analistaRede', value);
    }}
    disabled={false}
    error={errors.some((e) => e.propertyName === 'AnalistaRede')}
    errorMessage={errors.find((e) => e.propertyName === 'AnalistaRede')?.message}
  />
);

InputAnalistaRede.propTypes = {
  updateGrupoProperty: PropTypes.func,
  analistaRede: PropTypes.string,
  errors: PropTypes.array,
};

InputAnalistaRede.defaultProps = {
  updateGrupoProperty: () => {},
  analistaRede: null,
  errors: [],
};

export default InputAnalistaRede;
