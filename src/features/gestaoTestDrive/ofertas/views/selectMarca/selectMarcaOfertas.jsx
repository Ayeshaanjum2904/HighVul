import React from 'react';
import PropTypes from 'prop-types';

import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { dictonaryBrand } from 'common/controls/newMultipleSelectComponent/dictionary';

const SelectMarcaOfertas = ({
  marcas, marcasComOfertas, setMarcas, isLoading,
}) => {
  const options = marcasComOfertas.map((brand) => ({ text: brand, value: brand }));

  return (
    <NewMultipleSelectComponent
      disabled={isLoading}
      options={options}
      setOption={(values) => {
        setMarcas(values);
      }}
      selectedOption={marcas}
      label="Brand"
      dictionary={dictonaryBrand}
      minWidth={236}
      mixpanelPage={trackedProperties.ofertasPage}
      mixpanelType="brand"
      dataCy="filter-marcas"
    />
  );
};

SelectMarcaOfertas.propTypes = {
  marcas: PropTypes.array,
  marcasComOfertas: PropTypes.array,
  setMarcas: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectMarcaOfertas.defaultProps = {
  marcas: [],
  marcasComOfertas: [],
  setMarcas: () => {},
  isLoading: false,
};

export default SelectMarcaOfertas;
