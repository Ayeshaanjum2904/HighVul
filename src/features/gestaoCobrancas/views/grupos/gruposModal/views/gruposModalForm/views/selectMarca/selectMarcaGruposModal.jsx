import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const SelectMarcaGruposModal = ({
  marcaId, updateGrupoProperty, marcas, errors,
}) => (
  <FormInput
    type="select"
    placeholder="Selecione uma brand"
    label="Brand"
    items={marcas}
    value={marcaId}
    setValue={(value) => {
      updateGrupoProperty('marcaId', value);
    }}
    error={errors.some((e) => e.propertyName === 'Marca')}
    errorMessage={errors.find((e) => e.propertyName === 'Marca')?.message}
  />
);

SelectMarcaGruposModal.propTypes = {
  marcaId: PropTypes.number,
  updateGrupoProperty: PropTypes.func,
  marcas: PropTypes.array,
  errors: PropTypes.array,
};

SelectMarcaGruposModal.defaultProps = {
  marcaId: null,
  updateGrupoProperty: () => {},
  marcas: null,
  errors: [],
};

export default SelectMarcaGruposModal;
