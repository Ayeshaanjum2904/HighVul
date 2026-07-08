import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const SelectRegionalDadosGrupo = ({
  regionalId, updateGrupoProperty, regionais, errors, isEditing,
}) => (
  <FormInput
    type="select"
    placeholder="Selecione uma regional"
    label="Regional"
    value={regionalId ?? '_default'}
    items={regionais}
    setValue={(value) => {
      updateGrupoProperty('regionalId', value);
    }}
    error={errors.some((e) => e.propertyName === 'Regional')}
    errorMessage={errors.find((e) => e.propertyName === 'Regional')?.message}
    disabled={!isEditing}
  />
);

SelectRegionalDadosGrupo.propTypes = {
  regionalId: PropTypes.number,
  updateGrupoProperty: PropTypes.func,
  regionais: PropTypes.array,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

SelectRegionalDadosGrupo.defaultProps = {
  regionalId: null,
  updateGrupoProperty: () => {},
  regionais: null,
  errors: [],
  isEditing: false,
};

export default SelectRegionalDadosGrupo;
