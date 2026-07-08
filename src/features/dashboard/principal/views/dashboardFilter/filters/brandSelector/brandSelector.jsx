import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import { trackedProperties } from 'modules';
import { CircularProgress } from '@material-ui/core';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});

const BrandSelector = ({
  brands, selectedBrands, setSelectedBrands, filterPontos,
  filterModelos, filterGrupos, brandsIsLoading,
}) => {
  const debouncedSetBrands = useCallback(debounce(500, async () => {
    await Promise.all([filterModelos(), filterGrupos()]);
    await Promise.all([filterPontos()]);
  }), []);
  return (
    !brandsIsLoading
      ? (
        <NewMultipleSelectComponent
          dictionary={dictionary()}
          debounced={debouncedSetBrands}
          label="Brand"
          dataCy="seletor-dashboard-brand"
          selectedOption={selectedBrands}
          setOption={setSelectedBrands}
          options={brands}
          mixpanelPage={trackedProperties.dashboardPage}
          mixpanelType="brand"
          startWithAllSelected={false}
        />
      )
      : (
        <div className="dashboard__page__filter__content_loading-container">
          <CircularProgress className="dashboard__page__filter__content_loading" color="inherit" size="18px" />
        </div>
      )
  );
};

BrandSelector.propTypes = {
  setSelectedBrands: PropTypes.func,
  selectedBrands: PropTypes.array,
  filterModelos: PropTypes.func,
  filterGrupos: PropTypes.func,
  filterPontos: PropTypes.func,
  brands: PropTypes.array,
  brandsIsLoading: PropTypes.bool,
};

BrandSelector.defaultProps = {
  setSelectedBrands: () => {},
  selectedBrands: null,
  filterModelos: () => {},
  filterGrupos: () => {},
  filterPontos: () => {},
  brands: [],
  brandsIsLoading: false,
};

export default BrandSelector;
