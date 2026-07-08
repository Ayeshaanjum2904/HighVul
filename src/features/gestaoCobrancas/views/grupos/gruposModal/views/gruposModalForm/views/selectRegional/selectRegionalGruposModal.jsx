import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const SelectRegionalGruposModal = ({
  regionalId, updateGrupoProperty, regionais, errors,
}) => (
  <FormInput
    type="select"
    placeholder="Selecione uma regional"
    label="Regional"
    value={regionalId}
    items={regionais}
    setValue={(value) => {
      updateGrupoProperty('regionalId', value);
    }}
    error={errors.some((e) => e.propertyName === 'Regional')}
    errorMessage={errors.find((e) => e.propertyName === 'Regional')?.message}
  />
);

SelectRegionalGruposModal.propTypes = {
  regionalId: PropTypes.number,
  updateGrupoProperty: PropTypes.func,
  regionais: PropTypes.array,
  errors: PropTypes.array,
};

SelectRegionalGruposModal.defaultProps = {
  regionalId: null,
  updateGrupoProperty: () => {},
  regionais: null,
  errors: [],
};

export default SelectRegionalGruposModal;
