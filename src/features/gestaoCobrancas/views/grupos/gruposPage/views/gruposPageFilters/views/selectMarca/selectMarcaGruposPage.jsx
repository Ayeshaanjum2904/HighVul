import React from 'react';
import PropTypes from 'prop-types';

import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { trackedProperties } from 'modules';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});

const SelectMarcaGruposPage = ({
  selectedMarca, updateFiltersProperty, marcas, isLoading,
}) => (
  <NewMultipleSelectComponent
    dictionary={dictionary()}
    label="Brand"
    dataCy="seletor-marca"
    options={marcas}
    selectedOption={selectedMarca}
    setOption={(m) => {
      updateFiltersProperty('marca', m === 'all' ? null : m);
    }}
    mixpanelPage={trackedProperties.gruposPage}
    mixpanelType="brand"
    minWidth={200}
    disabled={isLoading}
    startWithAllSelected={false}
    showSearchInput={false}
  />
);

SelectMarcaGruposPage.propTypes = {
  selectedMarca: PropTypes.array,
  updateFiltersProperty: PropTypes.func,
  marcas: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaGruposPage.defaultProps = {
  selectedMarca: null,
  updateFiltersProperty: () => {},
  marcas: null,
  isLoading: false,
};

export default SelectMarcaGruposPage;
