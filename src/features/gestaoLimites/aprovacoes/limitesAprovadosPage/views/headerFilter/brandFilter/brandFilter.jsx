import React from 'react';
import PropTypes from 'prop-types';

import MultSelect from 'common/controls/multSelect/multSelect';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});

const BrandFilter = ({
  brand, setBrand, brands, isLoading,
}) => (
  <MultSelect
    dictionary={dictionary()}
    label="Brand"
    dataCy="seletor-brand"
    selectedOption={brand}
    setOption={setBrand}
    options={brands}
    disabled={isLoading}
    minWidth={200}
  />
);

BrandFilter.propTypes = {
  brand: PropTypes.array,
  setBrand: PropTypes.func,
  brands: PropTypes.array,
  isLoading: PropTypes.bool,
};

BrandFilter.defaultProps = {
  brand: [],
  setBrand: () => {},
  brands: [],
  isLoading: false,
};

export default BrandFilter;
