import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});

const SelectMarcaVeiculosPage = ({
  marca, setMarca, marcas, isLoading,
}) => (
  <NewMultipleSelectComponent
    dictionary={dictionary()}
    label="Brand"
    dataCy="seletor-marca"
    options={marcas}
    selectedOption={marca}
    setOption={(m) => {
      setMarca(m === 'all' ? null : m);
    }}
    mixpanelPage={trackedProperties.veiculosPage}
    mixpanelType="brand"
    minWidth={200}
    disabled={isLoading}
    startWithAllSelected
    showSearchInput={false}
  />
);

SelectMarcaVeiculosPage.propTypes = {
  marca: PropTypes.array,
  setMarca: PropTypes.func,
  marcas: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaVeiculosPage.defaultProps = {
  marca: '',
  setMarca: () => {},
  marcas: null,
  isLoading: false,
};

export default SelectMarcaVeiculosPage;
