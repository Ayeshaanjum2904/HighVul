import React from 'react';
import PropTypes from 'prop-types';
import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});

const selectBrand = ({
  brand, setBrand, brandList, isLoading,
}) => (
  <NewMultipleSelectComponent
    dictionary={dictionary()}
    label="Brand"
    dataCy="seletor-marca"
    options={brandList}
    selectedOption={brand}
    setOption={(m) => {
      setBrand(m === 'all' ? null : m);
    }}
    mixpanelPage={trackedProperties.historicoPage}
    mixpanelType="brand"
    minWidth={200}
    disabled={isLoading}
    startWithAllSelected
    showSearchInput
  />
);

selectBrand.propTypes = {
  brand: PropTypes.array,
  setBrand: PropTypes.func,
  brandList: PropTypes.array,
  isLoading: PropTypes.bool,
};

selectBrand.defaultProps = {
  brand: null,
  setBrand: () => {},
  brandList: null,
  isLoading: false,
};

export default selectBrand;
