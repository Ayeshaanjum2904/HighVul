import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const SelectMarcaDadosGrupo = ({
  marcaId, updateGrupoProperty, marcas, errors, isEditing,
}) => (
  <FormInput
    type="select"
    placeholder="Selecione uma brand"
    label="Brand"
    items={marcas}
    value={marcaId ?? '_default'}
    setValue={(value) => {
      updateGrupoProperty('marcaId', value);
    }}
    error={errors.some((e) => e.propertyName === 'Marca')}
    errorMessage={errors.find((e) => e.propertyName === 'Marca')?.message}
    disabled={!isEditing}
  />
);

SelectMarcaDadosGrupo.propTypes = {
  marcaId: PropTypes.number,
  updateGrupoProperty: PropTypes.func,
  marcas: PropTypes.array,
  errors: PropTypes.array,
  isEditing: PropTypes.bool,
};

SelectMarcaDadosGrupo.defaultProps = {
  marcaId: null,
  updateGrupoProperty: () => {},
  marcas: null,
  errors: [],
  isEditing: false,
};

export default SelectMarcaDadosGrupo;
