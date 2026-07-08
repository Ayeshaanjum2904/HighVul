import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import { trackedProperties } from 'modules';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import { CircularProgress } from '@material-ui/core';

const dictionary = () => ({
  singular: 'regional',
  plural: 'regionais',
  type: 'a',
});

const RegionalSelector = ({
  selectedRegional, regionais, setSelectedRegional,
  filterGrupos, filterPontos, regionaisIsLoading,
}) => {
  const debouncedSetGrupos = useCallback(debounce(500, async () => {
    await Promise.all([filterGrupos()]);
    await Promise.all([filterPontos()]);
  }), []);
  return (
    !regionaisIsLoading
      ? (
        <NewMultipleSelectComponent
          options={regionais}
          setOption={setSelectedRegional}
          selectedOption={selectedRegional}
          debounced={debouncedSetGrupos}
          label="Regional"
          dataCy="seletor-dashboard-regional"
          dictionary={dictionary()}
          mixpanelPage={trackedProperties.dashboardPage}
          mixpanelType="regional"
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

RegionalSelector.propTypes = {
  filterGrupos: PropTypes.func,
  filterPontos: PropTypes.func,
  setSelectedRegional: PropTypes.func,
  regionais: PropTypes.array,
  selectedRegional: PropTypes.array,
  regionaisIsLoading: PropTypes.bool,
};

RegionalSelector.defaultProps = {
  filterGrupos: () => {},
  setSelectedRegional: () => {},
  filterPontos: () => {},
  regionais: [],
  selectedRegional: null,
  regionaisIsLoading: false,
};

export default RegionalSelector;
