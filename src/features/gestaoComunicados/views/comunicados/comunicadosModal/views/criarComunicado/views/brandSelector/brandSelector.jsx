import React from 'react';
import PropTypes from 'prop-types';

import { Mixpanel, trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const BrandSelector = ({
  brands, selectedBrands, setSelectedBrands,
}) => {
  const formattedBrands = brands.map((brand) => ({
    text: brand.label,
    value: brand.value,
  }));
  const selectedOptions = formattedBrands.filter((brand) => selectedBrands.includes(brand.value));

  return (
    <NewMultipleSelectComponent
      label="Brand"
      dataCy="seletor-comunicados-brand"
      selectedOption={selectedOptions}
      setOption={(selected) => {
        const selectedValues = selected.map((option) => option.value);
        setSelectedBrands(selectedValues);
        Mixpanel.trackPageFilter(trackedProperties.comunicadosPage, 'brand');
      }}
      options={formattedBrands}
      startWithAllSelected={false}
      openMenuTop
    />
  );
};

BrandSelector.propTypes = {
  setSelectedBrands: PropTypes.func,
  selectedBrands: PropTypes.array,
  brands: PropTypes.array,
};

BrandSelector.defaultProps = {
  setSelectedBrands: () => {},
  selectedBrands: [],
  brands: [],
};

export default BrandSelector;
